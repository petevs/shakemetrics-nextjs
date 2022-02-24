import dayjs from 'dayjs'

const getPerformance = ( current, currency, price ) => {
    const netBalance = () => {
        return current.buySell[currency].totalPurchased - current.buySell[currency].totalSold
    }

    const currentValue = () => {
        return price[currency] * netBalance()
    }

    const avgCost = () => {
        return current.buySell[currency].totalInvested / current.buySell[currency].totalPurchased || 0
    }

    const unrealizedCost = () => {
        return netBalance() * avgCost()
    }

    const unrealizedGain = () => {
        return currentValue() - unrealizedCost() || 0
    }

    const unrealizedROI = () => {
        return unrealizedGain() / unrealizedCost() || 0
    }

    const realizedCost = () => {
        return avgCost() * current.buySell[currency].totalSold
    }

    const realizedGain = () => {
        return current.buySell[currency].totalProceeds - realizedCost()
    }

    const realizedROI = () => {
        return realizedGain() / realizedCost() || 0
    }

    const totalReturn = () => {
        return unrealizedGain() + realizedGain()
    }

    const totalROI = () => {
        return totalReturn() / current.buySell[currency].totalInvested || 0
    }



    return {
            value: currentValue(),
            unrealizedCost: unrealizedCost(),
            unrealizedGain: unrealizedGain(),
            unrealizedROI: unrealizedROI(),
            netBalance: netBalance(),
            avgCost: avgCost(),
            totalSold: current.buySell[currency].totalSold,
            realizedGain: realizedGain(),
            realizedCost: realizedCost(),
            realizedROI: realizedROI(),
            totalReturn: totalReturn(),
            totalROI: totalROI(),
            totalPurchased: current.buySell[currency].totalPurchased,
        }
}



export const updateLastEntry = ( price, lastEntry ) => {

    let updatedEntry = {
        ...lastEntry,
        date: dayjs().format('YYYY-MM-DD'),
        historicalPrice: {
            BTC: price.BTC,
            ETH: price.ETH
        },
        performance: {
            ALL: {},
            BTC: {...getPerformance(lastEntry, 'BTC', price)},
            ETH: {...getPerformance(lastEntry, 'ETH', price)}
        }
    }

    const { performance } = updatedEntry

    return {
        ...updatedEntry,
        performance: {
            ...updatedEntry.performance,
            ALL: {
                value: performance.BTC.value + performance.ETH.value,
                unrealizedGain: performance.BTC.unrealizedGain + performance.ETH.unrealizedGain,
                realizedGain: performance.BTC.realizedGain + performance.ETH.realizedGain,
                totalReturn: performance.BTC.totalReturn + performance.ETH.totalReturn,
            }
        }
    }
}