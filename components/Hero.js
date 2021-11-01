// styles imports
import styled from 'styled-components';
import { COLORS, WEIGHTS } from '../styles/constants';

export default function Hero() {
  return (
    <HeroWrapper>
      <h1>
        Give me the <span>Money</span>
      </h1>
      <h2>
        You want to donate? I <span>collect?</span>
      </h2>
    </HeroWrapper>
  );
}
const HeroWrapper = styled.section`
  width: max-content;
  margin: auto;
  text-align: center;

  h1 {
    padding-top: 50px;
    font-size: 3.5rem;
    font-weight: ${WEIGHTS.bold};
    margin: 0;
  }

  h1 span,
  h2 span {
    color: ${COLORS.primary};
    font-weight: ${WEIGHTS.bold};
    text-transform: uppercase;
  }

  h2 {
    font-size: 1.5rem;
    margin: 0;
    margin-bottom: 10px;
    font-style: italic;
  }
`;
