import './App.css'
import MyNav from './Components/MyNav'
import MyFooter from './Components/MyFooter'
import Welcome from './Components/Welcome'
import BookSingle from './Components/BookSingle'
import fantasyBooks from './Generi/fantasy.json'
import AllTheBooks from './Components/AllTheBooks'

function App() {
  

  return (
    <div className='app'>
      <MyNav />
      <Welcome />
      <AllTheBooks />
      <MyFooter />
    </div>
  )
}

export default App
