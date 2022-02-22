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

  return (
    <SegmentedControl
        sx={style}
        mb='md'
        value={parentKey}
        onChange={setParentKey}
        data={data}
/>
  )
}

export default DbToggle

/*
[
        {
            value: 'BTC',
            label: (
                <Center>
                    <SiBitcoin />
                    <Box ml={5}>BTC</Box>
                </Center>
            ),
        },
        {
            value: 'ETH',
            label: (
                <Center>
                    <SiEthereum />
                    <Box ml={5}>ETH</Box>
                </Center>
            ),
        },
        {
            value: 'CAD',
            label: (
                <Center>
                    <FaCanadianMapleLeaf />
                    <Box ml={5}>CAD</Box>
                </Center>
            ),
        },
    ]
*/