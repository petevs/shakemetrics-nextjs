import { Group, ThemeIcon, Text, Box } from "@mantine/core"
import usePrices from "../hooks/usePrices"
import { BiBitcoin } from 'react-icons/bi'
import { SiEthereum } from 'react-icons/si'
import { toDollars } from "../helpers/currencyFormatters"
import Link from "next/link"

const PriceTicker = (props) => {

    const { BTC, ETH } = usePrices()

    const style = (theme) => ({
        ':hover': {
            cursor: 'pointer',
            color: theme.colors.blue[6],
        },
    })

  return (
    <Box>
        {
            (BTC > 0 && ETH > 0) &&
            <Group ml='md' sx={props.sx}>
                <Link href='/dashboard/prices' passHref>
                    <Group spacing='xs' sx={style}>
                        <ThemeIcon radius='xl' color='orange' size='sm'>
                            <BiBitcoin />
                        </ThemeIcon>
                        <Text
                            weight={500}
                            size='md'
                        >
                            {`$${toDollars(BTC).text}`}
                        </Text>
                    </Group>
                </Link>
                <Link href='/dashboard/prices' passHref>
                    <Group spacing='xs' sx={style}>
                        <ThemeIcon radius='xl' color='gray' size='sm'>
                            <SiEthereum />
                        </ThemeIcon>
                        <Text
                            weight={500}
                            size='md'
                        >
                            {`$${toDollars(ETH).text}`}
                        </Text>
                    </Group>
                </Link>
            </Group>
        }
    </Box>
  )
}

export default PriceTicker