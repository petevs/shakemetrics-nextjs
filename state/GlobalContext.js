import { doc, onSnapshot } from 'firebase/firestore'
import { createContext, useEffect, useReducer } from 'react'
import { db, rtdb } from '../firebase'
import { ref, get, child } from 'firebase/database'
import {
    appReducer,
    initialAppState, 
    fetchingMarketDataLoading, 
    fetchingMarketDataSuccess,
    fetchingMarketDataError,
    setResults 
} from './appReducer'
import { makeDummy } from '../helpers/makeDummy'

export const GlobalContext = createContext()

export const GlobalProvider = ({children}) => {

    const [ state, dispatch ] = useReducer(appReducer, initialAppState)

    useEffect(() => {

        const getCurrentPrices = async () => {

            dispatch(fetchingMarketDataLoading)

            const unsub = onSnapshot(doc(db, 'shakepayPrice', 'currentPrice'), (doc) => {
                const result = doc.data()
                dispatch(fetchingMarketDataSuccess(result)),
                (error) => {
                    dispatch(fetchingMarketDataError(error))
                }
            })
            
            return unsub

        }

        getCurrentPrices()

    },[])

    useEffect(() => {
        const getData = async () => {
            const dbRef = ref(rtdb)
            const result = await get(child( dbRef, 'snapshotObj'))
            const snapshotObj = result.val()
            const results = makeDummy(snapshotObj)
            dispatch(setResults(results))
        }

        getData()

    },[])

    return (
        <GlobalContext.Provider
            value={{
                state,
                dispatch
            }}
        >
            {children}
        </GlobalContext.Provider>
    )
}
