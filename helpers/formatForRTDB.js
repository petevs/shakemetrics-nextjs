export const formatResults = ( results ) => {

    const formattedList = results.snapshotList.map( item => {
    
        let itemTransactions = []
    
        // if there are transactions map over them change the key names
        if(item.transactions.length > 0){
            
            itemTransactions = item.transactions.map( transaction => {
    
                const newTransaction = {
                    ...transaction,
                    buySellRate: transaction['Buy / Sell Rate'],
                    source: transaction['Source / Destination']
                }
    
                delete newTransaction['Buy / Sell Rate']
                delete newTransaction['Source / Destination']
    
                return {
                    ...newTransaction
                }
    
            })
    
        }
    
        return {
            ...item,
            transactions: itemTransactions
        }
    
    })


    const createSnapshotObj = () => {
        
        const snapshotObj = {}

        formattedList.forEach( snapshot => {
            snapshotObj[snapshot['date']] = {...snapshot}
        })

        return snapshotObj

    }


    return {
        snapshotObj: {...createSnapshotObj()},
        snapshotList: [...formattedList]
    }

}
