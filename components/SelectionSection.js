import { Box, Popper, Paper, Center, useMantineTheme, Button, Menu, Select, Popover, Image, Text, Group, TextInput } from '@mantine/core'
import { DateRangePicker, RangeCalendar } from '@mantine/dates'
import { useMediaQuery } from '@mantine/hooks';
import { useState, useEffect } from 'react'
import { AiOutlineCalendar } from 'react-icons/ai'
import dayjs from 'dayjs'

const SelectionSection = () => {

    const isMobile = useMediaQuery('(max-width: 755px)');

    const initial = [dayjs().subtract(7, 'days').toDate(), dayjs().toDate()]

    const [value, setValue] = useState(initial)
    const [visible, setVisible] = useState(true);

    const [calVal, setCalVal] = useState(value)

    const [opened, setOpened] = useState(false);

    useEffect(() => {
      setCalVal(value)
    },[value])


    const handleClick = (e) => {
      setVisible(!visible)
    }

    console.log(dayjs().month())

    const ranges = {
      'Yesterday': [dayjs().subtract(1, 'day').toDate(), dayjs().toDate()],
      'This Week': [dayjs().subtract(7, 'days').toDate(), dayjs().toDate()],
      'Last 30 Days': [dayjs().subtract(1, 'month').toDate(), dayjs().toDate()],
      'This Month': [dayjs().subtract(30, 'day').toDate(), dayjs().toDate()],
      'This Year': [dayjs('2021-01-01').toDate(), dayjs().toDate()],
      'Last Year': [dayjs('2020-01-01').toDate(), dayjs('2020-12-31').toDate()],
    }


    const [dateRange, setDateRange] = useState('Yesterday')

    const dateRanges = [ 'Yesterday', 'This Week', 'Last 30 Days', 'This Month', 'This Year', 'Last Year']

    const handlePresetClick = (val) => {
      setCalVal(ranges[val])
      setOpened(false)
      setDateRange(val)
    }

    useEffect(() => {
      console.log(dateRange)
    },[dateRange])

    const handleDateChange = (val) => {
      setCalVal(val)
      setDateRange('Custom')
    }

    //STYLES

    const wrapper = (theme) => ({
      display: 'grid', 
      gridTemplateColumns: isMobile ? '1fr' : 'auto auto', 
      gap: '1rem'
    })

    const inputStyle = {
      width: '100%',
      '& :hover': {
        cursor: 'pointer'
      }
    }

    const datePicker = {
      width: isMobile ? '100%' : '310px'
    }


  return (
    <Box sx={wrapper}>
      <Menu
        control={
          <TextInput 
            size='sm' 
            radius='md' 
            color='gray'
            sx={inputStyle}
            value={dateRange}
          />
        }
      >
        {
          dateRanges.map( (preset, idx) => (
            <Menu.Item
              key={idx}
              onClick={() => handlePresetClick(preset)}
            >
              {preset}
            </Menu.Item>
          ))
        }
      </Menu>
      <DateRangePicker
              icon={<AiOutlineCalendar />}
              value={calVal}
              radius='md'
              clearable={false}
              amountOfMonths={isMobile ? 1 : 2}
              dropdownType={isMobile ? 'modal' : 'popover'}
              maxDate={new Date()}
              onChange={(val) => handleDateChange(val)}
              sx={datePicker}
      />
    </Box>
  )
}

export default SelectionSection