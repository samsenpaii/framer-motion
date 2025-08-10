import React, { useState } from 'react'
import { motion  , AnimatePresence } from "motion/react"

function MemberCard({ imgSrc , MemberName ,MemberYT , MemberInfo}) {

  const [hover, setHover] = useState(false);


  return (<>

<div className="relative h-[450px] w-[460px] group" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
  <img
    src={imgSrc}
    alt="img1"
    className="h-full w-full rounded-lg object-cover"
  />    

  <AnimatePresence>
    {/* Show overlay only when hovered */}
    {hover && (
      <motion.div
          initial={{ opacity: 0    }} // start small & transparent
          animate={{ opacity: 0.85, scale: 1 }} // grow to full size & visible
          exit={{ opacity: 0 }} // shrink & fade out
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="absolute top-0 left-0 w-full h-full bg-[#1544D7] rounded-lg flex-col "
        > 
          <div className='mt-20 w-64 ml-2'>
            <p className='text-white font-sans text-[17px]'>
              {MemberInfo}
            </p>
          </div>
          <div className='mb-4 mt-40'>
            <div className=" absolute top-96 bg-black opacity-100 text-white text-xl w-fit p-1 cursor-pointer">
              <p onClick={() => window.open(MemberYT, '_blank')}
              >Meet {MemberName}</p>
            </div>
          </div>
          
      </motion.div>
    )}
  </AnimatePresence>
</div>




</>)}

export default MemberCard