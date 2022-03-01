import { useContext, useState, useEffect } from 'react'
import { changeDateRange } from '../state/appReducer'
import { GlobalContext } from '../state/GlobalContext'
import { dateRangeList, dateRanges as defaultDateRanges } from '../helpers/dateRanges'
import { data } from '../lib/dummyData'
import dayjs from 'dayjs'

const useDateRange = () => {

    const { state, dispatch } = useContext(GlobalContext)
    const { dateRange, dateRangeName } = state
    const { snapshotList } = state.results.data || data

    const [tempDateRange, setTempDateRange] = useState(dateRange)
    const [editing, setEditing] = useState(false)
    const [dateRanges, setDateRanges] = useState(defaultDateRanges)

    useEffect(() => {
        
        if(!editing){
            setTempDateRange(dateRange)
        }

    },[editing, dateRange])

    useEffect(() => {
        setDateRanges({
            ...defaultDateRanges,
            allTime: [dayjs(snapshotList[0].date).toDate(), defaultDateRanges['All Time'][1]]
        })
    },[snapshotList]) 

    const handlePresetClick = ( preset ) => {

        dispatch(changeDateRange({
            value: dateRanges[preset],
            name: preset
        }))

        setTempDateRange(dateRanges[preset])
    }

    const handleDateChange = ( range ) => {
        setEditing(true)
        setTempDateRange(range)
        
        if(range[0] && range[1]){
            dispatch(changeDateRange({
            value: range,
            name: 'Custom'
            }))
        }
    }

    const minDate = dayjs(snapshotList[0].date).toDate()

    return {
        dateRange,
        dateRangeName,
        dateRangeList,
        tempDateRange,
        minDate,
        setEditing,
        setTempDateRange,
        handleDateChange,
        handlePresetClick
    }
}

export default useDateRange