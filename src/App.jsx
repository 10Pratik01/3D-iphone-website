import { useState } from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Highlights from './components/Highlights'
import Model from './components/Model'
import * as Sentry from '@sentry/react'
import Features from './components/Features'


const App = ()=>  {


  return (
    <>
     <Navbar/> 
     <Hero/> 
     <Highlights/> 
     <Model/> 
     <Features/>
    </>
  )
}

export default Sentry.withProfiler(App)
