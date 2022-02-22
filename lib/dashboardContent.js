export const dashboardContent = {
    'wallets': {
        title: 'Wallets',
        parentKey: 'wallets',
        currencies: [],
        scorecardList: [
            { id: 0, key: 'BTC', title: 'Ending BTC Balance', type: 'BTC' },
            { id: 1, key: 'ETH', title: 'Ending ETH Balance', type: 'ETH' },
            { id: 2, key: 'CAD', title: 'Ending CAD Balance', type: 'CAD'}
          ]
    },
    'shakingsats': {
        title: '#ShakingSats',
        parentKey: 'shakingSats',
        currencies: [],
        scorecardList: [
            { id: 0, key: 'totalShakingSats', title: 'Total Earned', type: 'BTC' },
            { id: 1, key: 'costBasis', title: 'Cost Basis', type: 'CAD'},
            { id: 2, key: 'longestStreak', title: 'Longest Streak', type: 'DAYS'},

          ]
    },
    'card': {
        title: 'Cashback Card Actvitiy',
        parentKey: 'card',
        currencies: [],
        transactionTypes: ['card cashbacks', 'card transactions'],
        scorecardList: [
            { id: 0, key: 'totalCardSpend', title: 'Total Card Spend', type: 'CAD' },
            { id: 1, key: 'totalCashBackBTC', title: 'Cashback Rewards', type: 'BTC' },
            { id: 2, key: 'costBasis', title: 'Cost Basis', type: 'CAD' },

          ]
    },
    'buy': {
        title: 'Buy',
        parentKey: 'buySell',
        currencies: ['BTC', 'ETH'],
        transactionTypes: ['purchase/sale'],
        scorecardList: [
            { id: 0, key: 'totalPurchased', title: 'Total Purchased'},
            { id: 1, key: 'totalInvested', title: 'Total Invested', type: 'CAD' },
            // { id: 2, key: 'avgCost', title: 'Average Purchase Price (CAD)', type: 'CAD' },
          ]
    },
    'sell': {
        title: 'Sell',
        parentKey: 'buySell',
        currencies: ['BTC', 'ETH'],
        scorecardList: [
            { id: 0, key: 'totalSold', title: 'Total Sold'},
            { id: 1, key: 'totalProceeds', title: 'Total Proceeds', type: 'CAD' },
          ]
    },
    'transfers': {
        title: 'Transfers',
        parentKey: 'transfers',
        currencies: ['CAD', 'BTC', 'ETH'],
        scorecardList: [
            { id: 0, key: 'in', title: 'Transfered In'},
            { id: 1, key: 'out', title: 'Transferred Out'},
            { id: 2, key: 'net', title: 'Net Transfers'},
          ]
    },
    'performance': {
        title: 'Performance',
        parentKey: 'performance',
        currencies: ['ALL', 'BTC', 'ETH'],
        scorecardList: [
            { id: 0, key: 'totalReturn', title: 'Total Return', type: 'CAD'},
            { id: 1, key: 'unrealizedGain', title: 'Unrealized Gain', type: 'CAD' },
            { id: 2, key: 'realizedGain', title: 'RealizedGain', type: 'CAD' },
          ]
    },
    'peers': {
        title: 'Peer Transfers',
        parentKey: 'peerTransfers',
        currencies: ['CAD', 'BTC', 'ETH'],
        scorecardList: [
            { id: 0, key: 'totalSent', title: 'Total Sent'},
            { id: 1, key: 'totalReceived', title: 'Total Received' },
            { id: 2, key: 'net', title: 'Net' },
          ]
    }
}