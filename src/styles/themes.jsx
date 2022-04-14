import { createGlobalStyle } from 'styled-components';

export const globalStyles = {
  borderRadious: '20px',
  font: `'Open Sans', sans-serif`,
  fontSize: '1rem',
};

export const lightTheme = {
  name: 'light',
  primary: '#e9eaf0',
  secondary: '#d1d1d1',
  text: '#333',
  lightShadow: '#f9f9f9',
  darkShadow: '#cfd0d6',
};

export const darkTheme = {
  name: 'dark',
  primary: '#24272c',
  secondary: '#fff',
  text: '#FFF',
  lightShadow: '#292d33',
  darkShadow: '#1f2125',
};

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
`;
