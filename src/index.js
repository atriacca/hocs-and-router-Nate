import React from 'react'
import ReactDOM from 'react-dom'
import App from '../../../../../../Downloads/hocs-and-router/src/App.js'
import DataProvider from './context/DataProvider.js.js'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
    <BrowserRouter>
        <DataProvider>
            <App/>
        </DataProvider>
    </BrowserRouter>, 
document.getElementById('root'))