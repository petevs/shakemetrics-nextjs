import { useContext, useState, useEffect } from 'react'
import { GlobalContext } from '../state/GlobalContext'
import { convertDateToFriendly } from '../helpers/dateRanges'
import { toBitcoin, toDollars } from '../helpers/currencyFormatters'

const useDbPage = ( details, slug ) => {

    const { state } = useContext(GlobalContext)
    const { dateRange, demo } = state

    const [familyKey, setFamilyKey] = useState(details.familyKey)
    const [parentKey, setParentKey] = useState(details.parentKeys[0].key)
    const [childKey, setChildKey] = useState(details.childKeys ? details.childKeys[0].key : details.childKeys)

    useEffect(() => {
        setFamilyKey(details.familyKey)
        setParentKey(details.parentKeys[0].key)
        setChildKey(details.childKeys ? details.childKeys[0].key : details.childKeys)
    },[details])

    //Toggle and Select Data

    const { toggle, menu } = details

    const getToggleData = () => {
        if(!toggle){
            return null
        }
        return details.parentKeys.map( item => ({value: item.key, label: item.label}))
    }

    const getSelectData = () => {
        if(menu === 'parent'){
            return details.parentKeys.map( item => ({value: item.key, label: item.label}))
        }
        if(!menu){
            return null
        }
        
        return details.childKeys.map( item => ({value: item.key, label: item.label}))
    }

    const dbToggleData = getToggleData()
    const dbSelectData = getSelectData()


    //GET SCORECARD DATA

    const { snapshotObj, snapshotList } = state.results
    const { price } = state.marketData

    const startDate = convertDateToFriendly(dateRange[0])
    const endDate = convertDateToFriendly(dateRange[1])

    const firstEntry = snapshotObj[startDate] || snapshotList[0]
    const lastEntry = state.currentEntry()

    const formatValue = (val) => {

        if(familyKey === 'performance'){ return toDollars(val)}
        if(familyKey === 'buySell'){
            if(childKey === 'totalPurchased' || childKey === 'totalSold'){ return toBitcoin(val, price)}
            return toDollars(val)
        }

        if(familyKey === 'shakingSats'){
            if(parentKey === 'totalShakingSats'){ return toBitcoin(val, price)}
            return toDollars(val)
        }

        if(familyKey === 'card'){
            if(parentKey === 'totalCashBackBTC'){ return toBitcoin(val, price)}
            return toDollars(val)
        }

        if(familyKey === 'historicalPrice'){
            return (toDollars(val))
        }

        if(parentKey === 'BTC'){ return toBitcoin(val, price)}
        if(parentKey === 'ETH'){ 
            return {
                ...toBitcoin(val, price),
                type: 'ETH'
            }
        }
        if(parentKey === 'CAD'){ return toDollars(val)}
        if(parentKey === 'ALL'){ return toDollars(val)}

        return {text: val, raw: Math.round(val), type: null}
    }

    const getCurrentValue = () => {
        if(childKey){
            return formatValue(lastEntry[familyKey][parentKey][childKey], price)
        }

        return formatValue(lastEntry[familyKey][parentKey], price)
    }

    const getChange = () => {

        let first = firstEntry[familyKey][parentKey]
        let last = lastEntry[familyKey][parentKey]


        if(childKey){
            first = firstEntry[familyKey][parentKey][childKey]
            last = lastEntry[familyKey][parentKey][childKey]
        }


        const diff = last - first
        const rawPercent = diff / first * 100
        const percent = rawPercent === Infinity ? '(100%)' : `(${(diff / first * 100).toFixed(2)}%)`



        return {
            change: formatValue(diff).text,
            percent: percent,
            raw: diff
        }
    }

    const getTitle = () => {
        try {
            if(menu && toggle){ 
                return dbSelectData.filter(item => item.value === childKey)[0].label}
            if(toggle && !menu){
                return dbToggleData.filter(item => item.value === parentKey)[0].label
            }
            if(!toggle && menu){
                return dbSelectData.filter(item => item.value === parentKey)[0].label
            }
        } catch (err) {
            ''
        }
    }

    // const [currentValue, setCurrentValue] = useState(getCurrentValue())

    const currentValue = getCurrentValue()
    const change = getChange()
    const [chartFormat, setChartFormat] = useState(currentValue.type)


    useEffect(() => {
        setChartFormat(currentValue.type)
    },[currentValue, familyKey, parentKey, childKey, dateRange])

    //GET CHART DATA

    const trimmedSnapshots = state.snapshots()

    const getSeries = () => {

        const series = [
            { 
                name: getTitle(),
                data: []
            } 
        ]

        if(childKey){
            series[0].data = trimmedSnapshots.map((item, idx) => {

                let previous = 0

                if(idx > 0){
                    previous = trimmedSnapshots[idx-1][familyKey][parentKey][childKey]
                }

                const current = item[familyKey][parentKey][childKey]
                const change = current - previous
                const percent = (change / previous * 100).toFixed(2)

                return {
                    x: item.date,
                    y: current,
                    change: change === current ? 'initial' : change,
                    percent: change === current ? 'initial' : `(${percent}%)`
                }
                
            })

            return series
        }

        series[0].data = trimmedSnapshots.map((item, idx) => {

            let previous = 0
            if(idx > 0){
                previous = trimmedSnapshots[idx-1][familyKey][parentKey]
            }

            const current = item[familyKey][parentKey]
            const change = current - previous
            const percent = (change / previous * 100).toFixed(2)

            return {
                x: item.date,
                y: current,
                change: change === current ? 'initial' : change,
                percent: change === current ? 'initial' : `(${percent}%)`
            }
        })

        return series

    }

    const series = getSeries()
    const categories = trimmedSnapshots.map(item => item.date)

    const noActivity = series[0].data.every(item => item === 0)

    return {
        demo,
        familyKey, setFamilyKey,
        parentKey, setParentKey,
        childKey, setChildKey,
        noActivity,
        toggle, menu,
        dbToggleData, dbSelectData,
        getTitle, endDate, currentValue, change, chartFormat,
        series, categories,
        price

    }
}

export default useDbPage