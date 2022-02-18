import { IoAnalytics, IoWalletSharp, IoCardOutline } from 'react-icons/io5'
import { BiTransfer } from 'react-icons/bi'
import { MdOutlineCallReceived, MdCallMade, MdCall } from 'react-icons/md'
import { AiOutlineShake, AiOutlineInfoCircle } from 'react-icons/ai'
import { FaUserFriends } from 'react-icons/fa'


export const generalItems = [
    { 
        title: 'About', 
        path: '/dashboard/performance',
        icon: <AiOutlineInfoCircle />
    }
]


export const dashboardItems = [
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
        icon: <MdOutlineCallReceived />
    },
    { 
        title: 'Sales', 
        path: '/dashboard/wallets',
        icon: <MdCallMade />
    },
    { 
        title: '#ShakingSats', 
        path: '/dashboard/wallets',
        icon: <AiOutlineShake />
    },
    { 
        title: '#CashbackCard', 
        path: '/dashboard/wallets',
        icon: <IoCardOutline />
    },
    { 
        title: 'Peer Transfers', 
        path: '/dashboard/wallets',
        icon: <FaUserFriends />
    },

]