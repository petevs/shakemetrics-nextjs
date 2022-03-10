import { httpsCallable } from 'firebase/functions'
import { functions } from '../firebase'
import { formatResults } from '../helpers/formatForRTDB'
import { rtdb } from '../firebase'
import { ref, set } from 'firebase/database'
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
        console.log('got parsed results')
        const results = formatResults(parsedResult.data)
        console.log(results)
        const writeToRTDB = () => {
            set(ref(rtdb, 'snapshotObj'), {
                ...results.snapshotObj
            })
        }

        writeToRTDB()

        console.log('all done')

        return
    
    
    }

    return {
        getMockData
    }

}

export default useGetMockData