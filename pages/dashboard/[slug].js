//NEXT
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

//MANTINE
import { Paper, Text, useMantineColorScheme } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'

//Library
import { dbPageContent } from '../../lib/dbPageContent'
import { dashboardItems } from '../../lib/navItems'

//Hooks
import useDbPage from '../../hooks/useDbPage'

//COMPONENTS
import DashboardShell from '../../components/DashboardShell'
import PageHeader from '../../components/PageHeader'
import DbSelectionSection from '../../components/DbSelectionSection'
import NoActivity from '../../components/NoActivity'
import DbToggle from '../../components/DbToggle'
import DbSelect from '../../components/DbSelect'
import DbScorecard from '../../components/DbScorecard'
import DbChart from '../../components/DbChart'
import DemoNotification from '../../components/DemoNotification'

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

    const {
        familyKey, setFamilyKey,
        parentKey, setParentKey,
        childKey, setChildKey,
        noActivity,
        toggle, menu,
        dbToggleData, dbSelectData,
        getTitle, endDate, currentValue, change, chartFormat,
        series, categories,
        price
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
                    <DbSelectionSection
                        toggle={toggle}
                        menu={menu}
                    >
                        {
                            dbToggleData &&
                            <DbToggle
                                data={dbToggleData}
                                parentKey={parentKey}
                                setParentKey={setParentKey}
                            />
                        }
                        {
                            dbSelectData &&
                            <DbSelect
                                data={dbSelectData}
                                childKey={menu === 'parent' ? parentKey : childKey}
                                setChildKey={menu === 'parent' ? setParentKey : setChildKey}
                            />
                        }
                    </DbSelectionSection>
                    {
                        noActivity 
                        ? <NoActivity />
                        : <>
                            <DbScorecard
                                endDate={endDate}
                                title={getTitle()}
                                val={currentValue}
                                change={change}
                                isMobile={isMobile}
                                format={chartFormat}
                                price={price}
                            />
                            <DbChart 
                                categories={categories}
                                series={series}
                                chartFormat={chartFormat}
                            />
                        </>
                    }
                </Paper>
            </DashboardShell>
        </>
    )
}

export default DbPage