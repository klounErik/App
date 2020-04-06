import React from "react";
import ReactDOM from 'react-dom'
import App from './src/App'
import { BrowserRouter } from 'react-router-dom'
import 'antd/dist/antd.css';

ReactDOM.render(<BrowserRouter basename="/"> <App /></BrowserRouter>, document.getElementById('root'))