import { auth } from "../firebase"
import { signInAnonymously } from 'firebase/auth'

const useAuth = () => {

    const continueAsGuest = async () => {
        signInAnonymously(auth)
    }

    return {
        continueAsGuest
    }

}

export default useAuth