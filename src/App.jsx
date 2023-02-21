import './global.css'
import { Header } from './components/Header'
import { AboutMe } from './components/AboutMe'

import Lottie from 'lottie-react';
import Guy from "./animation.json"
import styles from "./App.module.css";

const styleAni = {
  height:500,
  width: 700,
  margin: 10,
  padding: 10,
  display: 'inline-block',
};

export function App() {
  return (
    <div>
      <Header/>
      <main className={styles.main}>
        <Lottie loop ={true} style={styleAni} animationData={Guy} />
        <AboutMe/>
      </main>
    </div>
  )
}
