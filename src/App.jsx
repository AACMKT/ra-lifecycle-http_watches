import { useState } from 'react'
import { WorldTime } from './components/WorldTilme'
import { Interface } from './components/Interface'
import './App.css'

function App() {
  const [clock, setClock] = useState([])
  const handleClock = (el) => {
    const initialValue = [];
    const sumWithInitial = clock.reduce(
      (accumulator, currentValue) => [...accumulator, currentValue.city],
      initialValue,
    );

    if (!sumWithInitial.includes(el.city)) {
      setClock([...clock, el])
    }
  }

  const handleComponentRemove = (el) => {
    if (clock) {
      setClock(clock.filter((worldTime) => worldTime !== el))

    }
}

  return (
    <div className='container'>
      <div className='controls'>
        <Interface handleClock = { handleClock }/>
      </div>
      <div className='world-time'>
        <WorldTime gmtOffset = { clock } handleComponentRemove = { handleComponentRemove } />
      </div>
    </div>
  )
}

export default App
