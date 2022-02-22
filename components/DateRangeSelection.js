import { Box, Menu, Input } from '@mantine/core'
import { DateRangePicker } from '@mantine/dates'
import { useMediaQuery } from '@mantine/hooks';
import { AiOutlineCalendar } from 'react-icons/ai'
import useDateRange from '../hooks/useDateRange';

const DateRangeSelection = () => {

    const isMobile = useMediaQuery('(max-width: 755px)');

    const {
      dateRangeName,
      dateRangeList,
      tempDateRange,
      handlePresetClick,
      handleDateChange,
      setEditing,
    } = useDateRange()

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
          <Input 
            size='sm' 
            radius='md' 
            color='gray'
            sx={inputStyle}
            value={dateRangeName}
            type='button'
          />
        }
      >
        {
          dateRangeList.map( (preset, idx) => (
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
              value={tempDateRange}
              radius='md'
              clearable={false}
              amountOfMonths={isMobile ? 1 : 2}
              dropdownType={isMobile ? 'modal' : 'popover'}
              maxDate={new Date()}
              onChange={(val) => handleDateChange(val)}
              onDropdownClose={() => setEditing(false)}
              sx={datePicker}
      />
    </Box>
  )
}

export default DateRangeSelection