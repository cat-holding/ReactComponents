import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import React from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <p>Стартовая страничка приложения</p>
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
    </div>
  )
}

export default App
