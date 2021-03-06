import { useState, useContext } from 'react'
import { storage, functions } from '../firebase'
import { ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage'
import { httpsCallable } from 'firebase/functions'
import { GlobalContext } from '../state/GlobalContext'
import { setResults, toggleDemo } from '../state/appReducer'
import { useRouter } from 'next/router'
import dayjs from "dayjs";
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'

dayjs.extend(utc)
dayjs.extend(timezone)

const useFileUpload = () => {

    const router = useRouter()

    const [file, setFile] = useState('')
    const [pending, setPending] = useState(false)
    const [url, setUrl] = useState('')
    const [readyToSubmit, setReadyToSubmit] = useState(false)
    const [error, setError] = useState({
        error: false,
        message: ''
    })
    const [success, setSuccess] = useState(false)

    const { state, dispatch } = useContext(GlobalContext)

    const parseData = httpsCallable(functions, 'parseShakepay')

    const handleFileChange = (e) => {
        setFile(e.target.files[0])
    }

    const uploadFile = async ( uploadFile ) => {

        //Make ref to storage storage bucket
        const fileRef = ref(storage, `uploads/${Date.now()}`)
        setError(true)
        setPending(true)
        await uploadBytes(fileRef, uploadFile)
        const downloadURL = await getDownloadURL(fileRef)
        setUrl(downloadURL)
        try {
            const result = await parseData({ url: downloadURL, timezone: dayjs.tz.guess()})
            // console.log(result)
            setPending(false)
            setSuccess(true)
            dispatch(setResults(result.data))
            // console.log(result.data)
            dispatch(toggleDemo(false))
            router.push('/import/success')
            deleteObject(fileRef)
        }
        catch(err){
            setPending(false)
            setError({
                error: true,
                // message: err.message
                message: "The csv file uploaded is not an unaltered Shakepay transaction csv file. Please, try again and make sure it is the original file. If the error persists and you think there is an issue please contact support at hello@shakemetrics.com."
            })
            deleteObject(fileRef)
        }


    }


    return {
        file,
        setFile,
        pending, success,
        error, setError,
        url,
        readyToSubmit,
        handleFileChange,
        uploadFile
    }
}

export default useFileUpload