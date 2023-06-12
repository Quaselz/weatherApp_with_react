import { useState } from "react";

import './App.css'
import Nav from './components/Header/Nav/Nav'
import Home from './pages/Home'

function App() {
  const [location, setLocation] = useState("Düsseldorf")
  const [fetchClicker, setFetchClicker] = useState(0)

  return (
    <>
      <header>
        <Nav setLocation={setLocation} fetchClicker={fetchClicker} setFetchClicker={setFetchClicker}/>
      </header>
      <main>
        <Home location={location} fetchClicker={fetchClicker}/>
      </main>
      <footer></footer>
    </>
  )
}

export default App
