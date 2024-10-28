import { logout } from "@/lib/features/user/userSlice"
import { useRouter } from "next/navigation"
import { NextRequest } from "next/server"
import { useDispatch } from "react-redux"


const useNavbar = () => {

    const dispatch = useDispatch()
    const router = useRouter()
    const hangleLogout = async () => {

        try {
            const result = await fetch('/api/logout')
            if (result.status === 200) {
                dispatch(logout())
                router.push('/login')
            }

        } catch (error) {
            console.log(error)
        }
    }
    return { hangleLogout }
}

export default useNavbar