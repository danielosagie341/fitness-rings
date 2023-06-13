import React, { useEffect, useState } from 'react'

const Chatbot = () => {
  const [userInput, setUserInput] = useState('');
    const [aiReply, setAiReply] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    
  
    const handleUserInput = async (e) => {
    e.preventDefault();

      try {
        setIsLoading(true);
        const response = await fetch('./api/root', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content: userInput }),
      });

        const data = await response.json();
        console.log(response)
          

      // Update the chatbot response in the state
      setAiReply(data)
    } catch (error) {
      console.error(error);
    }finally {
      setIsLoading(false);
      setUserInput('')
    }
  };


    return (
        <div className='min-h-[90vh] p-6'>
            <h1 className='font-bold text-center py-3 text-xl'>Ask any health related question</h1>
            <form className='flex flex-col justify-center items-center w-full' onSubmit={handleUserInput}>
                <textarea
                    type="text"
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    className='shadow-progressBar p-2 w-full'
                    placeholder='Ask a question'
                    rows={4}
                />
                <button type="submit" className='bg-fuchsia-600 my-3 py-2 px-4 font-bold text-white rounded-xl'>Send</button>
            </form>
            {
                 isLoading && 
                <p className='text-center py-3 text-red-500'>please wait a minute...</p>
            }

            <div className='border-black border-2 rounded-2xl p-3 h-[300px] overflow-scroll no-scrollbar'>{aiReply}</div>
        </div>
    )
}

export default Chatbot