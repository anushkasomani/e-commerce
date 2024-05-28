
import React, { useState, useEffect } from 'react';
import Dropdown from './Dropdown';

const CurrencyConverter = () => {
  const [currency, setCurrency] = useState([]);
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('INR');
  const [convertedAmount, setConvertedAmount] = useState(null);

  const URL = 'https://api.frankfurter.app/currencies';

  const fetchCurrency = async () => {
    const res = await fetch(URL);
    const data = await res.json();
    setCurrency(Object.keys(data));
  };

  useEffect(() => {
    fetchCurrency();
  }, []);

  const currencyConvert = async () => {
    const res = await fetch(`https://api.frankfurter.app/latest?amount=${amount}&from=${fromCurrency}&to=${toCurrency}`);
    const data = await res.json();
    setConvertedAmount(data.rates[toCurrency]);
  };

  return (
    <div className="converter">
      <h2>Currency Converter</h2>
      <div className="input">
        <label htmlFor="amount">Amount:</label>
        <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)}></input>
      </div>
      <div className="dropdowns">
        <Dropdown title="From:" currency={currency} selectedCurrency={fromCurrency} setSelectedCurrency={setFromCurrency} />
        <Dropdown title="To:" currency={currency} selectedCurrency={toCurrency} setSelectedCurrency={setToCurrency} />
      </div>
      <button onClick={currencyConvert}>Convert</button>
      <div>{amount} {fromCurrency} is approximately {convertedAmount} {toCurrency}</div>
    </div>
  );
};

export default CurrencyConverter;
