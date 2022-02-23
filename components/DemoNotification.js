import { Affix, Button, Group, Paper, Text } from "@mantine/core"
import { CgImport } from 'react-icons/cg'
import { useMediaQuery } from "@mantine/hooks"
import Link from "next/link";

const DemoNotification = () => {

    const isMobile = useMediaQuery('(max-width: 755px)');

    const style = (theme) => ({
        backgroundColor: theme.colors.indigo[7],
        color: theme.colors.gray[0],
        display: 'grid',
        gap: isMobile ? `${theme.spacing.xs}px` : '1rem',
        gridTemplateColumns: isMobile ? '1fr' : '1fr auto',
        alignItems: 'center',
        padding: isMobile ? `${theme.spacing.xs}px` : `${theme.spacing.md}px`,
    })

  return (
    <>
        <Affix
            zIndex={99} 
            position={{ 
                bottom: isMobile ? 10 : 20, 
                right: isMobile ? 10 : 20,
                left: isMobile ? 10 : 270, 
                width: 'auto',
                // height: '50px' 
            }}>
            <Paper shadow='xl' radius='md' withBorder padding='md' sx={style}>
                    <Text size={isMobile ? 'xs' : 'md'}><strong>Live Demo:</strong> Import your Shakepay csv file to populate the report with your data</Text>
                <Link href='/import' passHref>
                    <Button leftIcon={<CgImport />} variant='default' size={isMobile ? 'xs' : 'sm'}>
                        Import Your CSV
                    </Button>
                </Link>
            </Paper>
        </Affix>
    </>
  )
}

export default DemoNotification