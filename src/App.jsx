import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Home from './components/Home';
import Moves from './components/moves/Moves';
import { GlobalStyles } from './styles/global';
import { lightTheme, darkTheme } from './styles/themes';
import styled from 'styled-components';
import SideNav from './components/Sidenav';

const Wrapper = styled.main`
  display: grid;
  grid-template-columns: 1fr 5fr;
  column-gap: 2rem;
`;

function App() {
  const [theme, setTheme] = React.useState(darkTheme.name);

  const toggleTheme = () => {
    theme === lightTheme.name
      ? setTheme(darkTheme.name)
      : setTheme(lightTheme.name);
  };

  return (
    <Wrapper className='container'>
      <BrowserRouter>
        <SideNav />
        <ThemeProvider
          theme={theme === lightTheme.name ? lightTheme : darkTheme}
        >
          <GlobalStyles />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/moves' element={<Moves />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </Wrapper>
  );
}
export default App;
