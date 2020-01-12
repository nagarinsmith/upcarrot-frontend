import styled from "styled-components";
import React from "react";
const EventInputComponent = styled.input`
  transition: all 0.2s ease-in;
  background: transparent;
  margin-bottom: 10px;
  width: 100%;
  height: 30px;
  color: white;
  font-size: 14px;
  font-family: "Roboto Mono", monospace;
  border-bottom: 1px solid hsla(229, 6%, 43%, 1);

  &::selection {
    background: white;
  }

  &:focus {
    border-bottom: 1px solid white;
  }
`;

const EventInputContainer = styled.div`
  width: 100%;
  padding: 10px;
  color: hsla(229, 6%, 43%, 1);
  transition: all 0.2s ease-in;
  &:focus-within {
    color: white;
  }
`;

const Label = styled.div`
  /* color: hsla(229, 6%, 43%, 1); */
  letter-spacing: 3px;
`;

const EventInput = React.forwardRef(({ label, ...rest }, ref) => (
  <EventInputContainer>
    <Label>{label}</Label>
    <EventInputComponent {...rest} ref={ref} />
  </EventInputContainer>
));

export default EventInput;
