import { Navbar, Text, ScrollArea } from '@mantine/core'
import { generalItems, dashboardItems } from '../lib/navItems'
import NavGroup from './NavGroup'

const Nav = (props) => {

  const scrollAreaStyle = {
    '& .mantine-ScrollArea-viewport': {
      paddingBottom: '300px'
    }
  }

  return (
    <>
      <Navbar.Section 
        grow
        component={ScrollArea}
        sx={scrollAreaStyle}
      >
        <NavGroup
          title='General'
          items={generalItems}
          setOpened={props.setOpened}
        />
        <NavGroup
          title='Dashboard'
          items={dashboardItems}
        />
      </Navbar.Section>
      {/* <Navbar.Section>
        <Text>I am the section three</Text>
      </Navbar.Section> */}
    </>
  )
}

export default Nav