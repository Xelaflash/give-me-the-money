// styles imports
import { useRef } from 'react';
import styled from 'styled-components';

export default function Hero() {
  const heroWrapper = useRef();

  const handleMouseHover = () => {
    setTimeout(() => {
      heroWrapper.current.style.background = 'url(/images/money-rain.gif)';
    }, 500);
    const sound = document.getElementById('cashier-sound');
    sound.play();
    setTimeout(() => {
      heroWrapper.current.style.background = 'transparent';
    }, 5000);
  };

  return (
    <HeroWrapper ref={heroWrapper}>
      <h1 className='header'>
        Give me the{' '}
        <span className='header-span' onMouseOver={handleMouseHover} onFocus={handleMouseHover}>
          Money
        </span>
      </h1>
      <h2 className='subheader'>
        You want to donate? I <span>collect?</span>
      </h2>
      {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
      <audio id='cashier-sound'>
        <source src='/audio/cha-ching.wav' />
      </audio>
    </HeroWrapper>
  );
}

const HeroWrapper = styled.section`
  width: max-content;
  margin: auto;
  text-align: center;
  padding: 25px;
  border-radius: 20px;
  .header-span {
    cursor: help;
  }
`;
