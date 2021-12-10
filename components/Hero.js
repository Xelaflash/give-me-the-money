// styles imports
import styled from 'styled-components';
import { COLORS, WEIGHTS } from '../styles/constants';

export default function Hero() {
  return (
    <HeroWrapper>
      <h1 className="header">
        Give me the <span>Money</span>
      </h1>
      <h2 className="subheader">
        You want to donate? I <span>collect?</span>
      </h2>
    </HeroWrapper>
  );
}
const HeroWrapper = styled.section`
  width: max-content;
  margin: auto;
  text-align: center;
`;
