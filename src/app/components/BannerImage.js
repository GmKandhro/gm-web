import Image from 'next/image'
import React from 'react'

const BannerImage = ({imgSrc}) => {
  return (
    <div>
      <Image className='w-full' src={imgSrc} width={1800} height={700} alt='cover img'  />
    </div>
  )
}

export default BannerImage