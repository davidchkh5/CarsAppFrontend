'use client'

import React, { useEffect, useState } from 'react'
import Auctioncard from './AuctionCard';
import { Auction, PagedResult } from '@/types';
import AppPagination from '../components/AppPagination';
import { getData } from '../actions/auctionActions';
import Filters from './Filters';
import { useParamsStore } from '@/hooks/useParamsStore';
import { shallow, useShallow } from 'zustand/shallow';
import qs from 'query-string';
import EmptyFilter from '../components/EmptyFilter';

export default  function Listings() {
  const [data, setData] = useState<PagedResult<Auction>>();
  const params = useParamsStore(useShallow(state => ({
    pageNumber: state.pageNumber,
    pageSize: state.pageSize,
    searchTerm: state.searchTerm,
    orderBy: state.orderBy,
    filterBy: state.filterBy,
    seller: state.seller,
    winner: state.winner
  })));
  
  const setParams = useParamsStore(state => state.setParams);
  const url = qs.stringifyUrl({url:'', query: params});
  
  function setPageNumber(pageNumber: number){
    setParams({pageNumber})
  }


    useEffect(() => {
      getData(url).then(data => {
          setData(data);
      });
    }, [url])

    if (!data) return <h3>Loading...</h3>

    console.log("Datooood: "+data.totalCount);

  return (  
    <>
      <Filters />
      {data.totalCount === 0 ? (
        <EmptyFilter showReset/> 
      ) : (
        <>
                    <div className='grid grid-cols-4 gap-6'>
          {data.results.map(auction => (
        <Auctioncard auction={auction} key={auction.id}/>
          ))}
          </div>
         <div className='flex justify-center mt-4'>
        <AppPagination pageChanged={setPageNumber} currentPage={params.pageNumber} pageCount={data.pageCount}/>
          </div>
        </>
      )}

    </>


  )
}
