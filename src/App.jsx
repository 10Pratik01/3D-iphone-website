import { useState } from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Highlights from './components/Highlights'
import Model from './components/Model'
import * as Sentry from '@sentry/react'
import Features from './components/Features'
import Chip from './components/Chip'


const App = ()=>  {


  return (
    <>
     <Navbar/> 
     <Hero/> 
     <Highlights/> 
     <Model/> 
     <Features/>
     <Chip/>
    </>
  )
}

export default Sentry.withProfiler(App)
