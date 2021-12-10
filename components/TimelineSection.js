// styles imports
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';
// code coming from pkg https://github.com/akashuba/react-timeline-animation
import TimelineObserver from './TimelineObserver';
import { fireConfetti } from './confetti';
import { COLORS } from '../styles/constants';

const Timeline = ({ setObserver, callback }) => {
  const [message1, setMessage1] = useState('');
  const [message2, setMessage2] = useState('');
  const [message3, setMessage3] = useState('');

  const timeline1 = useRef(null);
  const timeline2 = useRef(null);
  const timeline3 = useRef(null);
  const circle1 = useRef(null);
  const circle2 = useRef(null);
  const circle3 = useRef(null);

  const messageCallback = () => {
    setMessage1('Choose plan & Add to cart');
  };

  const messageCallback2 = () => {
    setMessage2('Checkout & Pay');
  };

  const messageCallback3 = () => {
    setMessage3('Congratulations!!\nYou just Gave the Money');
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
    <div className="wrapper">
      <div id="timeline1" ref={timeline1} className="timeline" />
      <div className="circleWrapper">
        <div id="circle1" ref={circle1} className="circle">
          1
        </div>
        <div className="message" id="message1">
          {message1}
        </div>
      </div>
      <div id="timeline2" ref={timeline2} className="timeline" />
      <div className="circleWrapper">
        <div id="circle2" ref={circle2} className="circle">
          2
        </div>
        <div className="message" id="message2">
          {message2}
        </div>
      </div>
      <div id="timeline3" ref={timeline3} className="timeline" />
      <div className="circleWrapper">
        <div id="circle3" ref={circle3} className="circle">
          3
        </div>
        <div className="message" id="message3">
          {message3}
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
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 440 52"
        className="wrappercurves"
      >
        <path
          d="M220 1C133.228-1.86 0 33 0 33v18.5h439.5V12s-24.077 14.898-41 21C331.878 57.02 290.781 3.333 220 1z"
          fill="#26785f"
        />
      </svg>
      <TitleWrapper>
        <h2 className="header">
          How it <span>works</span>
        </h2>
        <p className="subheader">
          As easy as <span>1, 2, 3</span>
        </p>
      </TitleWrapper>
      <TimelineObserver
        initialColor={COLORS.white}
        fillColor="#26785f"
        handleObserve={(setObserver) => (
          <Timeline callback={onCallback} className="timeline" setObserver={setObserver} />
        )}
      />
      <div className="stub2">
        {/* using nodeRef & Ref to fix CSSTransition pkg error */}
        <CSSTransition nodeRef={ref1} in={isVisible} timeout={500} classNames="fadeIn" unmountOnExit>
          <ImageWrapper ref={ref1}>
            {isVisible && <Image src="/images/picsou.gif" alt="You gave the money" width={450} height={300} />}
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
    transform: rotate(180deg);
    display: block;
    width: 100%;
    min-width: 700px;
    height: 50px;
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
    top: 20%;
    left: 50;
    width: max-content;
    font-weight: bold;
  }

  #message1,
  #message3 {
    left: 50px;
  }

  #message2 {
    right: 50px;
  }

  .stub2 {
    height: 500px;
  }

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
  margin: 52px auto;
  max-width: fit-content;
`;
