import { IoAnalytics, IoWalletSharp } from 'react-icons/io5'
import { BiTransfer, BiArrowToBottom } from 'react-icons/bi'


export const navItems = [
    { 
        title: 'Performance', 
        path: '/dashboard/performance',
        icon: <IoAnalytics />
    },
    { 
        title: 'Wallets', 
        path: '/dashboard/wallets',
        icon: <IoWalletSharp />
    },
    { 
        title: 'Transfers', 
        path: '/dashboard/wallets',
        icon: <BiTransfer />
    },
    { 
        title: 'Purchases', 
        path: '/dashboard/wallets',
        icon: <BiArrowToBottom />
    },
    { 
        title: 'Sales', 
        path: '/dashboard/wallets',
        icon: <IoWalletSharp />
    },
]