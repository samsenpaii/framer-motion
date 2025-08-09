import React from 'react'

function MemberCard({ imgSrc }) {
  return (<>

<div className="h-[450px] w-[460px]">
  <img
    src={imgSrc}
    alt="img1"
    className="h-full w-full rounded-lg object-cover"
  />    
</div>


</>)}

export default MemberCard