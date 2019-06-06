import React from 'react';

import { Container, Search, User } from './styles';

export default function Header() {
  return (
    <Container>
      <Search>
        <input placeholder="Pesquisar" />
      </Search>
      <User>
        <img src="https://avatars0.githubusercontent.com/u/15050029?v=4" alt="User avatar" />
        Marlon Authority
      </User>
    </Container>
  );
}
