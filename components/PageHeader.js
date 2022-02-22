import { Box, Title, } from '@mantine/core'
import DateRangeSelection from './DateRangeSelection'

const PageHeader = ({title, icon}) => {

    const style = (theme) => ({
        display: 'grid',
        gridTemplateColumns: '1fr auto',
        alignItems: 'end',
        textTranform: 'capitalize',
        paddingBottom: `${theme.spacing.xl}px`,
        [`@media (max-width: ${theme.breakpoints.md}px)`]: {
          gridTemplateColumns: '1fr',
          gap: '1rem'
        }
    })


  return (
    <Box sx={style}>
        <Title color='dimmed' size='xl' weight={700}>
            {title}
        </Title>
        <DateRangeSelection />
    </Box>
  )
}

export default PageHeader