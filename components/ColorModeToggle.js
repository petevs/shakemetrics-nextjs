import { ActionIcon, useMantineColorScheme } from '@mantine/core';
import { IoSunnyOutline, IoMoonOutline } from 'react-icons/io5';

const ColorModeToggle = () => {

    const { colorScheme, toggleColorScheme } = useMantineColorScheme();
    const dark = colorScheme === 'dark';

    return (
        <ActionIcon
            variant="outline"
            color={dark ? 'yellow' : 'blue'}
            onClick={() => toggleColorScheme()}
            title="Toggle color scheme"
        >
        {
            dark ? 
            <IoSunnyOutline style={{ width: 18, height: 18 }} />
            : 
            <IoMoonOutline style={{ width: 18, height: 18 }} />
        }
      </ActionIcon>
    )
}

export default ColorModeToggle