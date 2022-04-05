//NEXT
import Head from 'next/head'
import { useRouter } from 'next/router'

//MANTINE
import { Paper } from '@mantine/core'

//Library
import { dbPageContent } from '../../lib/dbPageContent'
import { dashboardItems } from '../../lib/navItems'

//COMPONENTS
import DashboardShell from '../../components/DashboardShell'
import PageHeader from '../../components/PageHeader'
import DbContentWrapper from '../../components/DbContentWrapper'


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
            details: dbPageContent[params.slug],
        }
    }

}


const DbPage = (props) => {

    const router = useRouter()
    const { slug } = router.query
    const { details } = props

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
                   <DbContentWrapper details={details} slug={slug} />
                </Paper>
            </DashboardShell>
        </>
    )
}

export default DbPage