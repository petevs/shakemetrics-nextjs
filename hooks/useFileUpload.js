import { useState, useContext } from 'react'
import { storage, functions } from '../firebase'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { httpsCallable } from 'firebase/functions'
import { GlobalContext } from '../state/GlobalContext'
import { setResults, toggleDemo } from '../state/appReducer'
import { useRouter } from 'next/router'


const useFileUpload = () => {

    const router = useRouter()

    const [file, setFile] = useState('')
    const [pending, setPending] = useState(false)
    const [url, setUrl] = useState('')
    const [readyToSubmit, setReadyToSubmit] = useState(false)

    const { dispatch } = useContext(GlobalContext)

    const parseData = httpsCallable(functions, 'parseShakepay')

    const handleFileChange = (e) => {
        setFile(e.target.files[0])
    }

    const uploadFile = async ( uploadFile ) => {

        //Make ref to storage storage bucket
        const fileRef = ref(storage, `uploads/${Date.now()}`)
        setPending(true)
        await uploadBytes(fileRef, uploadFile)
        const downloadURL = await getDownloadURL(fileRef)
        setUrl(downloadURL)

        const result = await parseData({ url: downloadURL})
        console.log(result)

        dispatch(setResults(result))
        setPending(false)
        dispatch(toggleDemo(false))
        router.push('/import/success')

    }


    return {
        file,
        setFile,
        pending,
        url,
        readyToSubmit,
        handleFileChange,
        uploadFile
    }
}

export default useFileUpload