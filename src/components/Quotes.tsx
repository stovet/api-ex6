import React, { useEffect, useState } from 'react';
import Quote from '../models/quote';
import {fetchQuotes} from '../services/QuotesApiService'

function Quotes(){
    const [quotes, setQuotes] = useState<Quote[]>([]);

    useEffect( ()=> {
        fetchQuotes().then(
            data => setQuotes(data)
        )
    }, []);

    return (
        <ul>  
            {quotes.map((quote, i) => 
                <li key={i}>{quote.text} - {quote.author}</li>
            )}
        </ul>
    );
}

export default Quotes;