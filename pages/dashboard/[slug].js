import { DateRangePicker } from '@mantine/dates'
import { Paper, Text, Box, Input, useMantineColorScheme } from '@mantine/core'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { IoReturnDownBackSharp } from 'react-icons/io5'
import DashboardShell from '../../components/DashboardShell'
import DbChart from '../../components/DbChart'
import PageHeader from '../../components/PageHeader'
import ScorecardSection from '../../components/ScorecardSection'
import CurrencyToggle from '../../components/CurrencyToggle'
import Transactions from '../../components/Transactions'
import { dashboardItems } from '../../data/navItems'
import useSummary from '../../hooks/useSummary'
import { useState, useEffect } from 'react'
import { useMediaQuery } from '@mantine/hooks';
import DbScorecard from '../../components/DbScorecard'
import DbSelectionSection from '../../components/DbSelectionSection'
import DbToggle from '../../components/DbToggle'
import DbSelect from '../../components/DbSelect'
import { dbPageContent } from '../../lib/dbPageContent'
import { toBitcoin } from '../../helpers/currencyFormatters'
import useDbPage from '../../hooks/useDbPage'

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

    return {
        props: {
            details: dbPageContent[params.slug]
        }
    }

}


const DbPage = (props) => {

    const { colorScheme } = useMantineColorScheme();
    const dark = colorScheme === 'dark';

    const isMobile = useMediaQuery('(max-width: 755px)');

    const router = useRouter()
    const { slug } = router.query
    const { details } = props

    console.log(details)


    // const { 
    //     trimmedSnapshots, 
    //     transactions, 
    //     lastEntry,
    //     series,
    //     categories,
    //     change,
    //     currentVal,
    //     endDate 
    // } = useSummary(familyKey, parentKey, childKey)

    const {
        familyKey, setFamilyKey,
        parentKey, setParentKey,
        childKey, setChildKey,
        noActivity,
        dbToggleData, showDbSelect, dbSelectData,
        getTitle, endDate, currentValue, change,
        series, categories

    } = useDbPage(details, slug)

    return(
        <>
            <Head>
                <title>{details.title}</title>
                <meta name="viewport" content="width=device-width, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"></meta>
            </Head>
            <DashboardShell>
                <PageHeader title={details.title} />
                <Paper
                    shadow='sm'
                    radius='md'
                    withBorder
                    padding='xl'
                >
                    <DbSelectionSection>
                        <DbToggle
                            data={dbToggleData}
                            parentKey={parentKey}
                            setParentKey={setParentKey}
                        />
                        {
                            showDbSelect &&
                            <DbSelect
                                data={dbSelectData}
                                childKey={childKey}
                                setChildKey={setChildKey}
                            />
                        }
                    </DbSelectionSection>
                    {
                        noActivity ?
                        <Paper  sx={(theme) => ({
                            display: 'grid',
                            alignContent: 'center',
                            justifyContent: 'center',
                            minHeight: '400px', 
                            backgroundColor: theme.colors.gray[0]})}>
                            <Text size='md' color='dimmed'>No activity for this period</Text>
                        </Paper>
                        :
                        <>
                            <DbScorecard
                                endDate={endDate}
                                title={getTitle()}
                                val={currentValue}
                                change={change}
                                isMobile={isMobile}
                            />
                            <DbChart 
                                categories={categories}
                                series={series}
                            />
                        </>
                    }
                </Paper>
            </DashboardShell>
        </>
    )
}

export default DbPage