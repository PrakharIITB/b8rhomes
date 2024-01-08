import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import Property from './pages/Property'
import Error from './pages/Error'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/home' element={<Home />} />
          <Route path='/property/:id' element={<Property />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
