import React, { useState } from 'react';
import axios from 'axios';

const Chatbot = () => {
  const [userInput, setUserInput] = useState('');
  const [aiReply, setAiReply] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const apiKey = "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";

  const handleUserInput = async (e) => {
    e.preventDefault();

    const systemMessage = { role: "system", content: "" };
    const userMessage = { role: "user", content: userInput };
    const apiMessages = [systemMessage, userMessage];

    const apiRequestBody = {
      model: "gpt-3.5-turbo",
      messages: apiMessages,
    };

    try {
      setIsLoading(true);

      const response = await axios.post('https://api.openai.com/v1/chat/completions', apiRequestBody, {
        headers: {
          Authorization: `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
      });

    
//tezer
        const data = response.data;

      if (data.choices && data.choices.length > 0) {
        const assistantMessage = data.choices[0].message.content;
        setAiReply(assistantMessage);
      } else {
        console.log('Invalid API response:', data);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
      setUserInput('');
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
      {isLoading && (
        <p className='text-center py-3 text-red-500'>Please wait a minute...</p>
      )}
      <div className='border-black border-2 rounded-2xl p-3 h-[300px] overflow-scroll no-scrollbar'>{aiReply}</div>
    </div>
  );
};

export default Chatbot;
