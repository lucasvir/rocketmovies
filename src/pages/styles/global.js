import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    font-size: 62.5%;
    }

  * {
    margin: 0;
    padding: 0;
    
    box-sizing: border-box;
  }

  body {
    color: ${({ theme }) => theme.COLORS.WHITE};
    
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    -webkit-font-smoothing: antialiased;
  }
  
  body, button, input, textarea {
    font-family: 'Roboto Slab', serif;
    font-size: 1.6rem;
    outline: none;
  } 

  a {
    text-decoration: none;
  }

  a, button {
    cursor: pointer;
    transition: filter 0.2;
  }

  a:hover, button:hover {
    filter: brightness(0.9);
  }
`;
