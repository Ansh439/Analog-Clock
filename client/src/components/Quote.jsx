import React, { useEffect,useState } from 'react'

export default function Quote() {

    const [quote, setQuote] = useState('')
    
   useEffect(() => {
        const fetchQuote = async () => {
            try {
                const response = await fetch('https://api.api-ninjas.com/v1/quotes?category=happiness', {
                    method: 'GET',
                    headers: {
                    'X-Api-Key': import.meta.env.VITE_XAPI_KEY
                    },
                });
                const data = await response.json();
                setQuote(data[0].quote)
            } 
            catch (error) {
                console.error('Error fetching quote:', error);
            }
        }
        
        fetchQuote(); 

        const interval = setInterval(() => {        
            fetchQuote(); 
        }, 5000);

   }, [])

  return (
        <div className='flex justify-center items-center inter-f5'>
            <h1>{quote ? quote : "Loading Quotes..."}</h1>
        </div>
    )
}
