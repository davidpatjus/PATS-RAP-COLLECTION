import React from 'react'
import { motion } from 'framer-motion'
import { Data, CurrentSlideData } from '@/pages'

type Props = {
  transitionData: Data;
  currentSlideData: CurrentSlideData;
}

function BackgroundImage({ transitionData, currentSlideData }: Props) {
  return (
    <>

    {/* Background Transition Animation */}
      {transitionData && (
        <motion.img
          key={transitionData.img}
          layoutId={transitionData.img}
          alt={transitionData.title}
          transition={{ 
            opacity: { ease: "linear" },
            layout: { duration: 0.6 },
           }}
          className="absolute left-0 top-0 z-10 h-full w-full object-cover brightness-50"
          src={transitionData.img}
        />
      )}

      {/* Background Image */}
      <motion.img
        alt={currentSlideData.data.title}
        key={currentSlideData.data.img + "transition"}
        src={currentSlideData.data.img}
        className=' absolute left-0 top-0 h-full w-full object-cover brightness-50'
      />  
      
    </>
  )
}

export default BackgroundImage
