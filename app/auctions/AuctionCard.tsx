import React from 'react'

type Props = {
    auction: any
}

export default function Auctioncard(props: Props) {
  return (
    <div>{props.auction.make}</div>
  )
}
