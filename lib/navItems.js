import { IoAnalytics, IoWalletSharp, IoCardOutline } from 'react-icons/io5'
import { BiTransfer } from 'react-icons/bi'
import { MdOutlineCallReceived, MdCallMade, MdCall } from 'react-icons/md'
import { AiOutlineShake, AiOutlineInfoCircle, AiOutlineQuestionCircle } from 'react-icons/ai'
import { HiOutlineDocumentText } from 'react-icons/hi'
import { FaUserFriends } from 'react-icons/fa'
import { CgImport } from 'react-icons/cg'
import { BiDollar } from 'react-icons/bi'


export const getStarted = [
    { 
        title: 'Import CSV', 
        path: '/import',
        icon: <CgImport />
    },

]
export const generalItems = [
    { 
        title: 'FAQ', 
        path: '/faq',
        icon: <AiOutlineQuestionCircle />
    },
]


export const dashboardItems = [
    { 
        title: 'Summary', 
        path: '/dashboard/summary',
        slug: 'summary',
        icon: <HiOutlineDocumentText />,
        description: 'How is my portfolio doing today? This month? This year? Since the beginning?'
    },
    { 
        title: 'Performance', 
        path: '/dashboard/performance',
        slug: 'performance',
        icon: <IoAnalytics />,
        description: 'How is my portfolio doing today? This month? This year? Since the beginning?'
    },
    { 
        title: 'Prices', 
        path: '/dashboard/prices',
        slug: 'prices',
        icon: <BiDollar />,
        description: 'How has the bitcoin price changed since I started stacking? Since yesterday?'
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