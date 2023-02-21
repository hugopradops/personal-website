import './global.css'
import { Header } from './components/Header'
import { AboutMe } from './components/AboutMe'

import Lottie from 'lottie-react';
import Guy from "./animation.json"

const styleAni = {
  height:500,
  width: 700,
  margin: 10,
  padding: 10,
  display: 'block',
};


// import { Animation } from './components/Animation'

// var animation = bodymovin.loadAnimation({

//   container: document.getElementById(ani),
//   path:'./componets/watch-computer-animation.json',
//   render: 'svg',
//   loop: true,
//   autoplay: true,
//   name: 'computer guy'
// });





export function App() {
  return (
    <div>
      <Header/>
        <main>
          <Lottie loop ={true} style={styleAni} animationData={Guy} />
          <AboutMe/>
        </main>
    </div>
  )
}
