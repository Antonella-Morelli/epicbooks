import './App.css'
import MyNav from './Components/MyNav'
import MyFooter from './Components/MyFooter'
import Welcome from './Components/Welcome'
import AllTheBooks from './Components/AllTheBooks'
import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'
import NotFound from './Components/NotFound'
import BookDetails from './Components/BookDetails'


function App() {
  const [searchTerm, setSearchTerm] = useState('')

  return (

    <div className='app'>
      <Welcome/>
      <BrowserRouter>
        <MyNav searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <Routes>
          <Route path="/" element={<AllTheBooks searchTerm={searchTerm} />} />
          <Route path='*' element = {<NotFound/>} />
          <Route path="/book/:asin" element={<BookDetails />} />
        </Routes>
      </BrowserRouter>
      <MyFooter />
    </div>

  )
}

export default App
