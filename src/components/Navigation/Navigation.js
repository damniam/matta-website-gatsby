import React from "react";
import styled from "styled-components";
//obsluga linków
import { Link } from "gatsby";

const NavigationWrapper = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  font-family: "Montserrat";
  position: absolute;
  top: 38px;
  left: 44px;

  a {
    text-decoration: none;
    color: black;
  }
`;

const Logo = styled.span`
  font-weight: 700;
  font-size: 1.2em;
  margin-right: 10px;
  color: black;
`;
const NavigationList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
`;

const NavigationItem = styled.li`
  margin-left: 32px;
  line-height: 26px;
  letter-spacing: -3%;
  font-weight: 600;
`;

const Navigation = () => (
  <NavigationWrapper>
    <Logo>
      <Link to="/">MATTA</Link>
    </Logo>
    <NavigationList>
      <NavigationItem>
        <Link to="/articles">articles</Link>
      </NavigationItem>
      <NavigationItem>
        <Link to="/about">about</Link>
      </NavigationItem>
      <NavigationItem>
        <Link to="/gallery">gallery</Link>
      </NavigationItem>
      <NavigationItem>
        <Link to="/contact">contact</Link>
      </NavigationItem>
    </NavigationList>
  </NavigationWrapper>
);

export default Navigation;
