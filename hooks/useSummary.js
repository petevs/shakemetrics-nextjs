import { data } from '../data/dummyData'
import { useContext, useState } from 'react'
import { GlobalContext } from '../state/GlobalContext'
import { convertDateToFriendly } from '../helpers/dateRanges'
import dayjs from 'dayjs'
import { compareSnapshots } from '../helpers/compareSnapshots'
import { toBitcoin, toDollars } from '../helpers/currencyFormatters'

const useSummary = (familyKey, parentKey, childKey) => {

    const { state } = useContext(GlobalContext)
    const { dateRange } = state

    const startDate = convertDateToFriendly(dateRange[0])
    const endDate = convertDateToFriendly(dateRange[1])

    const { snapshotObj, snapshotList } = data

    const lastIndex = snapshotList.length - 1

    const firstEntry = snapshotObj[startDate] || snapshotList[0]
    const lastEntry = snapshotObj[endDate] || snapshotList[lastIndex]


    const formatType = (val) => {
        if(parentKey || childKey === 'BTC'){ return toBitcoin(val)}
        if(parentKey || childKey === 'ETH'){ return toBitcoin(val)}
        if(parentKey || childKey === 'CAD'){ return toDollars(val)}
        if(parentKey || childKey === 'ALL'){ return toDollars(val)}

        return Math.round(val)
    }

    const currentVal = childKey ? formatType(lastEntry[familyKey][parentKey][childKey]) : formatType(lastEntry[familyKey][parentKey])

    const compare = () => {
        if(childKey){
            const first = firstEntry[familyKey][parentKey][childKey]
            const last = lastEntry[familyKey][parentKey][childKey]
    
            const diff = last - first
            const percent = `(${(diff / last * 100).toFixed(2)}%)`
    
            return {
                change: formatType(diff),
                percent: percent
            }
        }
    
            const first = firstEntry[familyKey][parentKey]
            const last = lastEntry[familyKey][parentKey]
    
            const diff = last - first
            const percent = `(${(diff / last * 100).toFixed(2)}%)`
    
            return {
                change: formatType(diff),
                percent: percent
            }
    }

    const change = compare()


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

    const getSeries = () => {

        const seriesOutput = [
            {
                name: familyKey, 
                data: []
            }
        ]

        if(childKey){
            seriesOutput[0].data = trimmedSnapshots.map(item => item[familyKey][parentKey][childKey])
            return seriesOutput
        }

        seriesOutput[0].data = trimmedSnapshots.map(item => item[familyKey][parentKey])
        
        return seriesOutput

    }


    const series= getSeries()
    const categories = trimmedSnapshots.map(item => item.date)




    return {
        trimmedSnapshots,
        transactions,
        lastEntry,
        change, 
        series,
        categories,
        currentVal,
        endDate
    }

}

export default useSummary