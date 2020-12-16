import React, { useState, useEffect } from "react";
import MarketItem from "../components/MarketItem";
import MarketDetailItem from "../components/MarketDetailItem";

export default function MarketsDetailPage(props) {
  const [marketsData, setMarketsData] = useState(null);
  useEffect(() => {
    const id = props.match.params.id;
    fetch(
      `https://market-data-collector.firebaseio.com/market-collector/markets/${id}.json`
    )
      .then((response) => response.json())
      .then((data) => setMarketsData(data));
  }, []);

  return (
    <>
      <h4>{props.match.params.id}</h4>
      <table>
        <thead>
          <tr>
            <th>name</th>
            <th>price</th>
          </tr>
        </thead>
        <tbody>
          {marketsData &&
            Object.entries(marketsData).map((item) => {
              const key = item[0];
              const value = item[1];
              return <MarketDetailItem value={value} key={key} />;
            })}
        </tbody>
      </table>
    </>
  );
}
