import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppRoute from './routes/AppRoute';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <AppRoute />
    </>
  )
}

export default App
