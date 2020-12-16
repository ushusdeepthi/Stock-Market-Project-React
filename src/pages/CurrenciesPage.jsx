import React, { useState, useEffect } from "react";
import CurrenciesItem from "../components/CurrenciesItem";

export default function CurrenciesPage() {
  const [currencyList, setCurrencyList] = useState(null);

  useEffect(() => {
    fetch(
      "https://market-data-collector.firebaseio.com/market-collector/currencies/sek.json"
    )
      .then((response) => response.json())
      .then((data) => setCurrencyList(data));
  }, []);
  /* console.log(currencyList) */

  return (
    <div>
      <h2>Currencies</h2>
      <table>
        <thead>
          <th>name</th>
          <th>price</th>
        </thead>
        <tbody>
          {currencyList &&
            Object.entries(currencyList).map((item) => {
              const key = item[0];
              const value = item[1];
              console.log(item[1]);
              console.log(value.name);
              return <CurrenciesItem value={value} key={key} />;
            })}
        </tbody>
      </table>
    </div>
  );
}
