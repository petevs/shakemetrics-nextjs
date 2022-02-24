import { Box, Card, Text, ThemeIcon, useMantineTheme, Group } from '@mantine/core'
import Link from 'next/link'
import { dashboardItems } from '../lib/navItems'

const DashboardCards = ({left, sx}) => {

    const theme = useMantineTheme();

    const secondaryColor = theme.colorScheme === 'dark'
        ? theme.colors.dark[1]
        : theme.colors.gray[7];

    const cardSection = (theme) => ({
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        gap: '2rem',
        paddingTop: '2rem',
        '& h2': {
            fontSize: '1.3rem',
            fontWeight: 700,
            paddingBottom: '.5rem',
            color: '#002237'
        },
        '& p': {
            color: '#647795'
        },
        '& svg': {
            height: '18px',
            width: '18px',
        },
        [`@media (max-width: ${theme.breakpoints.lg}px)`]: {
            gridTemplateColumns: '1fr 1fr',
        },
        [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
            gridTemplateColumns: '1fr',
            gap: '1rem'
        },
        ...sx
        })

    return(
        <Box sx={cardSection}>
                        {
                            dashboardItems.map( (item, idx) => (
                                <Link href={item.path} passHref key={idx} >
                                    <Card
                                        shadow="lg"
                                        radius='md' 
                                        padding="md"
                                        withBorder
                                        sx={(theme) => ({
                                            display: 'grid',
                                            ':hover': {
                                                border: `1px solid #248BE5`,
                                                cursor: 'pointer',
                                                transform: 'scale(1.05)',
                                                transition: 'all .2s ease-in-out'
                                            }
                                        })}
                                    >
                                        <Group 
                                            position={left ? 'left': 'center'}
                                            mb='xs'
                                        >
                                            <ThemeIcon variant='light' size='sm'>
                                                {item.icon}
                                            </ThemeIcon>
                                            <Text 
                                                weight={700}
                                                size='xl'
                                            >
                                                {item.title}
                                            </Text>
                                        </Group>
                                        <Box sx={{minHeight: '50px'}}>
                                            <Text 
                                            size="sm" 
                                            style={{ 
                                                color: secondaryColor, 
                                                lineHeight: 1.5, 
                                            }}
                                            >
                                                {item.description}
                                            </Text>
                                        </Box>
                                    </Card>
                                </Link>
                            ))
                        }
                </Box>
    )
}

export default DashboardCards