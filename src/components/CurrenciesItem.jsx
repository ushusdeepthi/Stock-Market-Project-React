import React from "react";
import { Link } from "react-router-dom";

export default function CurrenciesItem({ value }) {
  return (
    <tr>
      <td>
        <Link to={`/currencies/${value.ticker}`}>{value.name}</Link>
      </td>
      <td>{value.price} SEK</td>
    </tr>
  );
}
