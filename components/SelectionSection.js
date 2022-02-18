import { Box } from '@mantine/core'
import { DateRangePicker } from '@mantine/dates'
import { useState } from 'react'

const SelectionSection = () => {

    const initial = [
        new Date('2021,01,01'),
        new Date()
    ]

    const [value, setValue] = useState(initial)

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