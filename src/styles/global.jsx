import { createGlobalStyle } from 'styled-components';
import { globalStyles } from './themes';

export const GlobalStyles = createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

  ul {
    list-style: none;
  }
  
  img {
  display: block;
  max-width: 100%;
  }

  body {
    background: ${(props) => props.theme.primary};
    color:  ${(props) => props.theme.text};
    font-family: ${globalStyles.font};
    font-size: ${globalStyles.fontSize};
    letter-spacing: .25px;
  }

  .container {
    max-width: 65vw;
    margin: 0 auto;
  }
  `;
