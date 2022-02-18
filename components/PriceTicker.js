import { Group, ThemeIcon, Text, Box } from "@mantine/core"
import usePrices from "../hooks/usePrices"
import { BiBitcoin } from 'react-icons/bi'
import { SiEthereum } from 'react-icons/si'
import { toDollars } from "../helpers/currencyFormatters"

const PriceTicker = (props) => {

    const { BTC, ETH } = usePrices()

  return (
    <Box>
        {
            (BTC > 0 && ETH > 0) &&
            <Group ml='md' sx={props.sx}>
                <Group spacing='xs'>
                    <ThemeIcon radius='xl' color='orange' size='sm'>
                        <BiBitcoin />
                    </ThemeIcon>
                    <Text
                        weight={500}
                        size='md'
                    >
                        {`$${toDollars(BTC)}`}
                    </Text>
                </Group>
                <Group spacing='xs'>
                    <ThemeIcon radius='xl' color='gray' size='sm'>
                        <SiEthereum />
                    </ThemeIcon>
                    <Text
                        weight={500}
                        size='md'
                    >
                        {`$${toDollars(ETH)}`}
                    </Text>
                </Group>
            </Group>
        }
    </Box>
  )
}

export default PriceTicker