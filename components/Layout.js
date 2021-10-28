import styled from 'styled-components';
import Nav from './Nav';
// import { COLORS, WEIGHTS } from '../styles/constants';

export default function Layout({ children }) {
  return (
    <LayoutStyles>
      <Nav />
      {children}
    </LayoutStyles>
  );
}

const LayoutStyles = styled.div`
  min-height: 100vh;
  /* aspect-ratio: 900/600; */
  width: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url('/images/layered-waves.svg');
`;
