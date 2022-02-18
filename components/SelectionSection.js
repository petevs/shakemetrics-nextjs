import { Box } from '@mantine/core'
import { DateRangePicker } from '@mantine/dates'
import { useState } from 'react'

const SelectionSection = () => {

    const initial = [
        new Date(),
        new Date()
    ]

    const [value, setValue] = useState(initial)

    console.log(value)

  return (
    <>
        <DateRangePicker
            value={value}
            onChange={setValue}
            radius='md' 
        />
    </>
  )
}

export default SelectionSection