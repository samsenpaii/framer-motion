import React from 'react'
import { motion } from 'framer-motion'
import { Typewriter } from 'react-simple-typewriter'

function App() {
  const text = ["Welcome to Motion", "Smooth UI", "Animated with Framer + Typewriter"]

  return (
    <div className='h-screen w-full flex flex-col items-center justify-center gap-10 bg-gray-100'>
      
      {/* <motion.div 
        className='h-36 w-36 bg-red-500' 
        animate={{
          x: [0, 1000, 0],
          rotate: [0, 360, 0, -360, 0]
        }} 
        transition={{
          delay: 3,
          duration: 4,
          repeat: Infinity,
          ease: 'anticipate'
        }}
      /> */}

      <h1 className='text-3xl font-bold'>
        <Typewriter
          words={text}
          loop={0} // set to 0 for infinite loop
          cursor
          cursorStyle='|'
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </h1>
    </div>
  )
}

export default App
