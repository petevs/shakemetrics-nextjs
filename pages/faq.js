import { Accordion } from "@mantine/core"
import BasicPageLayout from "../components/BasicPageLayout"
import { frequentlyAskedQuestions } from "../lib/frequentlyAskedQuestions"
import Head from "next/head"

const FAQPage = () => {
  return (
    <>
      <Head>
          <title>Frequently Asked Questions</title>
          <meta name="viewport" content="width=device-width, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"></meta>
      </Head>
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
    </>
  )
}

export default FAQPage