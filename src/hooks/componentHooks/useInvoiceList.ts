import { logout } from "@/lib/features/user/userSlice"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"

const useInvoiceList = () => {
    const [invoices, setInvoices] = useState([])
    const dispatch = useDispatch()
    const router = useRouter()

    useEffect(() => {
        async function fetchList() {
            try {
                const result = await fetch('/api/invoice')
                if (result.status === 200) {
                    const resultData = await result.json()
                    setInvoices(resultData.data)
                } else if (result.status === 401) {
                    dispatch(logout())
                    router.push('/login')
                }
            } catch (error) {
                console.log(error)
            }
        }
        fetchList()
    }, [])

    return { invoices }
}

export default useInvoiceList