import styled from 'styled-components';
import headerBackground from '../../assets/header-bg.svg';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;

  background: url(${headerBackground}) no-repeat center;
  background-size: cover;

  height: 18.5rem;

  img {
    margin-bottom: 3rem;
  }
`;
