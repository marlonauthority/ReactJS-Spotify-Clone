import React from 'react';
import { Container, NewPlaylist, Nav } from './styles';

import AddPlayListIcon from '../../assets/images/add_playlist.svg';

export default function Sidebar() {
  return (
    <Container>
      <div>
        <Nav main>
          <li>
            <a href="#" alt="">
              Navegar
            </a>
          </li>
          <li>
            <a href="#" alt="">
              Radio
            </a>
          </li>
        </Nav>
        <Nav>
          <li>
            <span>Sua Biblioteca</span>
          </li>
          <li>
            <a href="#" alt="">
              Seu Daily Mix
            </a>
          </li>
          <li>
            <a href="#" alt="">
              Tocados recentemente
            </a>
          </li>
          <li>
            <a href="#" alt="">
              Músicas
            </a>
          </li>
          <li>
            <a href="#" alt="">
              Álbums
            </a>
          </li>
          <li>
            <a href="#" alt="">
              Artistas
            </a>
          </li>
          <li>
            <a href="#" alt="">
              Estações
            </a>
          </li>
          <li>
            <a href="#" alt="">
              Arquivos Locais
            </a>
          </li>
          <li>
            <a href="#" alt="">
              Podcasts
            </a>
          </li>
        </Nav>
        <Nav>
          <li>
            <span>Playlists</span>
          </li>
          <li>
            <a href="#" alt="">
              Marlon Authority
            </a>
          </li>
          <li>
            <a href="#" alt="">
              Pagode 100% Violento
            </a>
          </li>
        </Nav>
      </div>
      <NewPlaylist>
        <img src={AddPlayListIcon} alt="Adicionar Playlist" />
        Nova Playlist
      </NewPlaylist>
    </Container>
  );
}
