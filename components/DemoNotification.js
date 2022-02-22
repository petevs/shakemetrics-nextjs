import { Affix, Button, Group, Paper, Text } from "@mantine/core"
import { CgImport } from 'react-icons/cg'
import { useMediaQuery } from "@mantine/hooks"

const DemoNotification = () => {

    const isMobile = useMediaQuery('(max-width: 755px)');

    const style = (theme) => ({
        backgroundColor: theme.colors.indigo[7],
        color: theme.colors.gray[0],
        display: 'grid',
        gap: isMobile ? '1rem' : '1rem',
        gridTemplateColumns: isMobile ? '1fr' : '1fr auto',
        alignItems: 'center',
        textAlign: isMobile ? 'center': 'left',
        padding: isMobile ? '2rem 1rem' : '1.5rem',
    })

  return (
    <>
        <Affix position={{ 
            bottom: 30, 
            right: 30,
            left: isMobile ? 30 : 280, 
            width: 'auto',
            // height: '50px' 
            }}>
            <Paper shadow='xl' radius='md' withBorder padding='md' sx={style}>
                <Group 
                    sx={{gap: '5px'}} 
                    direction={isMobile ? 'column' : 'row'}
                    position={isMobile ? 'center' : 'left'}

                >
                    <Text size='lg' weight={700}>Live Demo:</Text>
                    <Text size='lg'> Import your Shakepay csv file to populate with your data</Text>
                </Group>
                <Button leftIcon={<CgImport />} variant='default'>
                    Import Your CSV
                </Button>
            </Paper>
        </Affix>
    </>
  )
}

export default DemoNotification