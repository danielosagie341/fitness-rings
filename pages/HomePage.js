import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import YourActivities from '../components/YourActivities'
import Chatbot from '@/components/Chatbot'

const HomePage = () => {

  return (
      <div className='min-h-screen no-scrollbar overflow-scroll lg:px-20'>
        <Header />
        <Hero />
        <Chatbot />
        <YourActivities />
      </div>
  )
}

export default HomePage