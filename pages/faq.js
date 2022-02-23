import { Accordion} from "@mantine/core"
import BasicPageLayout from "../components/BasicPageLayout"
import { frequentlyAskedQuestions } from "../lib/frequentlyAskedQuestions"

const FAQPage = () => {
  return (
    <BasicPageLayout
      title='Frequently Asked Questions'
      firstSection={
        <Accordion>
        {
          frequentlyAskedQuestions.map( (item, idx) => (
            <Accordion.Item key={idx} label={item.q}>
              {item.a}
            </Accordion.Item>
          ))
        }
        </Accordion>
      }
    />
  )
}

export default FAQPage