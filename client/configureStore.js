import {createStore, compose, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import reducer from './reducers'

const configureStore = () => {
  const middlewares = [thunkMiddleware]

  return createStore(
    reducer,
    compose(
      applyMiddleware(...middlewares),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  )
}

export default configureStore
