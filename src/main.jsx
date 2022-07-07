import React from 'react'
import ReactDOM from 'react-dom/client'
import { CalendarApp } from './CalendarApp'
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  // React strict mode disabled while waiting for react-big-calendar update
  // <React.StrictMode>
    <CalendarApp />
  // </React.StrictMode>
)
