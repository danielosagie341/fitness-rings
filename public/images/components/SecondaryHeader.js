import React, {useState} from 'react'
import Link from 'next/link'
import GetAppButton from './GetAppButton'

const SecondaryHeader = () => {

  const [companyDropDown, setCompanyDropDown] = useState(false)
  const [helpDropDown, setHelpDropDown] = useState(false)
  const [openMobileNav, setOpenMobileNav] = useState(false)

  const closeDropDowns = () => {
    setCompanyDropDown(false)
    setHelpDropDown(false)
  }

  const setToggle = () => { 
    setOpenMobileNav(!openMobileNav)
  }

  return (
    <div>
      <div className='flex justify-between items-center lg:items-end h-fit 3xl:px-40 lg:px-10 sm:px-[18%] px-10 py-5 3xl:mx-auto 3xl:container'>
        <div className='flex justify-between items-end  xl:w-1/2'>
          <div onClick={ closeDropDowns } className='flex items-start  '>
            <Link href='/'>
              <a>
                <img src="./images/beam-logo.svg" className='w-32 md:w-48' alt="logo" />
              </a>
            </Link>
          </div>

          <nav className='hidden lg:block'>
            <ul className='flex justify-between items-end text-pryBlue'>
              
              <li className='px-5 relative cursor-pointer'>
                <Link href='/featuresPage'>
                  <a>
                    <div
                      onClick={ closeDropDowns }
                      className='flex cursor-pointer'>
                      Features
                    </div>
                  </a>
                </Link>
              </li>

              <li className='px-5 cursor-pointer relative'>
                <span
                  onClick={() => {
                    setCompanyDropDown(!companyDropDown)
                    setHelpDropDown(false)
                  }}
                  className='flex'>
                  Company <img className={`${!companyDropDown && 'rotate-180'} ml-2`} src="./images/arrow-down.svg" alt="arrow-down" />
                </span>
                {
                  companyDropDown &&
                  <ul className='absolute top-10 -left-12 bg-lightGray rounded-xl w-[200px] flex flex-col justify-center'>
                    <li onClick={ closeDropDowns } className='flex items-center my-3'>
                      <Link href='/aboutUs'>
                        <a>
                          <div className='flex items-center cursor-pointer'>
                            <img src="./images/about-us-icon.png" className='w-[40px] h-[40px] mx-3' />
                            About Us
                          </div>
                        </a>
                      </Link>
                    </li>
                  </ul>
                }
              </li>

              <li className='px-5 cursor-pointer relative'>
                <span
                  onClick={() => {
                    setHelpDropDown(!helpDropDown)
                    setCompanyDropDown(false)
                  }}
                  className='flex'>
                  Help <img className={`${!helpDropDown && 'rotate-180'} ml-2`} src="./images/arrow-down.svg" alt="arrow-down" />
                </span>
                {
                  helpDropDown &&
                  <ul className='absolute top-10 -left-12 bg-lightGray rounded-xl w-[200px] flex flex-col justify-center z-50'>
                    <li onClick={ closeDropDowns } className='flex items-center my-3'>
                      <Link href='/faqsPage'>
                        <a>
                          <div className='flex items-center cursor-pointer'>
                            <img src="./images/faq-icon.png" className='w-[40px] h-[40px] mx-3' />
                            FAQs
                          </div>
                        </a>
                      </Link>
                    </li>
                      
                    <li onClick={ closeDropDowns } className='flex items-center my-3'>
                      <Link href='/contactUs'>
                        <a>
                          <div className='flex items-center cursor-pointer'>
                            <img src="./images/contact-us-icon.png" className='w-[40px] h-[40px] mx-3' />
                            Contact Us
                          </div>
                        </a>
                      </Link>
                    </li>
                      
                  </ul>
                }
              </li>

            </ul>
          </nav>
        </div>
    

        <div>
          <div className=' hidden lg:block'>
            <GetAppButton hasIcon={false} />
          </div>

          <button onClick={setToggle} className='block lg:hidden -mb-1'>
            <svg class="w-8 h-8 md:w-12 md:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
          </button>
        </div>
      </div>

      {openMobileNav && (
          <div className="fixed bg-white inset-0 w-full h-full z-[100]">
            <div className="fixed inset-0 duration-500 w-screen transition-all  h-screen bg-white ease-in-out lg:hidden shadow-inner">
              <button
                type="button"
                onClick={setToggle}
                className=" absolute right-5 top-5 md:right-10 md:top-10"
              >
                <svg
                  className="w-6 h-6 sm:w-10 md:w-48 md:h-48"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              :
              <div className="flex flex-col">
                <ul className="flex flex-col items-center justify-between p-4 py-20 h-fit gap-y-10">
                  <li>
                    <Link href="/featuresPage">
                      <button
                      type="button"
                      onClick={setToggle}
                        className="text-[#667085] hover:no-underline font-semibold hover:text-[#009FF5] text-xl"
                      >
                        Features
                      </button>
                    </Link>
                </li>
                
                <li className=''>
                  <span
                    onClick={() => {
                      setCompanyDropDown(!companyDropDown)
                      setHelpDropDown(false)
                    }}
                    className={`text-[#667085] hover:no-underline font-semibold hover:text-[#009FF5] text-xl flex justify-center ${companyDropDown && 'pb-5'}`}>
                      Company
                      <img className={`${!companyDropDown && 'rotate-180'} ml-2`} src="./images/arrow-down.svg" alt="arrow-down" />
                  </span>
                {
                  companyDropDown &&
                  <ul className=' bg-lightGray rounded-xl w-[200px] flex flex-col justify-center'>
                    <li onClick={ closeDropDowns } className='flex items-center my-3'>
                      <Link href='/aboutUs'>
                        <a>
                          <div onClick={setToggle} className='flex items-center cursor-pointer'>
                            <img src="./images/about-us-icon.png" className='w-[40px] h-[40px] mx-3' />
                            About Us
                          </div>
                        </a>
                      </Link>
                    </li>
                  </ul>
                }
                </li>
                
                  <li>
                    <span
                  onClick={() => {
                    setHelpDropDown(!helpDropDown)
                    setCompanyDropDown(false)
                  }}
                  className={`text-[#667085] hover:no-underline font-semibold hover:text-[#009FF5] text-xl flex justify-center ${helpDropDown && 'pb-5'}`}>
                    Help
                    <img className={`${!helpDropDown && 'rotate-180'} ml-2`} src="./images/arrow-down.svg" alt="arrow-down" />
                </span>
                {
                  helpDropDown &&
                  <ul className=' bg-lightGray rounded-xl w-[200px] flex flex-col justify-center z-50'>
                    <li onClick={ closeDropDowns } className='flex items-center my-3'>
                      <Link href='/faqsPage'>
                        <a>
                          <div onClick={setToggle} className='flex items-center cursor-pointer'>
                            <img src="./images/faq-icon.png" className='w-[40px] h-[40px] mx-3' />
                            FAQs
                          </div>
                        </a>
                      </Link>
                    </li>
                      
                    <li onClick={ closeDropDowns } className='flex items-center my-3'>
                      <Link href='/contactUs'>
                        <a>
                          <div onClick={setToggle} className='flex items-center cursor-pointer'>
                            <img src="./images/contact-us-icon.png" className='w-[40px] h-[40px] mx-3' />
                            Contact Us
                          </div>
                        </a>
                      </Link>
                    </li>
                      
                  </ul>
                }
                  </li>
                  <li>
                    <GetAppButton hasIcon={false} />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
    </div>
  )
}

export default SecondaryHeader