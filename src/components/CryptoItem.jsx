import React from "react";
import { Link } from "react-router-dom";
export default function CryptoItem({ value }) {
  return (
    <tr>
      <td>
        {" "}
        <Link to={`/crypto/${value.ticker}`}>{value.name}</Link>
      </td>
      <td>{value.price} USD</td>
    </tr>
  );
}
