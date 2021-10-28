import styled from 'styled-components';
import { COLORS, WEIGHTS } from '../styles/constants';

export default function Layout({ children }) {
  return (
    <LayoutStyles>
      {children}
      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#26785E"
          fillOpacity="0.75"
          d="M0,96L40,101.3C80,107,160,117,240,138.7C320,160,400,192,480,213.3C560,235,640,245,720,218.7C800,192,880,128,960,106.7C1040,85,1120,107,1200,112C1280,117,1360,107,1400,101.3L1440,96L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
        />
      </svg> */}
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
