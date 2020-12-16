import React, { useState, useEffect } from "react";
import CryptoItem from "../components/CryptoItem";
import { TableStyled } from "../styles/Styles";

export default function CryptoPage() {
  //Här Fetchar vi och använder useState och useEffect
  const [cryptoList, setCryptoList] = useState(null);

  useEffect(() => {
    fetch(
      "https://market-data-collector.firebaseio.com/market-collector/crypto/usd.json"
    )
      .then((response) => response.json())
      .then((data) => setCryptoList(data));
  }, []);
  console.log(cryptoList);

  return (
    <div>
      <h2 className="text-center mt-5">Crypto</h2>
      <TableStyled>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {cryptoList &&
            Object.entries(cryptoList).map((item) => {
              const key = item[0];
              const value = item[1];

              return <CryptoItem value={value} key={key} />;
            })}
        </tbody>
      </table>
      </TableStyled>
    </div>
  );
}
