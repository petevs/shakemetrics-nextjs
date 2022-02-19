import { useContext } from 'react'
import { changeDateRange } from '../state/appReducer'
import { GlobalContext } from '../state/GlobalContext'
import { dateRangeList, dateRanges } from '../helpers/dateRanges'

const useDateRange = () => {

    const { state, dispatch } = useContext(GlobalContext)
    const { dateRange, dateRangeName } = state

    const handlePresetClick = ( preset ) => {

        dispatch(changeDateRange({
            value: dateRanges[preset],
            name: preset
        }))
    }

    const handleDateChange = ( range ) => {
        dispatch(changeDateRange({
            values: range,
            name: 'Custom'
        }))
    }


    return {
        dateRange,
        dateRangeName,
        dateRangeList,
        handlePresetClick,
        handleDateChange
    }
}

export default useDateRange