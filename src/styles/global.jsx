import { createGlobalStyle } from 'styled-components';
import { globalStyles } from './themes';

export const GlobalStyles = createGlobalStyle`
    /* Reset */
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

  .card {
    border-radius: ${globalStyles.borderRadious};
    box-shadow: 5px 5px 13px ${(props) => props.theme.darkShadow},
                -5px -5px 13px ${(props) => props.theme.lightShadow};
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      background: linear-gradient(145deg, #d2d3d8, #f9faff);
    }

    &.active {
      box-shadow: inset 5px 5px 13px ${(props) => props.theme.darkShadow};
      inset: -5px -5px 13px ${(props) => props.theme.lightShadow};
      grid-column: span 2;
      grid-row: span 2;
    }
  }

  .container {
    max-width: 65vw;
    margin: 0 auto;
  }
`;
