import BasicPageLayout from "../components/BasicPageLayout"
import { Divider, Text } from '@mantine/core'

const Contact = () => {

    const linkStyle = (theme) => ({
        '& a': {
            color: theme.colors.blue,
            textDecoration: 'none',
            ':hover': {
                textDecoration: 'underline'
            }
        }
    })

    return (
        <BasicPageLayout
            title='Contact'
            firstSection={
                <>
                    <Text 
                        size='lg' 
                        weight={500} 
                    >
                        Email
                    </Text>
                    <Text 
                        size='md' 
                        color='dimmed'
                        sx={linkStyle}
                    >
                        <a href='mailto:hello@shakemetrics.com?subject=Inquiry from the site'>
                            hello@shakemetrics.com
                        </a>
                    </Text>
                    <Text 
                        size='lg' 
                        weight={500} 
                        mt='xl'
                    >
                        Mailing Address
                    </Text>
                    <Text 
                        size='md'
                        color='dimmed'
                        sx={{lineHeight: '1.3rem'}}
                    >
                        Shake Metrics <br />
                        329 Howe St PMB 2020<br />
                        Vancouver, BC V6C 3N2
                    </Text>
                    <Text size='xs' color='dimmed' mt='xs'>*Please note this is a mailing address only. There are no employees or people affiliated with the site at this location.</Text>
                    <Text 
                        size='md' 
                        color='dimmed'
                    >
                        
                    </Text>
                </>
            }
        />
    )
}

export default Contact