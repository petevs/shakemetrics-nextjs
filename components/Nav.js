import { Navbar, ScrollArea, } from '@mantine/core'
import { generalItems, dashboardItems, getStarted } from '../lib/navItems'
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
          title='Get Started'
          items={getStarted}
          setOpened={props.setOpened}
        />
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
    </>
  )
}

export default Nav