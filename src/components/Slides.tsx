import { Data } from '../pages/index'
import SliderCard from './SliderCard'
import React from 'react'

type Props = {
  data: Data[];
};

function Slides({ data }: Props) {
  return (
    <div className='flex w-full gap-6'>
      {data.map((data) => {
        return <SliderCard key={data.img} data={data} />
      })}
    </div>
  )
}

export default Slides;