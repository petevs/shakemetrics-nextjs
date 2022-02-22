import { Select } from '@mantine/core'

const DbSelect = ({data, childKey, setChildKey}) => {


    const chartSelectStyle = (theme) => ({
        justifySelf: 'end',
        [`@media (max-width: ${theme.breakpoints.md}px)`]: {
            justifySelf: 'stretch',
            marginBottom: `${theme.spacing.md}px`
        }
    })

  return (
    <Select
        sx={chartSelectStyle} 
        data={data}
        value={childKey}
        onChange={setChildKey}
    />
  )
}

export default DbSelect