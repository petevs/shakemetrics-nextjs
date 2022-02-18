import { MantineProvider, ColorSchemeProvider, ColorScheme } from '@mantine/core'
import { GlobalProvider } from '../state/GlobalContext'
import { useState } from 'react'

function MyApp({ Component, pageProps }) {

  const [colorScheme, setColorScheme] = useState('light');
  const toggleColorScheme = (value) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

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
