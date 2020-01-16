import styled from "styled-components";
import logo from "src/assets/images/lost.png"; // Tell Webpack this JS file uses this image

export const NotFoundContainer = styled.div`
  background: linear-gradient(rgb(13, 13, 23, 0.5), rgb(13, 13, 23, 0.4)), url("${logo}");
  background-size: cover;
  background-position: center;
  background-repeat:  no-repeat;
  background-attachment: fixed;
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

