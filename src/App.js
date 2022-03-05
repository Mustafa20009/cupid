import React from 'react'
import About from './Component/About'
import RoadMap from './Component/RoadMap'
import Team from './Component/Team'
import Main from './Component/Main'
const App = () => {
  return (
    <div  >
      <Main/>
      <About/>
      <About color="white" styleforFirstDiv={"order-2 pl-20 "} textWidth={"w-full"}styleForSecondDiv={"order-1"} />
      <About  />
      <About color="white" styleforFirstDiv={"order-2 pl-20 "} textWidth={"w-full"}styleForSecondDiv={"order-1"} />
      <RoadMap/>
      <Team/>

    </div>
  )
}

export default App