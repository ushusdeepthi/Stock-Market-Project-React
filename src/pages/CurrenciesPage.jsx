import React, { useState, useEffect } from "react";
import CurrenciesItem from "../components/CurrenciesItem";

export default function CurrenciesPage() {
  const [currencyList, setCurrencyList] = useState(null);
  const [isSorted, setIsSorted] = useState(false);

  useEffect(() => {
    fetch(
      "https://market-data-collector.firebaseio.com/market-collector/currencies/sek.json"
    )
      .then((response) => response.json())
      .then((data) => setCurrencyList(data));
  }, []);

  function compare(a, b) {
    if (!isSorted) {
      return a[1].price - b[1].price;
    } else {
      return b[1].price - a[1].price;
    }
  }

  function handleSortClick() {
    setIsSorted(!isSorted);
    const array = Object.entries(currencyList).sort(compare);
    setCurrencyList(Object.fromEntries(array));
  }

  return (
    <div>
      <h2>Currencies</h2>
      <table>
        <thead>
          <tr>
            <th>name</th>
            <th onClick={handleSortClick}>price</th>
          </tr>
        </thead>
        <tbody>
          {currencyList &&
            Object.entries(currencyList).map((item) => {
              const key = item[0];
              const value = item[1];
              return <CurrenciesItem value={value} key={key} />;
            })}
        </tbody>
      </table>
    </div>
  );
}
