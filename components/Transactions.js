import { Paper, Text, Table, Box } from '@mantine/core'
import dayjs from 'dayjs'

const Transactions = ({ transactions }) => {


    const ths = (
        <tr>
          <th>Date</th>
          <th>Type</th>
          <th>Debit</th>
          <th>Credit</th>
        </tr>
      );

    console.log(dayjs('2021-08-21T14:02:47+00'))

    return (
        <Paper
            shadow='sm'
            radius='md'
            withBorder
            padding='md'
            mt='xl'
        >
            <Text>Transactions</Text>
            <Table>
                <thead>{ths}</thead>
                    <tbody>
                        {
                            transactions.map( trans => (
                                <tr key={trans['Date']}>
                                    <td>{trans['Date'].split('T')[0]}</td>
                                    <td>{trans['Transaction Type']}</td>
                                    <td>{trans['Amount Debited']}</td>
                                    <td>{trans['Amount Credited']}</td>
                                </tr>
                            ))
                        }
                    </tbody>
            </Table>
        </Paper>
    )
}

export default Transactions