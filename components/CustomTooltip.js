import { Box, Text, Group, ThemeIcon } from "@mantine/core"
import { IoArrowUp, IoArrowDown, IoArrowForward } from 'react-icons/io5'
import dayjs from "dayjs"

const CustomTooltip = (props) => {

    const {
        change,
        percent,
        x,
        y,
        formatVal,
    } = props

    const getChangeColor = () => {
        if(!change){return 'gray'}
        if(change > 0){return 'green'}
        return 'red'
    }

    const getChangeText = () => {
        if(!change){ return 'No Change'}
        return `${formatVal(change)} ${percent}`
    }

    const getChangeIcon = () => {
        if(!change){return <IoArrowForward />}
        if(change > 0){return <IoArrowUp />}
        return <IoArrowDown />
    }

    return (
        <Box sx={{padding: '1rem'}}>
            <Group direction='column' position='center' spacing={0}>
                <Text size='sm'>{dayjs(x).format('MMM D')}</Text>
                <Text size='xl' weight={700}>{formatVal(y)}</Text>
                <Group sx={{gap: '5px'}}>
                    <ThemeIcon
                        color={getChangeColor()}
                        radius='xl'
                        size='xs'
                    >
                        {getChangeIcon()}
                    </ThemeIcon>
                    <Text 
                        size='sm' 
                        weight={500}
                        color={getChangeColor()}
                    >
                        {getChangeText()}
                    </Text>
                </Group>
                <Text
                    color='dimmed'
                    size='xs'
                >
                    From Previous Day
                </Text>

            </Group>
        </Box>
    )

}

export default CustomTooltip