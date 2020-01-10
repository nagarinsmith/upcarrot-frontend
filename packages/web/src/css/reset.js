import { css } from "styled-components";

const reset = css`
  html {
    box-sizing: border-box;
    /* Nicer looking fonts for OS X and iOS */
    -webkit-font-smoothing: antialiased;
  }

  * {
    user-select: none;
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
    -webkit-tap-highlight-color: transparent;
    box-sizing: inherit;
    font-family: "Roboto Mono", monospace;
  }

  *:before,
  *:after {
    box-sizing: inherit;
  }

  input[type],
  [contenteditable] {
    user-select: text;
  }

  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
    font-size: 1rem;
    font-weight: 400;
  }

  base,
  basefont,
  datalist,
  head,
  meta,
  script,
  style,
  title,
  noembed,
  param,
  template {
    display: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  b {
    font-weight: 400;
  }

  em,
  i {
    font-style: normal;
  }

  a:focus,
  button:focus {
    outline: 0;
  }

  button {
    appearance: none;
    background-color: transparent;
    border: 0;
    padding: 0;
  }

  input,
  fieldset {
    appearance: none;
    border: 0;
    padding: 0;
    margin: 0;
    min-width: 0;
    font-size: 1rem;
    font-family: inherit;
  }

  input::-ms-clear {
    display: none;
  }

  input:focus {
    outline: 0;
  }

  input[type="number"] {
    -moz-appearance: textfield;
  }

  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    appearance: none;
  }

  svg {
    display: block;
  }

  img {
    max-width: 100%;
    display: block;
  }

  select:-moz-focusring {
    color: transparent;
    text-shadow: 0 0 0 #000;
  }

  /* // body {
  /     background: linear-gradient(rgba(0, 0, 0, 1), rgb(142, 14, 0));
  //     background-repeat: no-repeat;
  //     background-attachment: fixed;
  // }//     box-sizing: border-box;
  / */
  .ui.button.cancelNumber {
    background-color: #f8a814;
    color: white;
    text-transform: uppercase;
    border-radius: 0;
  }
  .ui.icon.positive.right.labeled.button.saveButton {
    background-color: #44f804;
    color: white;
    text-transform: uppercase;
    border-radius: 0;
  }
  input {
    background: transparent;
    height: 30px;
    font-size: 14px;
    color: white;
    font-family: "Roboto Mono", monospace;
    border-bottom: 1px solid hsla(229, 6%, 43%, 1);
  }

  .react-datepicker__input-container {
    background: transparent;
    height: 30px;
    font-size: 14px;
    font-family: "Roboto Mono", monospace;
  }

  .react-datepicker__header {
    background: rgb(28, 28, 48) !important;
    color: white !important;
  }
  .react-datepicker__month-container {
    background: rgb(28, 28, 48) !important;
    color: white !important;
    border: 0 transparent !important;
    border-radius: 0 !important;

    box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  }

  .react-datepicker {
    border: 0 transparent !important;
  }

  .react-datepicker__day,
  .react-datepicker__current-month,
  .react-datepicker__day-name {
    color: white !important;
  }

  .react-datepicker__day:hover {
    background: #44f804 !important;
  }
  .react-datepicker__day--today:hover {
    background: #44f804 !important;
  }
  .ui.button {
    color: lightgray;
    background-color: rgb(21, 21, 35);
    font-family: "Roboto", sans-serif;
  }

  .or::before {
    color: rgb(21, 21, 35) !important;
    font-family: "Roboto", sans-serif !important;
  }

  /* // body {
  //     box-sizing: border-box;
  //     background: linear-gradient(rgba(0, 0, 0, 1), rgb(142, 14, 0));
  //     background-repeat: no-repeat;
  //     background-attachment: fixed;
  // } */
`;

export default reset;
