import React from 'react'
import Logo from './Logo'
import YoutubeSvg from '../utils/YoutubeSvg'
import InstagramSvg from '../utils/InstagramSvg'
import YoutubeVideo from './YoutubeVideo'
import MemberCard from './MemberCard'
function Body() {
  return (
    <>
      <div className='bg-[#161716] h-full p-5 flex '>
        <div className="relative w-64 h-64">
          {/* Background Image */}
          <img
            src="/bg-for-logo.jpeg"
            alt="Background"
            className="w-full h-full rounded-3xl"
          />

          {/* Overlay Image */}
          <img
            src="/logo.png"
            alt="logo"
            className="absolute top-20 left-20 w-24 h-24 scale-150"
          />
        </div>

        <div className=' border-[1px] border-amber-50 rounded-2xl bg-[#1B1A1B] w-[350px] h-64 ml-9 flex justify-center items-center sele'>
          <p className='text-white text-xl font-sans'>
            A group of friends with a few <br/>videos online, over million fans <br/> and half a billion of views
          </p>
        </div>
        <div className='flex-row'>
          <div className='w-[800px] ml-9'>
            <img src="/group.jpg" alt="group img" className='rounded-2xl '/>
            
          </div>

          <div className='w-[800px] h-[100px] rounded-2xl bg-black ml-9 mt-3 flex items-center justify-center'>
            <div className='text-white flex justify-between'>
              <YoutubeSvg/>
              <InstagramSvg/>
            </div>
          </div> 
        </div>
        
      </div>
      <div className='flex justify-center items-center bg-[#161716]'>
        <YoutubeVideo></YoutubeVideo>
      </div>

      <div className="grid grid-cols-3 gap-4 bg-[#161716] p-8 pt-20">
        <MemberCard imgSrc={'/Divu.jpg'}/>
        <MemberCard imgSrc={'/marka.webp'}/>
        <MemberCard imgSrc={'/yjr.jpg'}/>
        <MemberCard imgSrc={'/chonky.jpg'}/>
        <MemberCard imgSrc={'/mohak 1.webp'}/>
        <MemberCard imgSrc={'/all players.jpg'}/>
      </div>
    </>
  )
}

export default Body