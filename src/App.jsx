import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Home from './components/Home';
import SideNav from './components/Sidenav';
import Moves from './components/moves/Moves';
import { GlobalStyles } from './styles/global';
import { lightTheme, darkTheme } from './styles/themes';
import styled from 'styled-components';

const Wrapper = styled.main`
  display: grid;
  grid-template-columns: minmax(150px, 200px) 5fr;
  grid-template-rows: 5vh 90vh 5vh;
  padding: 8rem 0;
  height: 100vh;
`;

function App() {
  const [theme, setTheme] = React.useState(lightTheme.name);

  return (
    <ThemeProvider theme={theme === lightTheme.name ? lightTheme : darkTheme}>
      <BrowserRouter>
        <Wrapper className='container'>
          <SideNav />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/moves/*' element={<Moves />} />
          </Routes>
        </Wrapper>
      </BrowserRouter>
      <GlobalStyles />
    </ThemeProvider>
  );
}
export default App;
