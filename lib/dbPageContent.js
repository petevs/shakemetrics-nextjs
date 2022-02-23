export const dbPageContent = {
    'performance': {
        title: 'Performance',
        familyKey: 'performance',
        parentKeys: [
            { key: 'ALL', label: 'ALL' },
            { key: 'BTC', label: 'BTC' },
            { key: 'ETH', label: 'ETH' },
        ],
        childKeys: [
            { key: 'totalReturn', label: 'Total Return' }, 
            { key: 'unrealizedGain', label: 'Unrealized Return' }, 
            { key: 'realizedGain', label: 'Realized Return' }, 
        ],
        toggle: 'parent',
        menu: 'child'
    },
    'wallets': {
        title: 'Wallets',
        familyKey: 'wallets',
        parentKeys: [
            { key: 'BTC', label: 'BTC' },
            { key: 'ETH', label: 'ETH' },
            { key: 'CAD', label: 'CAD' },
        ],
        childKeys: null,
        toggle: 'parent',
        menu: null
    },
    'transfers': {
        title: 'Transfers',
        familyKey: 'transfers',
        parentKeys: [
            { key: 'BTC', label: 'BTC' },
            { key: 'ETH', label: 'ETH' },
            { key: 'CAD', label: 'CAD' },
        ],
        childKeys: [
            { key: 'in', label: 'Transferred In' }, 
            { key: 'out', label: 'Transferred Out' }, 
            { key: 'net', label: 'Net Transferred' }, 
        ],
        toggle: 'parent',
        menu: 'child'
    },
    'purchases': {
        title: 'Purchases',
        familyKey: 'buySell',
        parentKeys: [
            { key: 'BTC', label: 'BTC' },
            { key: 'ETH', label: 'ETH' },
        ],
        childKeys: [
            { key: 'totalPurchased', label: 'Total Purchased' }, 
            { key: 'totalInvested', label: 'Total Amount Invested'}, 
        ],
        toggle: 'parent',
        menu: 'child'
    },
    'sales': {
        title: 'Sales',
        familyKey: 'buySell',
        parentKeys: [
            { key: 'BTC', label: 'BTC' },
            { key: 'ETH', label: 'ETH' },
        ],
        childKeys: [
            { key: 'totalSold', label: 'Total Sold' }, 
            { key: 'totalProceeds', label: 'Total Proceeds'}, 
        ],
        toggle: 'parent',
        menu: 'child'
    },
    'shaking-sats': {
        title: '#ShakingSats',
        familyKey: 'shakingSats',
        parentKeys: [
            { key: 'totalShakingSats', label: 'Total BTC Earned' },
            { key: 'costBasis', label: 'Cost Basis' },
        ],
        childKeys: null,
        toggle: null,
        menu: 'parent'
    },
    'cashback-card': {
        title: '#CashbackCard',
        familyKey: 'card',
        parentKeys: [
            { key: 'totalCardSpend', label: 'Total Card Spend' },
            { key: 'totalCashBackBTC', label: 'Total Cash Back BTC' },
            { key: 'costBasis', label: 'Cost Basis' },
        ],
        childKeys: null,
        toggle: null,
        menu: 'parent'
    },
    'peer-transfers': {
        title: 'Peer Transfers',
        familyKey: 'peerTransfers',
        parentKeys: [
            { key: 'CAD', label: 'CAD' },
            { key: 'BTC', label: 'BTC' },
            { key: 'ETH', label: 'ETH' },
        ],
        childKeys: [
            { key: 'totalSent', label: 'Sent' }, 
            { key: 'totalReceived', label: 'Received' }, 
            { key: 'net', label: 'Net Transferred' }, 
        ],
        toggle: 'parent',
        menu: 'child'
    },
}