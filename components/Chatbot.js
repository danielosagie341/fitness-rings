import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/Home.module.css'


const Chatbot = () => {
   const [error, setError] = useState(null)
  const [value, setValue] = useState("")
  const [loading, setLoading] = useState(false)

  const Timeout = 120
  const [chatHistory, setChatHistory] = useState([])

  let data;
  //to clear the input field
  const clear = () => {
    setError(null)
    setValue('')
  }



  //options to select randomly from 
  const selectRandomOPtions = [
    "I'm 25 and just starting my career. How should I be investing my money?",
    "What's the best way to save for a down payment on a house?",
    "My credit score is low. How can I improve it?",
    "I'm considering investing in the stock market. How do I get started?",
    "What are the best ways to reduce my taxes?",
    "How can I create a budget that works for me?",
    "My emergency fund is depleted. How do I rebuild it?",
    "Should I rent or buy a home?",
    "What are some ways to prepare for retirement?",
    "I'm worried about student loan debt. What can I do?",
  ]


  const selectRandomly = () => {
    const randomValue = selectRandomOPtions[Math.floor(Math.random() * selectRandomOPtions.length)]
    setValue(randomValue)
  }

  // to fetch the data from the gemini server
  const fetchData = async () => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        history: chatHistory,
        message: value
      })
    }

    const response = await fetch("http://localhost:5000/gemini/send-response", options)
    const result = await response.text()
    return result

  }



  const fetchDataAndHandleTimeout = async () => {
    try {
      const result = await Promise.race([
        fetchData(),
        new Promise((resolve) => setTimeout(resolve, Timeout * 1000))
      ]);
      return result;
    } catch (error) {
      setError("Timeout, please check your internet connection");
      setLoading(false);
    }
  }





  // use to send our query to the server`
  const getResponse = async () => {
    if (!value) {
      setError(" Error: please enter a value")
      return
    }

    try {



      //loading while awaiting response 
      setLoading(true)
      // its use to recieve messages from the server
      data = await fetchDataAndHandleTimeout();


      // Format bot response if needed (adjust this according to your response format)
      const formattedRes = data.split('\\n').map((part, index) => <p key={index}>{part}</p>);

      setChatHistory(oldChatHsitory =>
        [...oldChatHsitory, {
          role: "user",
          parts: value
        },
        {
          role: "Geminoid",
          parts: formattedRes
        }]
      )

      setValue('')
      setLoading(false)
    } catch (error) {
      setLoading(false)
      setError("something went wrong")

    }
  }



  const listenEnter = (e) => {
    if (e.key === "Enter") {
      getResponse()
    }
  }

  // Separate the messages by role
  const userMessages = chatHistory.filter(item => item.role === 'user');
  const geminoidMessages = chatHistory.filter(item => item.role === 'Geminoid');

  // Calculate the minimum length to avoid index out of bounds
  const minLength = Math.min(userMessages.length, geminoidMessages.length);

  // Create an array to hold the interleaved messages
  const interleavedMessages = [];

  // Interleave the messages starting from the last pair
  for (let i = minLength - 1; i >= 0; i--) {
    interleavedMessages.push(userMessages[i], geminoidMessages[i]);
  }

  // Add any remaining messages if one array is longer than the other
  if (userMessages.length > minLength) {
    interleavedMessages.push(...userMessages.slice(0, userMessages.length - minLength).reverse());
  }
  if (geminoidMessages.length > minLength) {
    interleavedMessages.push(...geminoidMessages.slice(0, geminoidMessages.length - minLength).reverse());
  }


  return (
    <div className="app">
      <h1 className='app-title'>PEACE LLM CHATBOT</h1>
      <section className='app'>
        <p>
          what do you want to know?
          <button className='suprise-me' onClick={selectRandomly} disabled={!chatHistory || loading}> Get a random crypto fact👍 </button>
        </p>



        <div className='search-container'>
          <input value={value} placeholder='Need some financial advice?' onKeyDown={listenEnter} onChange={e => setValue(e.target.value)}></input>
          {!error && <button className='search-button' onClick={getResponse}>Search</button>}
          {error && <button className='search-button' onClick={clear}>clear</button>
          }

        </div>
        <p>{error}</p>

        

        <div className='search-result'>
          
           {loading && (
            <div className='Answer'>
              <div class="spinner"></div>

              </div>
          
          )}
          
          {interleavedMessages.map((chatItem, index) => (
        <div className='Answer' key={index}>
          <p>
            {chatItem.role} : {Array.isArray(chatItem.parts) 
              ? chatItem.parts.map((part, idx) => (
                  <span key={idx}>{typeof part === 'object' ? part : part.toString()}</span>
                ))
              : chatItem.parts}
          </p>
        </div>
      ))}

         

        </div>
      </section>

    </div>
  );
}

export default Chatbot;
