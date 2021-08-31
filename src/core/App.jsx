import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import '../public/index.css'
import '../ui/assets/fonts/index.css'
import GlobalWrapper from '../ui/Global/GlobalWrapper'

import store from '../modules/store'
import Layout from '../ui/components/Layout/Layout'
import Router from './routeConfig'

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <GlobalWrapper>
        <Layout>
          <Router />
        </Layout>
      </GlobalWrapper>
    </BrowserRouter>
  </Provider>
)

export default App
