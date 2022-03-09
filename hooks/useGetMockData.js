import { httpsCallable } from 'firebase/functions'
import { functions } from '../firebase'
import dayjs from "dayjs";
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'

dayjs.extend(utc)
dayjs.extend(timezone)

const useGetMockData = () => {

    const makeMockData = httpsCallable(functions, 'getMockShakeData')
    const parseData = httpsCallable(functions, 'parseFromString')

    const getMockData = async () => {

        const result = await makeMockData({ message: 'LFG' })
        console.log('got mock transactions, now getting parsed result')
        const parsedResult = await parseData({ transactions: result.data, timezone: dayjs.tz.guess()})
        console.log(parsedResult)
        return 
    }

    return {
        getMockData
    }

}

export default useGetMockData