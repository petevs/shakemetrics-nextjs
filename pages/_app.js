import { MantineProvider } from '@mantine/core'
import { GlobalProvider } from '../state/GlobalContext'

function MyApp({ Component, pageProps }) {
  return (  
    <GlobalProvider>
      <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{
            /** Put your mantine theme override here */
            colorScheme: 'light',
          }}
      >
        <Component {...pageProps} />
      </MantineProvider>
    </GlobalProvider>
  )
}

export default MyApp
