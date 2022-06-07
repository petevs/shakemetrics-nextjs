import { Box, Paper, Group, Icon, Text } from "@mantine/core"
import { BiCustomize } from "react-icons/bi"

const ShakingSatsStats = ({ familyKey, stats}) => {

  if(familyKey !== 'shakingSats'){ return (
    <></>
  )}


  const StatCard = ({title, value}) => {
    return (
      <Paper withBorder radius="md" shadow='md'  sx={{padding: '1rem', minWidth: '200px'}}>
        <Text color='dimmed' size='xs' transform='uppercase' weight={700}>{title}</Text>
        <Text weight={700} size='xl'>
          {value}
        </Text>
      </Paper>
    )
  }

  return (
    <Box sx={{
      display: 'grid', 
      gridAutoFlow: 'column', 
      paddingTop: '1rem', 
      justifyContent: 'start', 
      gap: '1rem',
      '@media (max-width: 978px)': {
        gridAutoFlow: 'row',
        justifyContent: 'stretch'
      }
      }}>
      <StatCard 
        title='Longest Streak'
        value={`${stats.longestStreak} days`}
      />
      <StatCard 
        title='Longest Streak Start Date'
        value={`${stats.longestStreakStartDate}`}
      />
      <StatCard 
        title='Longest Streak End Date'
        value={`${stats.longestStreakEndDate}`}
      />
      <StatCard 
        title='Last Day Shaked'
        value={`${stats.lastDay}`}
      />
    </Box>
  )
}

export default ShakingSatsStats