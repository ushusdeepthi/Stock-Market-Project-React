import React, { useState, useEffect } from "react";
import IndexItem from "../components/IndexItem";
import { TableStyled } from "../styles/Styles";

export default function IndexesPage() {
  const [indexList, setIndexList] = useState(null);
  useEffect(() => {
    fetch(
      "https://market-data-collector.firebaseio.com/market-collector/indexes/se.json"
    )
      .then((response) => response.json())
      .then((data) => setIndexList(data));
  }, []);
  return (
    <>
      <h2 className="text-center mt-5">Indexes</h2>
      <TableStyled>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {indexList &&
            Object.entries(indexList).map((item) => {
              const key = item[0];
              const value = item[1];
              return <IndexItem value={value} key={key} />;
            })}
        </tbody>
      </table>
      </TableStyled>
    </>
  );
}
