export type PagedResult<T> = {
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
}