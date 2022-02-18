import { Title } from '@mantine/core'
import { useRouter } from 'next/router'
import DashboardShell from '../../components/DashboardShell'

const DashboardPage = () => {

    const router = useRouter()
    const { slug } = router.query
    
    return(
        <DashboardShell>
            <Title>{slug}</Title>
        </DashboardShell>
    )
}

export default DashboardPage