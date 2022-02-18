import React from 'react'
import { Navbar, Text, ScrollArea, Button } from '@mantine/core'
import MenuItem from './NavItem'
import { generalItems, dashboardItems } from '../data/navItems'
import NavGroup from './NavGroup'
import { FaUserFriends } from 'react-icons/fa'

const Nav = (props, {opened}) => {

  return (
    <>
      <Navbar.Section 
        grow
        component={ScrollArea}
      >
        <NavGroup
          title='General'
          items={generalItems}
        />
        <NavGroup
          title='Dashboard'
          items={dashboardItems}
        />
      </Navbar.Section>
      <Navbar.Section>
        <Text>I am the section three</Text>
      </Navbar.Section>
    </>
  )
}

export default Nav