import { Title } from '@mantine/core'
import { useRouter } from 'next/router'
import DashboardShell from '../../components/DashboardShell'
import { dashboardItems } from '../../data/navItems'


export async function getStaticPaths(){
    
    const paths = dashboardItems.map(item => ({
        params: { slug: (item.title).toLowerCase()}
    }))
    
    
    return {
        paths,
        fallback: false
    }
}


const DashboardPage = () => {

    const router = useRouter()
    const { slug } = router.query
    
    return(
        <DashboardShell>
            <Title
            >
                {slug}
            </Title>
        </DashboardShell>
    )
}

export default DashboardPage