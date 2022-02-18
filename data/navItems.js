import { IoAnalytics, IoWalletSharp, IoCardOutline } from 'react-icons/io5'
import { BiTransfer } from 'react-icons/bi'
import { MdOutlineCallReceived, MdCallMade, MdCall } from 'react-icons/md'
import { AiOutlineShake, AiOutlineInfoCircle, AiOutlineQuestionCircle } from 'react-icons/ai'
import { FaUserFriends } from 'react-icons/fa'


export const generalItems = [
    { 
        title: 'About', 
        path: '/dashboard/performance',
        icon: <AiOutlineInfoCircle />
    },
    { 
        title: 'FAQ', 
        path: '/dashboard/performance',
        icon: <AiOutlineQuestionCircle />
    }
]


export const dashboardItems = [
    { 
        title: 'Performance', 
        path: '/dashboard/performance',
        slug: 'performance',
        icon: <IoAnalytics />
    },
    { 
        title: 'Wallets', 
        path: '/dashboard/wallets',
        slug: 'wallets',
        icon: <IoWalletSharp />
    },
    { 
        title: 'Transfers', 
        path: '/dashboard/transfers',
        slug: 'transfers',
        icon: <BiTransfer />
    },
    { 
        title: 'Purchases', 
        path: '/dashboard/purchases',
        slug: 'purchases',
        icon: <MdOutlineCallReceived />
    },
    { 
        title: 'Sales', 
        path: '/dashboard/sales',
        slug: 'sales',
        icon: <MdCallMade />
    },
    { 
        title: '#ShakingSats', 
        path: '/dashboard/shakingsats',
        slug: 'shakingsats',
        icon: <AiOutlineShake />
    },
    { 
        title: '#CashbackCard', 
        path: '/dashboard/cashbackcard',
        slug: 'cashbackcard',
        icon: <IoCardOutline />
    },
    { 
        title: 'Peer Transfers', 
        path: '/dashboard/peertransfers',
        slug: 'peertransfers',
        icon: <FaUserFriends />
    },

]