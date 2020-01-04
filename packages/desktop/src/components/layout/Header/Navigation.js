import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Button from "../Button/Button";

const NavigationContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 50px;
  flex: 1;
  /* min-width: 100%; */
  font-family: "Roboto", sans-serif;
  @media (max-width: 565px) {
    justify-content: flex-start;
  }
  @media (max-width: 772px) {
    display: none;
  }
`;

const NavigationItemContainer = styled.div`
  transition: all 0.4s ease;
  color: white;
  padding: 0 10px;
  font-size: 18px;
  ${props => (props.isScrolled ? "font-weight: 700" : "")};
  &:hover {
    color: red;
    font-size: 20px;
    /* font-weight: 700; */
  }
  @media (max-width: 772px) {
    display: none;
  }
`;

const NavigationItem = ({ label, isFocused, isButton }) => {
  const Component = isButton ? Button : NavigationItemContainer;
  return <Component inverted>{label}</Component>;
};

const Navigation = ({ isScrolled, items, location }) => (
  <NavigationContainer isScrolled={isScrolled}>
    {items.map(item => (
      <NavigationItem
        isScrolled={isScrolled}
        key={item.label}
        {...item}
        // isFocused={location.pathname.includes(item.route)}
      />
    ))}
  </NavigationContainer>
);

Navigation.propTypes = {
  isScrolled: PropTypes.bool,
  items: PropTypes.array
};

export default Navigation;
