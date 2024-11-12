<<<<<<< HEAD
'use client'

=======
'use client';
>>>>>>> 6a2215f9a2214421025603bad3a8016f14bf17cd
import React, { useState } from 'react'
import Image from 'next/image'

type Props = {
    imageUrl: string
}

export default function CarImage({imageUrl}: Props) {
    const [isLoading, setLoading] = useState(true);
<<<<<<< HEAD



    return (
    <Image
    src={imageUrl}
    alt = 'image of car'
    fill
    priority
=======
  return (
    <Image
    src={imageUrl}
    alt='image'
    fill
>>>>>>> 6a2215f9a2214421025603bad3a8016f14bf17cd
    className={`
        object-cover group-hover:opacity-75 duration-700 ease-in-out
        ${isLoading ? 'grayscale blur-2xl scale-110' : 'grayscale-0 blur-0 scale-100'}
        `}
<<<<<<< HEAD
    sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw'
    onLoad={() => setLoading(false)}
/>
=======
    priority
    sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw'
    onLoad={() => setLoading(false)}
    
    />
>>>>>>> 6a2215f9a2214421025603bad3a8016f14bf17cd
  )
}
