import { Box, Text, ThemeIcon, Title, Group } from '@mantine/core'
import React from 'react'
import SelectionSection from './SelectionSection'

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
        // borderBottom: `1px solid ${theme.colors.dark[0]}`,
        // marginBottom: `${theme.spacing.lg}px`
    })


  return (
    <Box sx={style}>
        <Title color='dimmed' size='xl' weight={700}>
            {title}
        </Title>
      <SelectionSection />
    </Box>
  )
}

export default PageHeader