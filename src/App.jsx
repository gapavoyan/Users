import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import User from './user'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <User/>
    </div>
  )
}

export default App
