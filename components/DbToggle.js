import { SegmentedControl, Center, Box } from '@mantine/core'
import { SiBitcoin, SiEthereum } from 'react-icons/si'
import { FaCanadianMapleLeaf } from 'react-icons/fa'

const DbToggle = ({ parentKey, setParentKey, data}) => {

    const style = (theme) => ({
        justifySelf: 'start',
        [`@media (max-width:${theme.breakpoints.md}px)`]: {
            justifySelf: 'center'
        }
    })

    const changeLabel = (label) => {

        if(label === 'BTC'){return (
            <Center>
                <SiBitcoin />
                <Box ml={5}>BTC</Box>
            </Center>
        )}

        if(label === 'ETH'){ return (
            <Center>
                <SiEthereum />
                <Box ml={5}>ETH</Box>
            </Center>
        )}

        if(label === 'CAD'){ return (
            <Center>
                <FaCanadianMapleLeaf />
                <Box ml={5}>CAD</Box>
            </Center>
        )
        }

        return label

    }

    const newData = data.map(item => {
        return {
            value: item.value,
            label: changeLabel(item.label)
        }
    })

  return (
    <SegmentedControl
        sx={style}
        mb='md'
        value={parentKey}
        onChange={setParentKey}
        data={newData}
/>
  )
}

export default DbToggle