'use client'

import React from 'react'
<<<<<<< HEAD
import Countdown, { zeroPad } from 'react-countdown';

=======
import Countdown, { zeroPad } from 'react-countdown'
>>>>>>> 6a2215f9a2214421025603bad3a8016f14bf17cd

type Props = {
    auctionEnd: string
}

<<<<<<< HEAD
const renderer = ({ days, hours, minutes, seconds, completed }:
     {days: number, hours: number, minutes:number, seconds:number, completed:boolean}) => {

        return (
            <div className={`border-2 border-white text-white py-1 px-2 rounded-lg flex justify-center
            ${completed ? 'bg-red-600' : (days === 0 && hours < 10) ? 'bg-amber-600' : 'bg-green-600'}`}>

                {completed ? (
                    <span>Auction finished</span>
                ) : (
                    <span>{zeroPad(days)}:{zeroPad(hours)}:{zeroPad(minutes)}:{zeroPad(seconds)}</span>
                )}
            </div>
        )

  };
=======
const renderer = ({days, hours, minutes, seconds, completed}: 
    {days:number, hours: number, minutes: number, seconds: number, completed: boolean}) => {
        return (
            <div className={`
                border-2 border-white text-white py-1 px-2 rounded-lg flex justify-center
                ${completed ? 'bg-red-600' : (days === 0 && hours < 10) ? 'bg-amber-600' :
                    'bg-green-600'
                }
                `}>
                    {completed ? (
                        <span>Auction Finished</span>
                    ) : (
                        <span suppressHydrationWarning={true}>{zeroPad(days)}:{zeroPad(hours)}:{zeroPad(minutes)}:{zeroPad(seconds)}</span>
                    )}
                </div>
        )



}
>>>>>>> 6a2215f9a2214421025603bad3a8016f14bf17cd

export default function CountdownTimer({auctionEnd}: Props) {
  return (
    <div>
<<<<<<< HEAD
        
        <Countdown date={auctionEnd} renderer={renderer} />
    
=======
        <Countdown date={auctionEnd} renderer={renderer}/>
>>>>>>> 6a2215f9a2214421025603bad3a8016f14bf17cd
    </div>
  )
}
