import { Text, Title, Group, ThemeIcon } from '@mantine/core'
import { IoArrowUp, IoArrowDown } from 'react-icons/io5'
import { toDollars } from '../helpers/currencyFormatters'

const DbScorecard = ({ title, val, change, isMobile }) => {





  return (
    <>
            <Text 
                transform='capitalize'
                sx={{textAlign: isMobile ? 'center' : 'left'}}
            >
                {title} 
            </Text>
        <Title 
            sx={{textAlign: isMobile ? 'center' : 'left'}} 
            size='lg'
        >
            {val}
        </Title>
        <Group 
            direction={isMobile ? 'column' : 'row'} 
            position={isMobile ? 'center' : 'left'} 
            sx={{gap: '5px', paddingBottom: '2rem'}}
        >
                <Group sx={{gap: '5px'}}>
                    <ThemeIcon 
                        radius='xl' 
                        variant='light' 
                        color={change.change > 0 ? 'green' : 'red'}
                    >
                        { change.change > 0 ? <IoArrowUp /> : <IoArrowDown /> }
                    </ThemeIcon>
                    <Text 
                        weight={700} 
                        color={change.change > 0 ? 'green' : 'red'}
                    >
                        {change.change} {change.percent}
                    </Text>
                </Group>
            <Text 
                color='dimmed' 
                size='sm'
            >
                in selected period
            </Text>
            </Group>
    </>
  )
}

export default DbScorecard