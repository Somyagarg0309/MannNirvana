import React from 'react'
import TopSellers from './TopSellers'
import Recommend from './Recommend'
import PodCasts from './PodCasts'
import LeaderBoard from './LeaderBoard'
function Home() {
  return (
    <div >
      <div className='flex justify-around mt-8'>
        <div className='w-3/4'>
        <PodCasts/>
        </div>
        <LeaderBoard/>
      </div>
      <TopSellers/>
      <Recommend/>
    </div>
 
  )
}

export default Home;