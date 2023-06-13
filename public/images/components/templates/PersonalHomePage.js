import React from 'react'
import Hero from '../Hero'
import Featured from '../Featured'
import FeaturedIn from '../FeaturedIn'
import FeaturedImageLeftCarousel from '../FeaturedImageLeftCarousel'
import FeaturedImageRight from '../FeaturedImageRight'
import WordOnTheStreets from '../WordOnTheStreets'
import VirtualBankingPerks from '../VirtualBankingPerks'
import Footer from '../templates/Footer'
import ThreeCards from '../ThreeCards'
const PersonalHomePage = () => {
  return (
    <div className=' overflow-hidden'>
      
      <Hero
        image={'./images/girl-with-green-book.png'}
        displayImg2={'hidden'}
        title={'make sapa no catch '}
        titleLine1={'you'}
        titleLine2={'you'}
        titleLine3={'you'}
        description={'You can spend without having to worry about sapa catching up to you, spend while your savings and budgeting is on lock with your personal finance manager.'}
      />

      <Featured
        title1={'Save'}
        title2={'Spend'}
        title3={'Budget'}
        description1={'Keep a part of your funds with our flexible plans and prepare for cloudy days that are yet to come.'}
        description2={"It's okay to spend your money but avoid impulsive and unnecessary spending while at it."}
        description3={'Create an unbreakable plan on how you spend your money daily and even all year round.'}
      />

      <VirtualBankingPerks />

      <div className='xl:py-40 px-5 2xl:px-[9%] 3xl:px-[20%]'>
        <FeaturedImageRight
          image={'./images/full-phone.png'}
          title={'Recharge Your Device '}
          title2={'Effortlessly'}
          display={'hidden'}
          color2={'opacity-30'}
          description={'Airtime and data make the social life go round! Recharge your device, regardless of your network, without bother. '}
        />
      </div>

      <FeaturedImageLeftCarousel
        backgroundColor={'bg-lightBlueBackground'}
        image1={'./images/people-in-the-market.png'}
        image2={'./images/carousel-image1.png'}
        image3={'./images/carousel-image2.png'}
        image4={'./images/carousel-image3.png'}
        image5={'./images/carousel-image4.png'}
        title={'We Are Improving The Financial Lives Of Young Adults'}
      />
      
      
      <ThreeCards
        displayImg2={'hidden'}
        titleLine1={'life as a student'}
        titleLine2={'just got better'}
        description={'Break the always broke student stereotype and live your best life, by having your finances planned and managed to a capital T.'}
      />
      
      <div className='px-5 3xl:px-32'>
        <FeaturedImageRight
          backgroundColor={'bg-yellowBackground2'}
          image={'./images/man-with-phone.png'}
          displayImg2={'hidden'}
          title={'Start Beaming Today'}
          description={"You can save, plan your spending, spend your funds and make your transactions without breaking a sweat. When your finances is all in shape, what's not to smile about?!"}
        />
      </div>

      <WordOnTheStreets />

      <FeaturedIn
        image1={"./images/vanguard-logo.png"}
      />

      <Footer />    

    </div>
  )
}

export default PersonalHomePage