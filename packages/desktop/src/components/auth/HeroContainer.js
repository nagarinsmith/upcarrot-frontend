import styled from "styled-components";
import logo from "src/assets/images/heroBackground.jpg"; // Tell Webpack this JS file uses this image

export const HeroContainer = styled.div`
  background: linear-gradient(rgb(13, 13, 23, 0.8), rgb(13, 13, 23, 1)), url("${logo}");
  background-position: center;
  background-size: cover;
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;
