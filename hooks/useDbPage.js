import { useContext, useState, useEffect } from 'react'
import { GlobalContext } from '../state/GlobalContext'
import { dbPageContent } from '../lib/dbPageContent'
import { convertDateToFriendly } from '../helpers/dateRanges'
import { data } from '../data/dummyData'
import { toBitcoin, toDollars } from '../helpers/currencyFormatters'

const useDbPage = ( details, slug ) => {

    const { state } = useContext(GlobalContext)
    const { dateRange } = state

    const [familyKey, setFamilyKey] = useState(details.familyKey)
    const [parentKey, setParentKey] = useState(details.parentKeys[0].key)
    const [childKey, setChildKey] = useState(details.childKeys ? details.childKeys[0].key : details.childKeys)

    useEffect(() => {
        setFamilyKey(details.familyKey)
        setParentKey(details.parentKeys[0].key)
        setChildKey(details.childKeys ? details.childKeys[0].key : details.childKeys)
    },[details])


    //Toggle and Select Data
    const dbToggleData = details.parentKeys.map( item => ({value: item.key, label: item.label}))
    const showDbSelect = details.childKeys ? true : false
    const dbSelectData = showDbSelect && details.childKeys.map( item => ({value: item.key, label: item.label}))


    //GET SCORECARD DATA

    const { snapshotObj, snapshotList } = data

    const startDate = convertDateToFriendly(dateRange[0])
    const endDate = convertDateToFriendly(dateRange[1])

    const lastIndex = snapshotList.length - 1
    const firstEntry = snapshotObj[startDate] || snapshotList[0]
    const lastEntry = snapshotObj[endDate] || snapshotList[lastIndex]
    

    const formatValue = (val) => {

        if(familyKey === 'performance'){ return toDollars(val)}
        if(familyKey === 'buySell'){
            if(childKey === 'totalPurchased' || childKey === 'totalSold'){ return toBitcoin(val)}
            return toDollars(val)
        }

        if(familyKey === 'shakingSats'){
            if(parentKey === 'totalShakingSats'){ return toBitcoin(val)}
            return toDollars(val)
        }

        if(familyKey === 'card'){
            if(parentKey === 'totalCashBackBTC'){ return toBitcoin(val)}
            return toDollars(val)
        }

        if(parentKey === 'BTC'){ return toBitcoin(val)}
        if(parentKey === 'ETH'){ return toBitcoin(val)}
        if(parentKey === 'CAD'){ return toDollars(val)}
        if(parentKey === 'ALL'){ return toDollars(val)}

        return {text: val, raw: Math.round(val)}
    }

    const getCurrentValue = () => {
        if(childKey){
            return formatValue(lastEntry[familyKey][parentKey][childKey]).text
        }

        return formatValue(lastEntry[familyKey][parentKey]).text
    }

    const getChange = () => {

        let first = firstEntry[familyKey][parentKey]
        let last = lastEntry[familyKey][parentKey]


        if(childKey){
            first = firstEntry[familyKey][parentKey][childKey]
            last = lastEntry[familyKey][parentKey][childKey]
        }

        const diff = last - first
            const percent = `(${(diff / last * 100).toFixed(2)}%)`

        console.log(familyKey, parentKey, childKey)

        return {
            change: formatValue(diff).text,
            percent: percent
        }
    }

    const getTitle = () => {
        try {
            if(showDbSelect){
                return dbSelectData.filter(item => item.value === childKey)[0].label}
            if(dbToggleData){
                return dbToggleData.filter(item => item.value === parentKey)[0].label
            }
        } catch (err) {
            ''
        }
    }


    const [currentValue, setCurrentValue] = useState(getCurrentValue())
    const [change, setChange] = useState(getChange())

    useEffect(() => {
        setCurrentValue(getCurrentValue())
        setChange(getChange())

    }, [parentKey, childKey, dateRange])

    
    //GET CHART DATA

    const trimmedSnapshots = snapshotList.slice(firstEntry.index, lastEntry.index)

    const getSeries = () => {

        const series = [
            { 
                name: getTitle(),
                data: []
            }
        ]

        if(childKey){
            series[0].data = trimmedSnapshots.map(item => item[familyKey][parentKey][childKey])
            return series
        }

        series[0].data = trimmedSnapshots.map(item => item[familyKey][parentKey])

        return series

    }

    const series = getSeries()
    const categories = trimmedSnapshots.map(item => item.date)

    const noActivity = series[0].data.every(item => item === 0)

    return {
        familyKey, setFamilyKey,
        parentKey, setParentKey,
        childKey, setChildKey,
        noActivity,
        dbToggleData, showDbSelect, dbSelectData,
        getTitle, endDate, currentValue, change,
        series, categories

    }
}

export default useDbPage