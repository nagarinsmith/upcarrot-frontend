import React, { useState } from "react";
import styled from "styled-components";
import { useScrollPosition } from "../useScrollPosition";
import Navigation from "./Navigation";
import "./style.scss";
import MobileNavigation from "./MobileNavigation";
// import {Navbar} from-'react-boo'

const Container = styled.div`
  transition: all 0.4s ease;
  display: flex;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 9999;
  padding: ${({ isScrolled, isHome }) =>
    isHome ? (isScrolled ? "20px" : "40px") : "20px"};
  background: ${({ isScrolled, isHome }) =>
    isHome ? (isScrolled ? "#1A1A1A" : "transparent") : "#1a1a1a"};
  justify-content: space-between;
  ${({ isScrolled, isHome }) =>
    isHome
      ? isScrolled
        ? "box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23); "
        : ""
      : "box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23); "};
  @media (max-width: 565px) {
    align-items: center;
    justify-content: center;
  }
  min-height: 80px;
`;

const Logo = styled.img`
  position: absolute;
  transition: all 0.4s ease;
  height: ${({ isScrolled, isHome }) =>
    isHome ? (isScrolled ? "50" : "200") : "50"}px;
  ${({ isScrolled, isHome }) =>
    isHome ? (isScrolled ? "" : "margin-top: 40px") : ""};
  @media (max-width: 565px) {
    height: ${({ isScrolled, isHome }) =>
      isHome ? (isScrolled ? "50px" : "100px") : "50px"};
    /* width: 80%; */
  }
`;

const menuItems = [
  {
    label: "About",
    route: "About"
  },
  {
    label: "Speakers",
    route: "Speakers"
  },
  {
    label: "Workshops",
    route: "Workshops"
  },
  {
    label: "Schedule",
    route: "Scheduler"
  },
  {
    label: "Sponsors",
    route: "Sponsors"
  },
  {
    label: "Tickets",
    route: "Tickets",
    isButton: true
  }
];

const Header = ({ isHome, ...props }) => {
  const [isScrolled, setScrolled] = useState(false);
  useScrollPosition(
    ({ currPos }) => {
      if (currPos.y < -50) setScrolled(true);
      else setScrolled(false);
    },
    [isScrolled]
  );

  return (
    <Container isScrolled={isScrolled} isHome={isHome}>
      <Logo
        src={require("@/assets/images/logo.png")}
        isScrolled={isScrolled}
        isHome={isHome}
      />
      <Navigation isScrolled={isScrolled} items={menuItems} isHome={isHome} />
      <MobileNavigation
        isScrolled={isScrolled}
        items={menuItems}
        isHome={isHome}
      />
    </Container>
  );
};

export default Header;
