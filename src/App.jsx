import React from 'react'
import ButtonGradient from './assets/svg/ButtonGradient.jsx'
import Button from './Components/Button.jsx'
import Header from './Components/Header.jsx'

const App = () => {
  return (
    <>
      
      <div className='pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden'>
        <Header/>
      </div>
      <ButtonGradient/>
    </>
  )
}

export default App;

