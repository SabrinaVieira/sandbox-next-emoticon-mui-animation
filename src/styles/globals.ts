import { createGlobalStyle } from 'styled-components';


export default createGlobalStyle`
  :root {
     font-family: 'Montserrat', 'Poppins', 'Roboto', 'Segoe UI' sans-serif 400 1rem;
  }
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    body{
      width: 100%;
      
      text-rendering: optimizeLegibility;
      -webkit-animation-smoothing: antialiased;
    }
    html, body, #root{
      height: 100%;
      overflow-x: hidden;
      font-family: 'Montserrat', 'Poppins', 'Roboto', 'Segoe UI' sans-serif;
    }
  
`;