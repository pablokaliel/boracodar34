import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
   --colorproduto-purple-light: #a881e6;
   --colorproduto-purple: #744fac;
   --colorproduto-purple-dark: #52347f;
   --colorbase-gray-600: #0c0c0d;
   --colorbase-gray-500: #111011;
   --colorbase-gray-400: #171719;
   --colorbase-gray-300: #242428;
   --colorbase-gray-200: #afabb5;
   --colorbase-gray-100: #faf8fd;
   --colorfeedback-success: #2e713d;
   --colorfeedback-success-light: #4e995e;
   --colorapoio-pink: #da5bbe;
   --colorapoio-orange: #e07b67;
   --colorapoio-yellow: #bb9f3a;
   --colorapoio-green: #8cad50;
   --colorapoio-blue: #7a93ca;
   --colorapoio-pink-dark: #251622;
   --colorapoio-orange-dark: #261a17;
   --colorapoio-yellow-dark: #211e12;
   --colorapoio-green-dark: #1c2015;
   --colorapoio-blue-dark: #1a1d23;
  }

  body{
    width:100%;
    height:100%;
    background-color:var(--colorbase-gray-500);

    color: var(--colorbase-gray-100);
  }

  #root,
  html,
  body {
    width: 100%;
    height: 100vh;
    font-family: 'Inter', sans-serif;
  }

  button {
    cursor:pointer;
  }
`;