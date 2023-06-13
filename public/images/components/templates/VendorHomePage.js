import React from 'react'
import Hero from '../Hero'
import Featured from '../Featured'
import FeaturedIn from '../FeaturedIn'
import FeaturedImageLeft from '../FeaturedImageLeft'
import FeaturedImageRight from '../FeaturedImageRight'
import WordOnTheStreets from '../WordOnTheStreets'
import HeroReverse from '../HeroReverse'
import FinancesCard from '../FinancesCard'
import WordOnTheStreetsVertical from '../WordOnTheStreetsVertical'
import Footer from './Footer'

function VendorHomePage() {
  return (
    <div className='bg-white'>
      <div className='3xl:mx-auto 3xl:container'>
        <Hero
          image2={'./images/girl-in-the-market.png'}
          displayImg1={'hidden'}
          title={'sell on beam'}
          paddingToBreak={'lg:pr-24'}
          hidden={'hidden'}
          description={'Online business just got better and easier. You get to display your wares, reach out to the public,  keep track of your transactions and finances all on one platform!'}
          coming={'Feature coming soon, get the app'}
        />
      </div>

      <FinancesCard />

      <HeroReverse
        image={'./images/growth-reach.png'}
        displayImg2={'hidden'}
        titleLine1={'Grow your reach'}
        titleLine2={'as a vendor'}
        hidden={'hidden'}
        description={'Make noise with your sales and enlarge your engagement with your online buyers.'}
      />

      <div className='px-5 2xl:px-20'>
        <FeaturedImageRight
          backgroundColor={'bg-yellowBackground2'}
          image={'./images/hand-held-phone2.png'}
          displayImg2={'hidden'}
          title={'Start Beaming Today'}
          description={'Make sales effortlessly, transact seamlessly, expand greatly  and beam endlessly!'}
        />
      </div>

      <WordOnTheStreetsVertical />

      <FeaturedIn
        image1={"./images/vanguard-logo.png"}
      />

      <Footer /> 

    </div>
  )
}

export default VendorHomePage