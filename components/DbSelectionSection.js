import { Box } from "@mantine/core"
import DbToggle from "./DbToggle"
import DbSelect from "./DbSelect"

const DbSelectionSection = (props) => {

    const {
        isMobile,
        children
    } = props

    const headerStyle = (theme) => ({
        display: 'grid', 
        gridTemplateColumns: !props.toggle ? '1fr' : '1fr 1fr', 
        borderBottom: `1px solid ${theme.colors.dark[0]}`,
        [`@media (max-width: ${theme.breakpoints.md}px)`]: {
            gridTemplateColumns: '1fr',
        },
        textAlign: isMobile ? 'center' : 'left'
    })


  return (
    <Box sx={headerStyle} mb='xl'>
        {children}
    </Box>
  )
}

export default DbSelectionSection