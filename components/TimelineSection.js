import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
// styles imports
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';
import { ShoppingCart, CreditCard, CheckCircle } from 'react-feather';
import { COLORS } from '../styles/constants';

// code coming from pkg https://github.com/akashuba/react-timeline-animation
import TimelineObserver from './TimelineObserver';
//  Libs
import { fireConfetti } from './confetti';

const Timeline = ({ setObserver, callback }) => {
  const [message1, setMessage1] = useState(false);
  const [message2, setMessage2] = useState(false);
  const [message3, setMessage3] = useState(false);

  const timeline1 = useRef(null);
  const timeline2 = useRef(null);
  const timeline3 = useRef(null);
  const circle1 = useRef(null);
  const circle2 = useRef(null);
  const circle3 = useRef(null);

  const messageCallback = () => {
    setMessage1(true);
  };

  const messageCallback2 = () => {
    setMessage2(true);
  };

  const messageCallback3 = () => {
    setMessage3(true);
    fireConfetti();
    callback();
  };

  useEffect(() => {
    setObserver(timeline1.current);
    setObserver(timeline2.current);
    setObserver(timeline3.current);
    setObserver(circle1.current, messageCallback);
    setObserver(circle2.current, messageCallback2);
    setObserver(circle3.current, messageCallback3);
  }, []);

  return (
    <div className='wrapper'>
      <div id='timeline1' ref={timeline1} className='timeline' />
      <div className='circleWrapper'>
        <div id='circle1' ref={circle1} className='circle'>
          1
        </div>
        <div className='message' id='message1'>
          {message1 && (
            <div className='fade-in-text'>
              <ShoppingCart color={`${COLORS.primary}`} size={38} />
              <p>Choose plan & Add to cart</p>
            </div>
          )}
        </div>
      </div>
      <div id='timeline2' ref={timeline2} className='timeline' />
      <div className='circleWrapper'>
        <div id='circle2' ref={circle2} className='circle'>
          2
        </div>
        <div className='message' id='message2'>
          {message2 && (
            <div className='fade-in-text'>
              <CreditCard color={`${COLORS.primary}`} size={38} />
              <p>Checkout & Pay</p>
            </div>
          )}
        </div>
      </div>
      <div id='timeline3' ref={timeline3} className='timeline' />
      <div className='circleWrapper'>
        <div id='circle3' ref={circle3} className='circle'>
          3
        </div>
        <div className='message' id='message3'>
          {message3 && (
            <div className='fade-in-text'>
              <CheckCircle color={`${COLORS.primary}`} size={38} />
              <p>Congratulations!!</p>
              <p>You just Gave the Money</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default function TimelineSection() {
  const [isVisible, setVisibility] = useState(false);

  const onCallback = () => {
    setVisibility(true);
  };

  // fix for CSSTransition error => findDomnode deprecated
  const ref1 = React.useRef(null);

  return (
    <TimelineSectionStyles>
      <svg
        preserveAspectRatio='none'
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 440 52'
        className='wrappercurves'
      >
        <path
          d='M220 1C133.228-1.86 0 33 0 33v18.5h439.5V12s-24.077 14.898-41 21C331.878 57.02 290.781 3.333 220 1z'
          fill='#26785f'
        />
      </svg>
      <TitleWrapper>
        <h2 className='header'>
          How it <span>works</span>
        </h2>
        <p className='subheader'>
          As easy as <span>1, 2, 3</span>
        </p>
      </TitleWrapper>
      <TimelineObserver
        initialColor={COLORS.white}
        fillColor='#26785f'
        // eslint-disable-next-line react/no-unstable-nested-components
        handleObserve={(setObserver) => (
          <Timeline callback={onCallback} className='timeline' setObserver={setObserver} />
        )}
      />
      <div className='stub2'>
        {/* using nodeRef & Ref to fix CSSTransition pkg error */}
        <CSSTransition nodeRef={ref1} in={isVisible} timeout={300} classNames='fadeIn' unmountOnExit>
          <ImageWrapper ref={ref1}>
            {isVisible && <Image src='/images/picsou.gif' alt='You gave the money' layout='fill' />}
          </ImageWrapper>
        </CSSTransition>
      </div>
    </TimelineSectionStyles>
  );
}

const TimelineSectionStyles = styled.section`
  .wrappercurves {
    margin-top: -1px;
    margin-left: -2px;
    margin-right: 2px;
    transform: rotate(180deg);
    display: block;
    width: 100.2%;
    height: 50px;
    overflow: hidden;
  }

  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .timeline {
    height: 150px;
    width: 5px;
    background-color: ${COLORS.white};
    margin: 4px;
    border-radius: 2px;
  }

  .stub1 {
    line-height: 150px;
    font-size: 24px;
    background-color: ${COLORS.white};
  }

  .circleWrapper {
    position: relative;
  }

  .circle {
    width: 30px;
    height: 30px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: ${COLORS.secondary};
    border-radius: 50%;
    background-color: ${COLORS.white};
  }

  .message {
    position: absolute;
    width: max-content;
    letter-spacing: 1px;
    font-size: 1.2rem;
    font-weight: bold;
    text-align: center;
  }

  #message1,
  #message3 {
    top: -15px;
    left: 60px;
  }

  #message2 {
    top: -15px;
    right: 60px;
  }

  .stub2 {
    height: 500px;
  }

  @media (max-width: 650px) {
    .message {
      max-width: 150px;
      font-size: 1rem;
    }
    #message1,
    #message3 {
      left: 40px;
    }

    #message2 {
      right: 40px;
    }
  }

  @media (min-height: 800px) {
    .stub2 {
      height: 800px;
    }
  }

  /* css only solution */
  .fade-in-text {
    animation: fadeIn 0.6s;
  }
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    25% {
      opacity: 0.25;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }

  /* CSSTransition pkg */
  /* I use both method to test both solutions */
  .fadeIn-enter {
    opacity: 0;
  }
  .fadeIn-enter-active {
    opacity: 0.25;
    transition: opacity 300ms;
  }
  .fadeIn-enter-done {
    opacity: 1;
  }
`;

const TitleWrapper = styled.div`
  padding-top: 25px;
  text-align: center;
`;

const ImageWrapper = styled.div`
  position: relative;
  margin: 150px auto 0;
  width: 500px;
  height: 250px;

  @media (max-width: 650px) {
    width: 300px;
    height: 150px;
  }
`;

Timeline.propTypes = {
  setObserver: PropTypes.any,
  callback: PropTypes.any,
};
