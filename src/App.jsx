import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyles, lightTheme, darkTheme } from './styles/themes';
import SideNav from './components/Sidenav';
import PokeCards from './components/PokeCards';

const Wrapper = styled.main`
  display: grid;
  grid-template-columns: minmax(190px, 1fr) 5fr;
  column-gap: 4rem;
  max-width: 70vw;
  margin: 0 auto;
`;

function App() {
  const [theme, setTheme] = useState(lightTheme.name);
  const toggleTheme = () => {
    theme === lightTheme.name
      ? setTheme(darkTheme.name)
      : setTheme(lightTheme.name);
  };

  return (
    <ThemeProvider theme={theme === lightTheme.name ? lightTheme : darkTheme}>
      <GlobalStyles />
      <button onClick={toggleTheme}>{theme}</button>
      <Wrapper>
        <SideNav />
        <PokeCards />
      </Wrapper>
    </ThemeProvider>
  );
}
export default App;
