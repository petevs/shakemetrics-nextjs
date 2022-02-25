import { Text, Title, Group, ThemeIcon, Tooltip } from '@mantine/core'
import { IoArrowUp, IoArrowDown, IoArrowForward } from 'react-icons/io5'
import { toBitcoin } from '../helpers/currencyFormatters'

const DbScorecard = ({ title, val, change, isMobile, chartHoverItem }) => {

    const getChangeColor = () => {
        if(!change.raw){return 'gray'}
        if(change.raw > 0){return 'green'}
        return 'red'
    }

    const getChangeText = () => {
        if(!change.raw){ return 'No Change'}
        return `${change.change} ${change.percent}`
    }

    const getChangeIcon = () => {
        if(!change.raw){return <IoArrowForward />}
        if(change.raw > 0){return <IoArrowUp />}
        return <IoArrowDown />
    }



  return (
    <>
            <Text 
                transform='capitalize'
                sx={{textAlign: isMobile ? 'center' : 'left'}}
            >
                {title} 
            </Text>
            <Title 
                sx={{
                    textAlign: isMobile ? 'center' : 'left',
                    ':hover': {cursor: 'pointer'}
                }} 
                size='lg'
            >
                {chartHoverItem ? chartHoverItem.y : val.text}
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
                        color={getChangeColor()}
                    >
                        {getChangeIcon()}
                    </ThemeIcon>
                    <Text 
                        weight={700} 
                        color={getChangeColor()}
                    >
                        {getChangeText()}
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