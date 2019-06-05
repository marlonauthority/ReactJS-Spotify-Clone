import React from 'react';
import './config/ReactotronConfig';
import GlobalStyle from './styles/global';
import Routes from './routes';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes />
      <Sidebar />
    </>
  );
}

export default App;
