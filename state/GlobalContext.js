import { doc, onSnapshot } from 'firebase/firestore'
import { createContext, useEffect, useReducer } from 'react'
import { db } from '../firebase'
import {
    appReducer,
    initialAppState, 
    fetchingMarketDataLoading, 
    fetchingMarketDataSuccess,
     fetchingMarketDataError 
    } from './appReducer'

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
