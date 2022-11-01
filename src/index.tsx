import React from 'react'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { BrowserRouter as Router } from 'react-router-dom'
import store from './state/store'
import { Provider as ReduxProvider } from 'react-redux'
import { createRoot } from 'react-dom/client'

const theme = extendTheme({
    colors : {
        brand : {
            'main' : '#FF6E78'
        }
    }
 });

const rootContainer = document.getElementById('root') as HTMLElement
const root = createRoot(rootContainer)
root.render(
  <React.StrictMode>
    <ReduxProvider store={store()}>
      <Router>
        <ChakraProvider theme={theme}>
          <App />
        </ChakraProvider>
      </Router>
    </ReduxProvider>
  </React.StrictMode>,
)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
