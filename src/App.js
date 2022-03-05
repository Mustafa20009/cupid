import React from 'react'
import About from './Component/About'
import RoadMap from './Component/RoadMap'
const App = () => {
  return (
    <div  >
      <About/>
      <About color="white" styleforFirstDiv={"order-2 pl-20 "} textWidth={"w-full"}styleForSecondDiv={"order-1"} />
      <About  />
      <About color="white" styleforFirstDiv={"order-2 pl-20 "} textWidth={"w-full"}styleForSecondDiv={"order-1"} />
      <RoadMap/>

    </div>
  )
}

export default App