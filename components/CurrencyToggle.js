import { SegmentedControl, Center, Box } from '@mantine/core'
import { SiBitcoin, SiEthereum } from 'react-icons/si'
import { FaCanadianMapleLeaf } from 'react-icons/fa'


const CurrencyToggle = ( { parentKey, setParentKey}) => {

    const style = (theme) => ({
        justifySelf: 'start',
        [`@media (max-width:${theme.breakpoints.md}px)`]: {
            justifySelf: 'center'
        }
    })

    console.log(parentKey)


    return (
        <SegmentedControl
            sx={style}
            mb='md'
            value={parentKey}
            onChange={setParentKey}
            data={[
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
            ]}
        />
    )
}

export default CurrencyToggle