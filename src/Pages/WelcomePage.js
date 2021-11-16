import React from 'react'

import Screen from '../Components/Screen'
import Welcome from '../Components/Welcome'

export default function WelcomePage() {

const welcomeScreenStyles = `
  bg-gradient-to-tl 
  from-secondary-light 
  via-secondary-light 
  to-secondary-grad-light 
  rounded-50px 
  flex 
  flex-col 
  justify-between 
  items-center`;


  return <Screen screenStyles={welcomeScreenStyles} children={<Welcome />} />
    
}