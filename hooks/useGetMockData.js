import { httpsCallable } from 'firebase/functions'
import { functions } from '../firebase'

const useGetMockData = () => {

    const makeMockData = httpsCallable(functions, 'makeMockData')

    const getMockData = async () => {

        console.log('getting data')
        const result = await makeMockData({ message: 'LFG' })

        console.log(result)
        return result
    }

    return {
        getMockData
    }

}

export default useGetMockData