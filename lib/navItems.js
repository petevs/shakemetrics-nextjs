import { IoAnalytics, IoWalletSharp, IoCardOutline } from 'react-icons/io5'
import { BiTransfer } from 'react-icons/bi'
import { MdOutlineCallReceived, MdCallMade, MdCall } from 'react-icons/md'
import { AiOutlineShake, AiOutlineInfoCircle, AiOutlineQuestionCircle } from 'react-icons/ai'
import { FaUserFriends } from 'react-icons/fa'
import { CgImport } from 'react-icons/cg'


export const generalItems = [
    { 
        title: 'About', 
        path: '/about',
        icon: <AiOutlineInfoCircle />
    },
    { 
        title: 'FAQ', 
        path: '/faq',
        icon: <AiOutlineQuestionCircle />
    },
    { 
        title: 'Import CSV', 
        path: '/import',
        icon: <CgImport />
    },

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
        path: '/dashboard/shaking-sats',
        slug: 'shaking-sats',
        icon: <AiOutlineShake />
    },
    { 
        title: '#CashbackCard', 
        path: '/dashboard/cashback-card',
        slug: 'cashback-card',
        icon: <IoCardOutline />
    },
    { 
        title: 'Peer Transfers', 
        path: '/dashboard/peer-transfers',
        slug: 'peer-transfers',
        icon: <FaUserFriends />
    },

]