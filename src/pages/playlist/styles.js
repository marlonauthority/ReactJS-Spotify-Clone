import styled, { css } from 'styled-components';

import { Spinner } from '../../components/Loading/styles';

export const Container = styled.div`
  margin-top: 30px;

  ${Spinner} {
    height: 48px;
  }

  ${props => props.loading
    && css`
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    `}
`;

export const Header = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 220px;
    height: 220px;
  }
  div {
    margin-left: 20px;

    span {
      font-size: 11px;
      letter-spacing: 1.11px;
      font-weight: 300;
    }
    h1 {
      margin-top: 10px;
      font-size: 48px;
    }
    p {
      margin-top: 0;
      color: #b3b3b3;
      font-size: 11px;
      letter-spacing: 1.11px;
      text-transform: uppercase;
    }
    button {
      background: rgb(40, 40, 40, 40);
      height: 32px;
      border-radius: 16px;
      color: rgb(101, 211, 110);
      padding: 0 45px;
      border: 1px solid rgb(179, 179, 179);
      margin-top: 10px;
      font-size: 12px;
      text-transform: uppercase;
      font-weight: 700;
    }
  }
`;

export const SongList = styled.table`
  width: 100%;
  text-align: left;
  margin-top: 20px;

  thead th {
    font-size: 11px;
    color: #b3b3b3;
    letter-spacing: 1.11px;
    font-weight: normal;
    text-transform: uppercase;
    padding: 5px 10px;

    &:last-child {
      text-align: right;
    }
  }

  tbody td {
    border-top: 1px solid #282828;
    font-size: 13px;
    padding: 0 10px;
    line-height: 40px;
    &:first-child {
      width: 80px;
      text-align: right;
    }
    &:last-child {
      text-align: right;
    }
  }
  tbody tr:hover td {
    background: #282828;
  }
`;
