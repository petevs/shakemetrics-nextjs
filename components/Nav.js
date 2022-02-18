import React from 'react'
import { Navbar, Text } from '@mantine/core'

const Nav = ({opened}) => {

  return (
    <Navbar
        padding='md'
        hiddenBreakpoint="sm"
        hidden={!opened}
        width={{ sm: 300, lg: 400 }}
    >
        <Text>I am the nav</Text>
    </Navbar>
  )
}

export default Nav