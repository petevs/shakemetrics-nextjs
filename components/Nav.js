import { Navbar, Text, ScrollArea } from '@mantine/core'
import { generalItems, dashboardItems } from '../lib/navItems'
import NavGroup from './NavGroup'

const Nav = (props) => {

  return (
    <>
      <Navbar.Section 
        grow
        component={ScrollArea}
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