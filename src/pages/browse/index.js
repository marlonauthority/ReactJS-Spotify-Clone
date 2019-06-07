import React from 'react';

import {
  Container, Title, List, Playlist,
} from './styles';

export default function browse() {
  return (
    <Container>
      <Title>Navegar</Title>

      <List>
        <Playlist to="/playlists/1">
          <img
            src="https://s9.limitedrun.com/images/1265295/v600_childish_gambino_awaken_my_love_lp.jpg"
            alt="Playlist"
          />
          <strong>Wake for Love</strong>
          <p>Sua playlist memoravel.</p>
        </Playlist>
      </List>
    </Container>
  );
}
