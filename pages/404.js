import { Box, Button } from "@mantine/core"
import BasicPageLayout from "../components/BasicPageLayout"
import { useRouter } from "next/router"
import { IoArrowBackOutline } from 'react-icons/io5'

const Custom404 = () => {

    const router = useRouter()

    const boxStyle = {
        display: 'grid',
        justifyContent: 'center',
        alignContent: 'center',
        minHeight: '300px'
    }

    return (
        <BasicPageLayout
            title='Page Not Found'
            firstSection={
                <Box sx={boxStyle}>
                    <Button 
                        onClick={() => router.back()}
                        leftIcon={<IoArrowBackOutline />}
                    >
                        Go Back to Previous
                    </Button>
                </Box>
            }
        />
    )

}

export default Custom404