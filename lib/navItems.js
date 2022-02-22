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
        icon: <IoAnalytics />,
        description: 'How is my portfolio doing today? This month? This year? Since the beginning?'
    },
    { 
        title: 'Wallets', 
        path: '/dashboard/wallets',
        slug: 'wallets',
        icon: <IoWalletSharp />,
        description: 'What are my balances? How have they changed over time?'
    },
    { 
        title: 'Transfers', 
        path: '/dashboard/transfers',
        slug: 'transfers',
        icon: <BiTransfer />,
        description: 'How much money have I transferred in/out of my account? How much crypto have I transferred?'
    },
    { 
        title: 'Purchases', 
        path: '/dashboard/purchases',
        slug: 'purchases',
        icon: <MdOutlineCallReceived />,
        description: 'How much Bitcoin have I bought? When did I buy that ETH?'
    },
    { 
        title: 'Sales', 
        path: '/dashboard/sales',
        slug: 'sales',
        icon: <MdCallMade />,
        description: 'How much Bitcoin have I sold? When did I sell it?'
    },
    { 
        title: '#ShakingSats', 
        path: '/dashboard/shaking-sats',
        slug: 'shaking-sats',
        icon: <AiOutlineShake />,
        description: 'How many sats of you earned? What is your longest streak? How much are those sats worth right now?'
    },
    { 
        title: '#CashbackCard', 
        path: '/dashboard/cashback-card',
        slug: 'cashback-card',
        icon: <IoCardOutline />,
        description: 'How much have I spent? How much have I earned from cashbacks?'
    },
    { 
        title: 'Peer Transfers', 
        path: '/dashboard/peer-transfers',
        slug: 'peer-transfers',
        icon: <FaUserFriends />,
        description: 'How much have I sent my friends? How much have they sent me?'
    },

]