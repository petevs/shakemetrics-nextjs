import { UnstyledButton, Group, Avatar, Text, ThemeIcon, useMantineColorScheme, THEME_ICON_SIZES } from '@mantine/core';
import { IoAnalytics } from 'react-icons/io5'
import { useRouter } from 'next/router';

const NavItem= (props) => {

    const router = useRouter()
    const active = router.asPath === props.path

    const { colorScheme } = useMantineColorScheme();
    const dark = colorScheme === 'dark';

    const style = (theme) => ({
        width: '100%',
        padding: `${theme.spacing.sm}px`,
        borderRadius: `${theme.radius.sm}px`,
        backgroundColor: active ? (dark ? theme.colors.dark[6] : theme.colors.gray[0]) : 'none',
        ':hover': {
            backgroundColor: dark ? theme.colors.dark[6] : theme.colors.gray[0]
        }
    })

  return (
    <UnstyledButton 
        sx={style} 
        onClick={() => router.push(props.path)}
    >
        <Group>
        <ThemeIcon size='sm' variant='light'>
            {props.icon}
        </ThemeIcon>
        <div>
            <Text
                color={(!dark && active) && 'blue'}
            >
                {props.title}
            </Text>
        </div>
        </Group>
  </UnstyledButton>
  )
}

export default NavItem