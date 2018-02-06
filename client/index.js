import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom'
import {AppContainer} from 'react-hot-loader'

import Main from './components/Main/Main'
import configureStore from './configureStore'

const store = configureStore()

const render = () => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <BrowserRouter>
          <Main />
        </BrowserRouter>
      </Provider>
    </AppContainer>,
    document.getElementById('root')
  )
}

render()

if (module.hot) {
  module.hot.accept('./components/Main/Main', render)
}
