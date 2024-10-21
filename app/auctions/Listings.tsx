import React from 'react'
import Auctioncard from './Auctioncard';

async function getData() {
    const res = await fetch('http://localhost:6001/search');

    if(!res.ok) throw new Error('Failed to fetch');

    return res.json();
}

export default async function Listings() {
    const data = await getData();
  return (  
    <div>
        {data && data.results.map((auction:any)=> (
            <Auctioncard auction={auction} key={auction.id}/>
        ))}
    </div>
  )
}
