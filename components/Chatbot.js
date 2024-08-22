import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Chatbot = () => {
  const [error, setError] = useState(null);
  const [value, setValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [chatHistory, setChatHistory] = useState([]);

  const Timeout = 120;

  // Function to clear the input field
  const clear = () => {
    setError(null);
    setValue('');
  };

  // Function to fetch data from the server
  const fetchData = async () => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        history: chatHistory,
        message: value,
      }),
    };

    const response = await fetch('https://gemini-server-main-fitness-rings.onrender.com/gemini/send-response', options);
    const result = await response.text();
    return result;
  };

  // Function to handle fetch data with a timeout
  const fetchDataAndHandleTimeout = async () => {
    try {
      const result = await Promise.race([
        fetchData(),
        new Promise((resolve) => setTimeout(resolve, Timeout * 1000)),
      ]);
      return result;
    } catch (error) {
      setError('Timeout, please check your internet connection');
      setLoading(false);
    }
  };

  // Function to send the query and get response
  const getResponse = async () => {
    if (!value) {
      setError('Error: please enter a value');
      return;
    }

    try {
      setLoading(true);
      const data = await fetchDataAndHandleTimeout();
      const formattedRes = data.split('\\n').map((part, index) => <p key={index}>{part}</p>);

      setChatHistory([
        {
          role: 'user',
          parts: value,
        },
        {
          role: 'Geminoid',
          parts: formattedRes,
        },
      ]);

      setValue('');
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError('Something went wrong');
    }
  };

  // Function to listen for Enter key press
  const listenEnter = (e) => {
    if (e.key === 'Enter') {
      getResponse();
    }
  };

  // Get the latest message from the chat history
  const latestMessage = chatHistory[chatHistory.length - 1];

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', maxWidth: '600px', margin: 'auto' }}>
      <h1 style={{ textAlign: 'center' }}>SMART HEALTH AI</h1>
      <section style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <div style={{ display: 'flex', gap: '10px' }}>
          <input
            value={value}
            placeholder="Need some health advice?"
            onKeyDown={listenEnter}
            onChange={(e) => setValue(e.target.value)}
            style={{ flex: 1, padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
          />
          <button
            onClick={getResponse}
            style={{
              padding: '10px 20px',
              backgroundColor: '#007bff',
              color: '#fff',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '16px',
            }}
            disabled={loading}
          >
            Search
          </button>
          {error && (
            <button
              onClick={clear}
              style={{
                padding: '10px 20px',
                backgroundColor: '#dc3545',
                color: '#fff',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                fontSize: '16px',
              }}
            >
              Clear
            </button>
          )}
        </div>
        <p style={{ color: 'red' }}>{error}</p>
        <div style={{ padding: '10px', border: '1px solid #ddd', borderRadius: '5px', backgroundColor: '#f9f9f9' }}>
          {loading && (
            <div style={{ textAlign: 'center' }}>
              <div className="spinner" style={{ border: '4px solid #f3f3f3', borderRadius: '50%', borderTop: '4px solid #007bff', width: '30px', height: '30px', animation: 'spin 2s linear infinite' }}></div>
            </div>
          )}
          {latestMessage && (
            <div>
              <p>
                <strong>{latestMessage.role}:</strong> {latestMessage.parts}
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Chatbot;
