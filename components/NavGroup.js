import { Text } from "@mantine/core"
import NavItem from './NavItem'

const NavGroup = ({ title, items}) => {
  return (
    <>
        <Text 
            size='xs' 
            transform='uppercase'
            m='xs'
            mt='lg'

            weight={500}
        >
            {title}
        </Text>
        {
            items.map( (item, idx) => (
                <NavItem
                    key={idx}
                    title={item.title}
                    path={item.path}
                    icon={item.icon}
                />
            ))
        }
    </>
  )
}

export default NavGroup