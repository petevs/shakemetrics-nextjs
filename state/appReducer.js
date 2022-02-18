const FETCHING_MARKET_DATA_SUCCESS = "FETCHING_MARKET_DATA_SUCCESS"
const FETCHING_HISTORICAL_DATA_SUCCESS = "FETCHING FETCHING_HISTORICAL_DATA_SUCCESS"
const FETCHING_MARKET_DATA_LOADING = "FETCHING_MARKET_DATA_LOADING"
const FETCHING_MARKET_DATA_ERROR = "FETCHING_MARKET_DATA_ERROR"

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

const TOGGLE_NAV = "TOGGLE_NAV"

export const toggleNav = ( data ) => {
    return { type: TOGGLE_NAV, payload: data}
}

export const initialAppState = {
    navOpened: false,
    marketData: {
        timestamp: null,
        price: {
            ETH: 0,
            BTC: 0
        }
    },
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
        default:
            return state
    }
}