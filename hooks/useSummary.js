import { data } from '../data/dummyData'
import { useContext } from 'react'
import { GlobalContext } from '../state/GlobalContext'
import { convertDateToFriendly } from '../helpers/dateRanges'
import dayjs from 'dayjs'

const useSummary = () => {

    const { state } = useContext(GlobalContext)
    const { dateRange } = state

    console.log(dateRange)

    // const startDate = convertDateToFriendly(dateRange[0])
    // const endDate = convertDateToFriendly(dateRange[1])

    // const { snapshotObj, snapshotList } = data

    // const firstEntry = snapshotObj[startDate] || snapshotList[0]
    // const lastEntry = snapshotObj[endDate] || snapshotList.at(-1)

    // console.log(firstEntry, lastEntry)

    return {
    }

}

export default useSummary