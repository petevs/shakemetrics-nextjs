import { data } from '../data/dummyData'
import { useContext } from 'react'
import { GlobalContext } from '../state/GlobalContext'
import { convertDateToFriendly } from '../helpers/dateRanges'
import dayjs from 'dayjs'
import { compareSnapshots } from '../helpers/compareSnapshots'

const useSummary = () => {

    const { state } = useContext(GlobalContext)
    const { dateRange } = state

    const startDate = convertDateToFriendly(dateRange[0])
    const endDate = convertDateToFriendly(dateRange[1])

    const { snapshotObj, snapshotList } = data

    const lastIndex = snapshotList.length - 1

    const firstEntry = snapshotObj[startDate] || snapshotList[0]
    const lastEntry = snapshotObj[endDate] || snapshotList[lastIndex]

    const comparison = compareSnapshots(firstEntry, lastEntry, 'historicalPrice')

    const trimmedSnapshotList = () => {
        return snapshotList.slice(firstEntry.index, lastEntry.index)
    }

    const trimmedSnapshots = trimmedSnapshotList()

    return {
        trimmedSnapshots
    }

}

export default useSummary