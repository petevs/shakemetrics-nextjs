import Head from "next/head"
import DashboardShell from "../../components/DashboardShell"
import { Title, Paper, Group, Text, Box, Button, Alert, Progress } from "@mantine/core"
import { Dropzone } from '@mantine/dropzone'
import { CgImport } from 'react-icons/cg'
import { FiXCircle } from 'react-icons/fi'
import { IoCheckmarkCircleOutline } from 'react-icons/io5'
import { useCallback } from "react"
import useFileUpload from "../../hooks/useFileUpload"

const ImportPage = () => {

    const {
        error, setError,
        pending, success,
        uploadFile
    } = useFileUpload()

    const onDrop = useCallback((acceptedFiles, rejectedFiles) => {
        uploadFile(acceptedFiles[0])
    }, [uploadFile])


    const groupStyle = (theme) => ({
        minHeight: 220, 
        pointerEvents: 'none',
        '& svg': {
            height: '80px',
            width: '80px',
            color: success ? theme.colors.green[5] : theme.colors.blue[5],
        },
        '@media (max-width: 768px)': {
            textAlign: 'center'
        } 
    })

    return (
        <>
            <Head>
                <title>Import CSV</title>
                <meta name="viewport" content="width=device-width, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"></meta>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <DashboardShell>
                <Title color='dimmed' size='xl' weight={700} mb='xl'>
                    Import CSV
                </Title>
                <Paper
                    shadow='sm'
                    radius='md'
                    withBorder
                    padding='xl'
                >
                    <Text
                        align='right'
                        mb='sm'
                        size='sm'
                        color='blue'
                        sx={{'& a': {color: 'inherit', textDecoration: 'none'}}}
                    >
                    <a 
                        href='https://help.shakepay.com/en/articles/3336094-where-can-i-see-my-full-transaction-history-on-shakepay'
                        target="_blank" rel="noreferrer"
                    >
                            Where do I get my Shakepay csv?
                    </a>
                </Text>
                {
                    error.error && 
                    <Alert icon={<FiXCircle size={16} />} title="Hmmm... there seems to be an issue with your CSV!" color="red" mb='xl'>
                        {error.message}
                    </Alert>
                }
                    <Dropzone
                        onDrop={onDrop}
                        onReject={(files) => setError({error: true, message: 'Not properly formatted csv file. Please, try again.'})}
                        accept='.csv'
                        loading={pending}
                    >
                        {
                            () => (
                                <Group position="center" spacing="xl" sx={groupStyle}>
                                    {
                                        !success 
                                        ?
                                        <>
                                            <CgImport/>
                                            <Box>
                                                <Text size='xl' inline mt='md'>
                                                    Drag your Shakepay csv file here or click to select file
                                                </Text>
                                                <Text size='sm' color='dimmed' inline mt={7}>
                                                    File should be an unaltered Shakepay transactions csv
                                                </Text>
                                            </Box>
                                        </>
                                        : <>
                                            <IoCheckmarkCircleOutline/>
                                            <Box>
                                                <Text size='xl' inline mt='md'>
                                                    Nice! Your report is ready!
                                                </Text>
                                                <Text size='sm' color='dimmed' inline mt={7}>
                                                    You will be redirected in a few seconds...
                                                </Text>
                                            </Box>
                                        
                                        </>
                                    }
                                </Group>
                            )
                        }
                    </Dropzone>
                </Paper>
            </DashboardShell>
        </>
    )
}

export default ImportPage