import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './Pages/Home';
import OneMovie from './Pages/OneMovie';
import Header from './Components/Header';
import MyProfile from './Pages/MyProfile';

const name = "Mattias"

function App() {

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route index path='/' element={<Home />}></Route>
          <Route path='/oneMovie' element={<OneMovie />}></Route>
          <Route path='/myProfile' element={<MyProfile name={name} />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
