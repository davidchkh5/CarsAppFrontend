export type PagedResult<T> = {
<<<<<<< HEAD
    results: T[]
    pageCount: number
    totalCount: number
}

export type Auction  = {
    reservePrice: number
    seller: string
    winner?: string
    soldAmount: number
    currentHighBid: number
    createdAt: string
    updatedAt: string
    auctionEnd: string
    status: string
    make: string
    model: string
    year: number
    color: string
    mileage: number
    imageUrl?: string
    id: string

=======
    results: T[];
    pageCount: number;
    totalNumber: number;
}

export type Auction = {
    reservePrice: number;
    seller: string;
    winner?: string;
    soldAmount: number;
    currentHighBid: number;
    createdAt: string;
    auctionEnd: string;
    status: string;
    make: string;
    model: string;
    year: number;
    color: string;
    mileage: number;
    imageUrl: string;
    id: string;
>>>>>>> 6a2215f9a2214421025603bad3a8016f14bf17cd
}