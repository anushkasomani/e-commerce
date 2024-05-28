import React from 'react';

const Dropdown = ({ title, currency, selectedCurrency, setSelectedCurrency }) => {
  return (
    <>
      <label htmlFor={title}>{title}</label>
      <div>
        <select value={selectedCurrency} onChange={(e) => setSelectedCurrency(e.target.value)}>
          {currency.map((curr) => (
            <option value={curr} key={curr}>
              {curr}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default Dropdown;
