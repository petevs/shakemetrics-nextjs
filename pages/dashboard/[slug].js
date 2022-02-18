import { Title } from '@mantine/core'
import { useRouter } from 'next/router'
import DashboardShell from '../../components/DashboardShell'
import { dashboardItems } from '../../data/navItems'


export async function getStaticPaths(){
    
    const paths = dashboardItems.map(item => ({
        params: { slug: (item.slug).toLowerCase()}
    }))
    
    
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {

    const post = params.slug

    return {
        props: {
            title: post
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
            <h1>{slug}</h1>
        </DashboardShell>
    )
}

export default DbPage