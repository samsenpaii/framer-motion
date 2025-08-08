import React from 'react'
import Logo from './Logo'
import YoutubeSvg from '../utils/YoutubeSvg'
import InstagramSvg from '../utils/InstagramSvg'
import { motion } from 'motion/react'
function Hero() {
  return (
    <>
      <div className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
      >
        <source src="/bg-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Foreground Content */}
      <div className="flex flex-col items-center justify-center h-full text-white text-center px-4">
        <Logo isSmall={false}></Logo>
        <div className="border-2 w-5 h-10 rounded-3xl m-2 flex justify-center">
          <motion.div 
          className="w-2 h-2 bg-white rounded-full m-1"
          animate = {{
            y : [ 0 , 20, 0]
          }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          ></motion.div>
        </div>
        <button className="px-6 py-2 border border-white text-white bg-transparent hover:bg-white hover:text-black transition duration-300 hover:cursor-pointer">
          WORK WITH US
        </button>
        <div className=' flex flex-row'>
          <button onClick={() => window.open('https://www.youtube.com/@ChaosClub.Official', '_blank')}>
            <YoutubeSvg />
          </button>
          <button onClick={() => window.open('https://www.instagram.com/chaosclub.uh?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==', '_blank')}>
            <InstagramSvg/>
          </button>
        </div>
      </div>
    </div>
    </>
  )
}

export default Hero