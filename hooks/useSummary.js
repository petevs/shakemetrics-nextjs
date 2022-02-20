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

    const compare = ( parent, child ) => {
        return compareSnapshots(firstEntry, lastEntry, parent, child)
    }


    const trimmedSnapshotList = () => {
        return snapshotList.slice(firstEntry.index, lastEntry.index)
    }

    const transactionList = () => {
        const transactionsByDay = trimmedSnapshotList().map(item => item.transactions)

        const allTransactions = []

        transactionsByDay.forEach( day => {
            day.forEach((transaction, idx) => allTransactions.push({
                ...transaction,
                id: idx
            }))
        })

        return allTransactions

    }

    const trimmedSnapshots = trimmedSnapshotList()
    const transactions = transactionList()

    return {
        trimmedSnapshots,
        transactions,
        lastEntry,
        compare
    }

}

export default useSummary