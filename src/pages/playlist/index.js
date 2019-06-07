import React from 'react';

import { Container, Header, SongList } from './styles';
import ClockIcon from '../../assets/images/clock.svg';
import PlusIcon from '../../assets/images/plus.svg';

export default function Playlist() {
  return (
    <Container>
      <Header>
        <img
          src="https://s9.limitedrun.com/images/1265295/v600_childish_gambino_awaken_my_love_lp.jpg"
          alt="Playlist"
        />
        <div>
          <span>2019</span>
          <h1>Pagode 100% Violento!</h1>
          <p>13 músicas</p>

          <button>Play</button>
        </div>
      </Header>

      <SongList cellPadding={0} cellSpacing={0}>
        <thead>
          <th />
          <th>Título</th>
          <th>Artista</th>
          <th>Álbum</th>
          <th>
            <img src={ClockIcon} alt="Duração" />
          </th>
        </thead>
        <tbody>
          <tr>
            <td>
              <img src={PlusIcon} alt="Adicionar" />
            </td>
            <td>Redbone</td>
            <td>Childish Gambino</td>
            <td>Awaken, My Love!</td>
            <td>5:27</td>
          </tr>

          <tr>
            <td>
              <img src={PlusIcon} alt="Adicionar" />
            </td>
            <td>Redbone</td>
            <td>Childish Gambino</td>
            <td>Awaken, My Love!</td>
            <td>5:27</td>
          </tr>

          <tr>
            <td>
              <img src={PlusIcon} alt="Adicionar" />
            </td>
            <td>Redbone</td>
            <td>Childish Gambino</td>
            <td>Awaken, My Love!</td>
            <td>5:27</td>
          </tr>
        </tbody>
      </SongList>
    </Container>
  );
}
