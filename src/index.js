import React from 'react'
import ReactDom from 'react-dom'
import App from './container/app'
import { StoreProvider } from './store'

ReactDom.render(<StoreProvider><App /></StoreProvider>, document.getElementById('root'))