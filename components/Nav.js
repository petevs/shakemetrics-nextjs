import React from 'react'
import { Navbar, Text, ScrollArea, Button } from '@mantine/core'
import MenuItem from './MenuItem'
import { navItems } from '../data/navItems'

const Nav = (props, {opened}) => {

  return (
    <>
      {/* <Navbar.Section>
        <Text>I am the section one</Text>
      </Navbar.Section> */}
      <Navbar.Section 
        grow
        component={ScrollArea}
      >
        <Text 
          size='xs' 
          transform='uppercase'
          mb='xs'
          weight={500}
        >
          Dashboard
        </Text>
        {
          navItems.map( (item, idx) => (
            <MenuItem
                key={idx}
                title={item.title}
                path={item.path}
                icon={item.icon}
            />
          ))
        }
      </Navbar.Section>
      <Navbar.Section>
        <Text>I am the section three</Text>
      </Navbar.Section>
    </>
  )
}

export default Nav