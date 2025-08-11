import React from 'react'
import Logo from './Logo'
import YoutubeSvg from '../utils/YoutubeSvg'
import InstagramSvg from '../utils/InstagramSvg'
import YoutubeVideo from './YoutubeVideo'
import MemberCard from './MemberCard'
function Body() {
  return (
    <>
      <div className='bg-black h-full p-5 flex '>   
        <div className=' border-[1px] border-amber-50 rounded-2xl bg-[#1B1A1B] w-[350px] h-64 ml-9 flex justify-center items-center sele'>
          <p className='text-white text-xl font-sans'>
            A group of friends with a few <br/>videos online, over million fans <br/> and half a billion of views
          </p>
        </div>
        {/* <div className='flex-row'> */}
          <div className='w-[1300px] h-64 ml-5'>
            <img src="/group.jpg" alt="group img" className='rounded-2xl h-full '/>
          </div>

          {/* <div className='w-[800px] h-[100px] rounded-2xl bg-black ml-9 mt-3 flex items-center justify-center'>
            <div className='text-white flex justify-between'>
              <YoutubeSvg/>
              <InstagramSvg/>
            </div>
          </div>  */}
        {/* </div> */}
        
      </div>
      <div className='flex justify-center items-center bg-black'>
        <YoutubeVideo></YoutubeVideo>
      </div>

      <div className="grid grid-cols-3 gap-4 bg-black p-8 pt-20 pb-20">
        <MemberCard imgSrc={'/Divu.jpg'} MemberName={"Divyansh"} MemberYT={"https://www.youtube.com/@DivyanshCR7"} MemberInfo={"It’s DivyanshCR7 — your go-to for calm, clear football talk. I keep it cool, even when Ronaldo scores a hat-trick… okay, maybe not that calm"}/>
        <MemberCard imgSrc={'/marka.webp'} MemberName={"Markaroni"} MemberYT={"https://www.youtube.com/@Markaroni"} MemberInfo={"Markaroni in the house — serving football takes hot, Barça runs in my veins and sarcasm fuels my uploads. I love Football but MESSI more."}/>
        <MemberCard imgSrc={'/yjr.jpg'} MemberName={"YjR"} MemberYT={"https://www.youtube.com/@yashyjr"} MemberInfo={"YjR here — I bleed Madridismo. Transfers, goals, and why Viní Jr. is basically football’s cheat code! okay may be not for last season — that’s my daily grind."}/>
        <MemberCard imgSrc={'/chonky.jpg'} MemberName={"Chonkyy"} MemberYT={"https://www.youtube.com/@chonkyy7871"} MemberInfo={"I’m Chonky — welcome to my football tent, where the takes are hot, the banter’s loud, and your club’s defense probably isn’t safe."}/>
        <MemberCard imgSrc={'/mohak 1.webp'} MemberName={"Mohak"} MemberYT={"https://www.youtube.com/@ONEMUFC/videos"} MemberInfo={"It’s Mohak here — your daily dose of Manchester United talkserving football takes hotter than Maguire’s head after a mistake. From Indian football to the Premier League, nothing’s safe from my sarcasm."}/>
        <MemberCard imgSrc={'/all players.jpg'} MemberName={"The OG's"} MemberYT={"https://www.youtube.com/@ChaosClub.Official"} MemberInfo={""}/>
      </div>

      <div className=''>

      </div>
    </>
  )
}

export default Body