import { MantineProvider, ColorSchemeProvider, ColorScheme } from '@mantine/core'
import { GlobalProvider } from '../state/GlobalContext'
import { useEffect, useState } from 'react'
import { httpsCallable } from 'firebase/functions';
import { functions } from '../firebase'

function MyApp({ Component, pageProps }) {

  const [colorScheme, setColorScheme] = useState('light');
  const toggleColorScheme = (value) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));


    // useEffect(() => {

    //   const makeMockData = httpsCallable(functions, 'makeMockData')

    //   const getDummyData = async () => {

    //     const result = await makeMockData({ message: 'test' })
    //     console.log(result)
    //   }

    //   getDummyData()

    // },[])

  return (  
    <GlobalProvider>
      <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
        <MantineProvider
            withGlobalStyles
            withNormalizeCSS
            theme={{
              colorScheme,
            }}
        >
          <Component {...pageProps} />
        </MantineProvider>
      </ColorSchemeProvider>
    </GlobalProvider>
  )
}

export default MyApp
