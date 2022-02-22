import { Accordion, Title, Paper } from "@mantine/core"
import DashboardShell from "../components/DashboardShell"
import { frequentlyAskedQuestions } from "../lib/frequentlyAskedQuestions"

const FAQPage = () => {
  return (
    <DashboardShell>
      <Title color='dimmed' size='xl' weight={700} mb='xl'>
        Frequently Asked Questions
      </Title>
      <Paper
          shadow='sm'
          radius='md'
          withBorder
          padding='xl'
      >
        <Accordion>
        {
          frequentlyAskedQuestions.map( (item, idx) => (
            <Accordion.Item key={idx} label={item.q}>
              {item.a}
            </Accordion.Item>
          ))
        }
        </Accordion>
      </Paper>
    </DashboardShell>
  )
}

export default FAQPage