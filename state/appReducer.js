import dayjs from "dayjs"
import { dateRanges, convertDateToFriendly } from "../helpers/dateRanges"
import { updateLastEntry } from "../helpers/updateLastEntry"
import { data } from '../lib/dummyData'


const FETCHING_MARKET_DATA_SUCCESS = "FETCHING_MARKET_DATA_SUCCESS"
const FETCHING_HISTORICAL_DATA_SUCCESS = "FETCHING FETCHING_HISTORICAL_DATA_SUCCESS"
const FETCHING_MARKET_DATA_LOADING = "FETCHING_MARKET_DATA_LOADING"
const FETCHING_MARKET_DATA_ERROR = "FETCHING_MARKET_DATA_ERROR"

const TOGGLE_NAV = "TOGGLE_NAV"

const CHANGE_DATE_RANGE = "CHANGE_DATE_RANGE"

const SET_RESULTS = 'SET_RESULTS'

const TOGGLE_DEMO = 'TOGGLE_DEMO'

export const initialAppState = {
    navOpened: false,
    dateRange: dateRanges["Last 7 Days"],
    dateRangeName: 'Last 7 Days',
    marketData: {
        timestamp: null,
        price: {
            ETH: 0,
            BTC: 0
        }
    },
    results: {...data},
    currentEntry: function(){
        const { snapshotObj, snapshotList } = this.results
        const endDate = convertDateToFriendly(this.dateRange[1])

        const lastIndex = snapshotList.length - 1

        if(!(endDate in snapshotObj)){

            return {
                ...snapshotList[lastIndex],
                date: endDate,
                index: lastIndex + 2,
                ...updateLastEntry(this.marketData.price, snapshotList[lastIndex]),
            }
        }

        if(endDate in snapshotObj && endDate === dayjs().format('YYYY-MM-DD')){
            return {
                ...snapshotList[lastIndex],
                date: endDate,
                ...updateLastEntry(this.marketData.price, snapshotList[lastIndex])
            }
        }

        return {
            ...snapshotObj[endDate],
            date: endDate,
        }


    },
    snapshots: function(){
        const { snapshotObj, snapshotList } = this.results

        const lastIndex = snapshotList.length - 1
        const startDate = convertDateToFriendly(this.dateRange[0])
        const endDate = convertDateToFriendly(this.dateRange[1])
        const firstEntry = snapshotObj[startDate] || snapshotList[0]
        const lastEntry = snapshotObj[endDate] || snapshotList[lastIndex]

        const startIndex = firstEntry.index - 1
        const endIndex = lastEntry.index

        const snapshotCopy = [...snapshotList]

        if(snapshotCopy[snapshotCopy.length -1].date === dayjs().format('YYYY-MM-DD')){
            snapshotCopy.pop()
        }

        snapshotCopy.push(this.currentEntry())

        if(endDate !== dayjs().format('YYYY-MM-DD')){
            return snapshotCopy.slice(startIndex, endIndex)
        }
        
        return snapshotCopy.slice(startIndex, endIndex + 1)
    },
    demo: true
}

export const appReducer = ( state, action) => {
    switch(action.type) {
        
        case FETCHING_MARKET_DATA_LOADING:
            return {
                ...state,
                fetching: true,
            }
        case FETCHING_MARKET_DATA_SUCCESS:
            return {
                ...state,
                fetching: false,
                marketData: action.payload
            }
        case FETCHING_HISTORICAL_DATA_SUCCESS:
            return {
                ...state,
                fetching: false,
                historicalData: action.payload
            }
        case FETCHING_MARKET_DATA_ERROR:
            return {
                ...state,
                fetching: false,
                error: action.payload
            }
        case TOGGLE_NAV:
            return {
                ...state,
                navOpened: action.payload || !state.navOpened,
            }
        case CHANGE_DATE_RANGE:
            return {
                ...state,
                dateRange: action.payload.value,
                dateRangeName: action.payload.name
            }
        case SET_RESULTS:
            return {
                ...state,
                results: action.payload
            }
        case TOGGLE_DEMO:
            return {
                ...state,
                demo: action.payload
            }
        default:
            return state
    }
}

//ACTIONS


//Market Data Actions
export const fetchingMarketDataLoading = (data) => {
    return { type: FETCHING_MARKET_DATA_LOADING, payload: data}
}

export const fetchingMarketDataSuccess = (data) => {
    return { type: FETCHING_MARKET_DATA_SUCCESS, payload: data}
}

export const fetchingHistoricalDataSuccess = (data) => {
    return { type: FETCHING_HISTORICAL_DATA_SUCCESS, payload: data}
}

export const fetchingMarketDataError = (data) => {
    return { type: FETCHING_MARKET_DATA_ERROR, payload: data}
}


//Nav Visibility Toggle
export const toggleNav = ( data ) => {
    return { type: TOGGLE_NAV, payload: data}
}


//Date Range
export const changeDateRange = ( data ) => {
    return { type: CHANGE_DATE_RANGE, payload: data}
}

//CSV results

export const setResults = ( data ) => {
    return { type: SET_RESULTS, payload: data}
}

//Toggle Demo Verison
export const toggleDemo = ( data ) => {
    return { type: TOGGLE_DEMO, payload: data}
}