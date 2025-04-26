import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import WayToData from './components/Waytodata/WayToData'
import RegistrationForm from './components/FormReg/FormReg'
// import './data'
// import { sneakers } from './data'



export default function App() {

  return (
    <>
    <Header />
    {/*sneakers.map(sneaker =>
      <WayToData {...sneaker} />
    )*/}
    <RegistrationForm/>

    </>
  )
}