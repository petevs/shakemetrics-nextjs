import { UnstyledButton, Group, Avatar, Text, ThemeIcon } from '@mantine/core';
import { IoAnalytics } from 'react-icons/io5'

const NavItem= (props) => {

    const style = (theme) => ({
        width: '100%',
        padding: `${theme.spacing.sm}px`,
        borderRadius: `${theme.radius.sm}px`,
        ':hover': {
            backgroundColor: theme.colors.gray[0]
        }
    })

  return (
    <UnstyledButton sx={style} onClick={() => console.log('try focusing button with tab')}>
        <Group>
        <ThemeIcon size='sm' light>
            {props.icon}
        </ThemeIcon>
        <div>
            <Text>{props.title}</Text>
        </div>
        </Group>
  </UnstyledButton>
  )
}

export default NavItem