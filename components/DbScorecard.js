import { Text, Title, Group, ThemeIcon, Tooltip, Menu, Select } from '@mantine/core'
import { IoArrowUp, IoArrowDown, IoArrowForward } from 'react-icons/io5'
import { numberWithCommas, toDollars, toBitcoin } from '../helpers/currencyFormatters'
import { useState, useEffect } from 'react'

const DbScorecard = ({ title, val, change, isMobile, format, price }) => {

    console.log(format)

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

    const [units, setUnits] = useState(format)
    
    const getUnitSelectData = () => {

        if(format === 'CAD'){
            return [
                { value: 'CAD', label: 'CAD' },
                { value: 'BTC', label: 'BTC' },
                { value: 'SATS', label: 'SATS' },
                { value: 'ETH', label: 'ETH' },
            ]
        }
        if(format === 'BTC'){
            return [
                { value: 'BTC', label: 'BTC' },
                { value: 'SATS', label: 'SATS' },
                { value: 'CAD', label: 'CAD' },
            ]
        }

        if(format === 'ETH'){
            return [
                { value: 'ETH', label: 'ETH' },
                { value: 'CAD', label: 'CAD' },
            ]
        }
    }

    const getValue = () => {
        if(format === 'BTC'){

            if(units === 'SATS'){
                const sats = Math.round(val.raw * 100000000)
                return numberWithCommas(sats)
            }
    
            if(units === 'CAD'){
                return toDollars(val.raw * price['BTC']).text
            }
        }

        if(format === 'ETH'){

            if(units === 'CAD'){
                return toDollars(val.raw * price['ETH']).text
            }

            return val.text
        }

        if(format === 'CAD'){
            if(units === 'BTC'){
                return toBitcoin(val.raw / price['BTC']).text 
            }
            if(units === 'SATS'){
                const btc = val.raw / price['BTC']
                const sats = Math.round(btc * 100000000)
                return numberWithCommas(sats)
            }
            if(units === 'ETH'){
                return toBitcoin(val.raw / price['ETH']).text 
            }

            return val.text
        }
        
        return val.text

    }

    useEffect(() => {
        setUnits(format)
    },[format])

  return (
    <>
            <Text 
                transform='capitalize'
                sx={{textAlign: isMobile ? 'center' : 'left'}}
            >
                {title} 
            </Text>
                <Group sx={{
                    alignItems: 'baseline', 
                    justifyContent: isMobile ? 'center' : 'start',
                    marginLeft: isMobile ? '42.5px' : '0',
                    }} spacing='xs'>
                    <Title 
                        sx={{
                            textAlign: isMobile ? 'center' : 'left',
                            ':hover': {cursor: 'pointer'}
                        }} 
                        size='lg'
                    >
                        {getValue()}
                    </Title>
                    {
                        (format === 'BTC' || format === 'ETH' || format === 'CAD') &&
                        <Select
                            variant='unstyled'
                            size='sm'
                            sx={{width: '70px',}}
                            value={units}
                            onChange={setUnits}
                            data={getUnitSelectData()}
                            />
                    }
                </Group>
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