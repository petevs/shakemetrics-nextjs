import { DateRangePicker } from '@mantine/dates'
import { useRouter } from 'next/router'
import DashboardShell from '../../components/DashboardShell'
import PageHeader from '../../components/PageHeader'
import ScorecardSection from '../../components/ScorecardSection'
import SelectionSection from '../../components/SelectionSection'
import { dashboardItems } from '../../data/navItems'


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
    
    return(
        <DashboardShell
            slug={slug}
        >
            <PageHeader title={props.title} />
            <ScorecardSection />
        </DashboardShell>
    )
}

export default DbPage