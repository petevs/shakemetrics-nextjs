import { DateRangePicker } from '@mantine/dates'
import { Text } from '@mantine/core'
import Head from 'next/head'
import { useRouter } from 'next/router'
import DashboardChart from '../../components/DashboardChart'
import DashboardShell from '../../components/DashboardShell'
import PageHeader from '../../components/PageHeader'
import ScorecardSection from '../../components/ScorecardSection'
import CurrencyToggle from '../../components/CurrencyToggle'
import SelectionSection from '../../components/SelectionSection'
import Transactions from '../../components/Transactions'
import { dashboardItems } from '../../data/navItems'
import useSummary from '../../hooks/useSummary'


export async function getStaticPaths(){
    
    const paths = dashboardItems.map(item => ({
        params: { slug: (item.slug)}
    }))
    
    
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {

    const details = dashboardItems.filter(item => item.slug === params.slug)

    const post = details[0]

    return {
        props: {
            title: post.title,
        }
    }

}


const DbPage = (props) => {

    const router = useRouter()
    const { slug } = router.query

    const { trimmedSnapshots, transactions, lastEntry } = useSummary()

    const btcTrans = transactions.filter(transaction => transaction['Debit Currency'] === 'BTC' || transaction['Credit Currency'] === 'BTC')


    const categories = trimmedSnapshots.map(item => item.date)

    const series = [
        {
            name: 'test',
            data: trimmedSnapshots.map(item => item.wallets.BTC)
        }
    ]




    
    return(
        <>
            <Head>
                <title>{props.title}</title>
                <meta name="viewport" content="width=device-width, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"></meta>
            </Head>
            <DashboardShell
                slug={slug}
            >
                <PageHeader title={props.title} />
                <CurrencyToggle />
                {/* <ScorecardSection /> */}
                <DashboardChart 
                    categories={categories}
                    series={series}
                    lastEntry={lastEntry}
                />
                <Transactions 
                    transactions={btcTrans}
                />
            </DashboardShell>
        </>
    )
}

export default DbPage