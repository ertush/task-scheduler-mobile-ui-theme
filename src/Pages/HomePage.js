import React from 'react'

import Screen from '../Components/Screen'
import Home from '../Components/Home'


export default function HomePage() {

const homeScreenStyles = `
  bg-gradient-to-t
  from-primary-dark
  via-primary-dark
  to-primary-alt-light
  flex
  flex-col
  justify-start
  items-strech
  gap-y-7
`;

  return <Screen screenStyles={homeScreenStyles} children={<Home/>} />
    
}