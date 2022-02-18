import { Title } from '@mantine/core'
import { useRouter } from 'next/router'
import DashboardShell from '../../components/DashboardShell'
import { dashboardItems } from '../../data/navItems'


export async function getStaticPaths(){
    
    const paths = dashboardItems.map(item => ({
        params: { id: (item.title).toLowerCase()}
    }))
    
    
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {

    const post = params.id

    return {
        props: {
            title: post
        }
    }

}


const DashboardPage = (props) => {

    const router = useRouter()
    const { slug } = router.query
    
    return(
        <DashboardShell>
            <Title
            >
                {props.title}
            </Title>
        </DashboardShell>
    )
}

export default DashboardPage