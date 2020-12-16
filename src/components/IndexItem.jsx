import React from "react";
import { Link } from "react-router-dom";

export default function IndexItem({ value }) {
  return (
    <tr>
      <td>
        <Link to={`/indexes/${value.ticker}`}>{value.name}</Link>
      </td>
      <td>{value.price}</td>
    </tr>
  );
}
