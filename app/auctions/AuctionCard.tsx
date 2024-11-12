<<<<<<< HEAD
import Image from 'next/image'
import React from 'react'
import CountdownTimer from './CountdownTimer'
import Countdown from 'react-countdown'
=======
import React from 'react'
import CountdownTimer from './CountdownTimer'
>>>>>>> 6a2215f9a2214421025603bad3a8016f14bf17cd
import CarImage from './CarImage'
import { Auction } from '@/types'

type Props = {
    auction: Auction
}

<<<<<<< HEAD
export default function AuctionCard({auction}: Props) {
  return (
    <a href='#' className='group'>
        <div className='relative w-full bg-gray-200 aspect-video rounded-lg overflow-hidden'>
            {auction.imageUrl ? 
            

            <CarImage imageUrl={auction.imageUrl}  />

        

        : <div>
            Image was not found
        </div>
        
        }

<div className='absolute bottom-2 left-2'>

<CountdownTimer auctionEnd={auction.auctionEnd}/>

</div>  
  
    </div>
     
        <div className='flex justify-between items-center mt-4'>
            <h3 className='text-gray-700'> {auction.make} {auction.model}</h3>
            <p className='font-semibold text-sm'> {auction.year}</p>
        </div>
  
=======
export default function Auctioncard({auction}: Props) {
  return (
    <a href="#">
      <div className='relative w-full bg-gray-200 aspect-video rounded-lg overflow-hidden'>
        
        {auction.imageUrl ? (
          <CarImage imageUrl={auction.imageUrl}/>
        ): (
          <div className="w-full h-full flex items-center justify-center text-gray-500">
          No Image Available
        </div>
        )}

      </div>
      
      <div className='flex justify-between items-center mt-4'>
          <h3 className='text-gray-700'>{auction.make} {auction.model} </h3>
          <p className='font-semibold text-sm'>{auction.year}</p>
      </div>
      <CountdownTimer auctionEnd={auction.auctionEnd}/>
      <div className='absolute bottom-2 left-2'>
      
      </div>

>>>>>>> 6a2215f9a2214421025603bad3a8016f14bf17cd
    </a>
  )
}
