import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledNav = styled.nav`
  a {
    padding: 0.5rem 2rem;
    color: grey;
    font-weight: 400;
    &:hover {
      text-decoration: none;
      color: lightgrey;
    }
  }

  border-bottom: 1px solid #f5f5f5;

  width: 100%;
  display: flex;
  justify-content: center;
`;

const StyledHeading = styled.h1`
  text-align: center;
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  font-size: 2rem;
  font-weight: 200;
  padding: 1rem;
  margin: 0;
`;

export default function Navbar() {
  return (
    <nav>
      <StyledHeading>Stock Market Task</StyledHeading>
      <StyledNav>
        <NavLink to="/">Home</NavLink>

        <NavLink to="/crypto/">Crypto</NavLink>

        <NavLink to="/currencies/">Currencies</NavLink>

        <NavLink to="/indexes/">Indexes</NavLink>

        <NavLink to="/markets/">Markets</NavLink>
      </StyledNav>
    </nav>
  );
}
