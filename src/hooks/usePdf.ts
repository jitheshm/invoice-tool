import { useSelector } from 'react-redux';
import { RootState } from '@/lib/store';
import useTotal from './useTotal';
import useSubtotal from './useSubtotal';
import useBalance from './useBalance';
import { generatePDF } from '@/lib/utils/generatePdf';



const usePdf = () => {
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
        generateAndDownloadPdf: () => {
            generatePDF(newInvoice)
        }
    }
    // const total = useTotal()
    // const { paid } = useSelector((state: RootState) => state.invoice);
    // return total - (typeof (paid.value) === 'number' ? paid.value : 0)
};

export default usePdf;
