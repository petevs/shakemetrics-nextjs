import BasicPageLayout from "../components/BasicPageLayout"
import { Text } from '@mantine/core'
import Head from "next/head"

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
        <>
            <Head>
                <title>Contact</title>
                <meta name="viewport" content="width=device-width, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"></meta>
            </Head>
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
        </>
    )
}

export default Contact