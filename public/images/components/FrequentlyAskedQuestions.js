import React, {useState} from 'react'

const FrequentlyAskedQuestions = () => {
    const [isActive, setIsActive] = useState(0)
    
    const active = `text-sm font-extralight xl:pr-20`
    const normal = `hidden`
    const activeBackground = `bg-blue p-3 xl:p-7 cursor-pointer bg-pryBlue my-5`
    const normalBackground = `cursor-pointer p-3 xl:p-7`
    
    const frequentlyAskedQuestions = [
        {
            topic: 'Who keeps the cooperative money?',
            question: 'We do not have anything to do with your cooperative money, we only help with better cooperative management.',
        },
    
        {
            topic: 'What do i need to complete signup?',
            question: 'We provide answers to some questions that were frequently asked. Feel free to go through the answers provided.',
        },
    
        {
            topic: 'How do i get started on a budget?',
            question: 'We provide answers to some questions that were frequently asked. Feel free to go through the answers provided.',
        },
    
    ]

  return (
      <div className='flex flex-col md:flex-row bg-pryBlue md:justify-center text-white py-14 sm:px-28 md:px-10 3xl:mx-auto 3xl:container'>
          <div className='flex-1 px-7'>
              <h1 className='text-lg xl:text-3xl font-bold py-3'>Frequently Asked Questions</h1>
              <p className='py-3 text-sm xl:text-lg font-light'>We provide answers to some questions that were frequently asked. Feel free to go through the answers provided.</p>
              <div className='text-sm font-extralight'>
                <span>Haven't got your answer?</span>
                <span className='text-lightBlue'>Contact our support now</span>
              </div>
          </div>

          <div className='flex-1 px-4 xl:pr-32 mb-10'>
              {
                  frequentlyAskedQuestions.map((question, index) => (
                        <div className={index === isActive ? activeBackground : normalBackground} onClick={() => index === isActive ? setIsActive(-1) : setIsActive(index)} key={index}>
                          <div className='flex items-center justify-between pb-5'>
                            <h1 className={`xl:text-lg text-sm font-bold ${index === isActive ? '': 'px-3'}`}>{question.topic}</h1>
                            <img className={index === isActive ? 'rotate-180' : ''} src="./images/drop-down-arrow.png" />  
                          </div>
                          <p className={index === isActive ? active : normal}>{question.question}</p>
                        </div>
                  ))
              }
          </div>
      </div>
  )
}

export default FrequentlyAskedQuestions