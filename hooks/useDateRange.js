import { useContext, useState, useEffect } from 'react'
import { changeDateRange } from '../state/appReducer'
import { GlobalContext } from '../state/GlobalContext'
import { dateRangeList, dateRanges } from '../helpers/dateRanges'

const useDateRange = () => {

    const { state, dispatch } = useContext(GlobalContext)
    const { dateRange, dateRangeName } = state

    const [tempDateRange, setTempDateRange] = useState(dateRange)
    const [editing, setEditing] = useState(false)

    useEffect(() => {
        
        if(!editing){
            setTempDateRange(dateRange)
        }

    },[editing, dateRange])

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

    return {
        dateRange,
        dateRangeName,
        dateRangeList,
        tempDateRange,
        setEditing,
        setTempDateRange,
        handleDateChange,
        handlePresetClick
    }
}

export default useDateRange