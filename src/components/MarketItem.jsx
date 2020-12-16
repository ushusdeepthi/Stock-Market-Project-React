import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Text = styled.p``;

export default function MarketItem({ value }) {
  return (
    <>
      <Link to={`/markets/${value}`}>
        <Text>{value} </Text>
      </Link>
    </>
  );
}
