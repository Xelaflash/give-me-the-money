// transition pkg
import { createRef } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
// Styles import
import styled from 'styled-components';
import { COLORS } from '../styles/constants';

export default function CartCount({ count }) {
  // we use create ref to fix a warning from a package
  // https://github.com/reactjs/react-transition-group/issues/687
  const itemRef = createRef(null);
  return (
    <AnimationStyles>
      <TransitionGroup>
        <CSSTransition
          nodeRef={itemRef}
          unmountOnExit
          className="count"
          classNames="count"
          key={count}
          timeout={{ enter: 600, exit: 600 }}
        >
          <Dot ref={itemRef}>{count}</Dot>
        </CSSTransition>
      </TransitionGroup>
    </AnimationStyles>
  );
}

const Dot = styled.div`
  background: ${COLORS.primary};
  color: ${COLORS.white};
  border-radius: 50%;
  padding: 0.5rem;
  line-height: 2rem;
  min-width: 3rem;
  margin-left: 1rem;
  /* below makes all numbers same width */
  font-feature-settings: 'tnum';
  font-variant-numeric: tabular-nums;
`;

const AnimationStyles = styled.span`
  position: relative;
  .count {
    display: block;
    position: relative;
    transition: transform 0.6s;
    backface-visibility: hidden;
  }
  .count-enter {
    transform: scale(3.2) rotateY(0.5turn);
  }
  .count-enter-active {
    transform: rotateY(0);
  }
  .count-exit {
    position: absolute;
    top: 0;
    transform: rotateY(0);
  }
  .count-exit-active {
    transform: scale(3.2) rotateY(0.5turn);
  }
`;
