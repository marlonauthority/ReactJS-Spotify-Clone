import React from 'react';
import './config/ReactotronConfig';
import GlobalStyle from './styles/global';
// import Routes from './routes';
import Sidebar from './components/Sidebar';
import Player from './components/Player';
import Header from './components/Header';
import { Wrapper, Container, Content } from './styles/components';

function App() {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Container>
          <Sidebar />
          <Content>
            <Header />
          </Content>
        </Container>
        <Player />
      </Wrapper>
    </>
  );
}

export default App;
