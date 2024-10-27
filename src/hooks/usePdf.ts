import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/lib/store';
import useSubtotal from './useSubtotal';
import useBalance from './useBalance';
import { generatePDF } from '@/lib/utils/generatePdf';
import { useRouter } from 'next/navigation';
import { logout } from '@/lib/features/user/userSlice';
import { setErrors } from '@/lib/features/errors/errorSlice';



const usePdf = () => {
    const router = useRouter()
    const dispatch = useDispatch()
    const invoice = useSelector((state: RootState) => state.invoice);
    const itemsWithAmount = invoice.items.map((ele) => {
        const quatity = typeof (ele.quantity) === 'number' ? ele.quantity : 0
        const rate = typeof (ele.rate) === 'number' ? ele.rate : 0
        const amount = rate * quatity
        return {
            ...ele,
            amount
        }
    })
    const subtotal = useSubtotal()

    const balance = useBalance()

    const newInvoice = {
        ...invoice,
        items: itemsWithAmount,
        discount: {
            ...invoice.discount,
            value: typeof (invoice.discount.value) === 'number' ? invoice.discount.value : 0
        },
        shipping: {
            ...invoice.shipping,
            value: typeof (invoice.shipping.value) === 'number' ? invoice.shipping.value : 0
        },
        subtotal: {
            ...invoice.subtotal,
            value: subtotal
        },
        balance: {
            ...invoice.balance,
            value: balance
        },
    }

    console.log(newInvoice)


    return {
        generateAndDownloadPdf: async () => {
            try {
                const res = await fetch('/api/invoice', {
                    method: 'POST',
                    body: JSON.stringify(newInvoice)
                })
                console.log(res.status)

                if (res.status === 201) {
                    return generatePDF(newInvoice)
                }
                if (res.status === 401) {
                    dispatch(logout())
                    router.push('/login')
                    return
                }
                if (res.status === 409) {
                    dispatch(setErrors( { invoiceId: { invoiceObjError: "Invoice id already exist" }  }))
                }


            } catch (error) {
                console.log(error)
            }

        }
    }
    // const total = useTotal()
    // const { paid } = useSelector((state: RootState) => state.invoice);
    // return total - (typeof (paid.value) === 'number' ? paid.value : 0)
};

export default usePdf;
