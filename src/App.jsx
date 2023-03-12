import { useState } from 'react';
import Button from './components/Button';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Pantry Pal</h1>
      <Button>Submit</Button>
    </div>
  )
}

export default App
