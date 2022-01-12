// styles imports
import styled from 'styled-components';

// components
import Testimonial from './Testimonial';

export default function TestimonialSection() {
  return (
    <TestimonialsStyles>
      {/* the curve style here are greatly inspired from https://css-for-js.dev/ */}
      <CurveWrapper>
        <TopCurveWrapper>
          <svg preserveAspectRatio='none' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 440 52'>
            <path d='M220 1C133.228-1.86 0 33 0 33v18.5h439.5V12s-24.077 14.898-41 21C331.878 57.02 290.781 3.333 220 1z' />
          </svg>
        </TopCurveWrapper>
      </CurveWrapper>
      <Testimonial />
      <CurveWrapper>
        <BottomCurveWrapper>
          <svg preserveAspectRatio='none' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 441 73'>
            <path d='M133 39.5C80.795 39.858 0 26 0 26V0h440.5v51.5S427.546 62.233 418 67c-49.342 24.641-78.218-41.116-133-47.5-59.469-6.93-92.13 19.589-152 20z' />
          </svg>
        </BottomCurveWrapper>
      </CurveWrapper>
    </TestimonialsStyles>
  );
}

const TestimonialsStyles = styled.section`
  margin-top: -150px;
  @media (min-height: 800px) {
    margin-top: -450px;
  }
`;

const CurveWrapper = styled.div`
  overflow: hidden;
  svg {
    --transform: translateY(2px) scale(1.1);
    display: block;
    width: 100%;
    min-width: 700px;
    height: 80px;
    transform: var(--transform);
    path {
      fill: var(--color-secondary);
    }
  }
`;

const TopCurveWrapper = styled.div`
  justify-content: flex-end;
  display: flex;
  flex-direction: column;
  height: 200px;
  overflow: hidden;
  margin-top: -40px;
  transform: translateY(1px);
  background: rgba(5, 12, 31, 0)
    linear-gradient(
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.004) 8.1%,
      rgba(255, 255, 255, 0.008) 15.5%,
      rgba(255, 255, 255, 0.016) 22.5%,
      rgba(255, 255, 255, 0.027) 29%,
      rgba(255, 255, 255, 0.04) 35.3%,
      rgba(255, 255, 255, 0.055) 41.2%,
      rgba(255, 255, 255, 0.067) 47.1%,
      rgba(255, 255, 255, 0.082) 52.9%,
      rgba(255, 255, 255, 0.098) 58.8%,
      rgba(255, 255, 255, 0.11) 64.7%,
      rgba(255, 255, 255, 0.125) 71%,
      rgba(255, 255, 255, 0.133) 77.5%,
      rgba(255, 255, 255, 0.14) 84.5%,
      rgba(255, 255, 255, 0.15) 91.9%,
      rgba(255, 255, 255, 0.15) 100%
    )
    repeat scroll 0% 0%;
`;

const BottomCurveWrapper = styled.div`
  height: 180px;
  background: rgba(5, 12, 31, 0)
    linear-gradient(
      to top,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.004) 8.1%,
      rgba(255, 255, 255, 0.008) 15.5%,
      rgba(255, 255, 255, 0.016) 22.5%,
      rgba(255, 255, 255, 0.027) 29%,
      rgba(255, 255, 255, 0.04) 35.3%,
      rgba(255, 255, 255, 0.055) 41.2%,
      rgba(255, 255, 255, 0.067) 47.1%,
      rgba(255, 255, 255, 0.082) 52.9%,
      rgba(255, 255, 255, 0.098) 58.8%,
      rgba(255, 255, 255, 0.11) 64.7%,
      rgba(255, 255, 255, 0.125) 71%,
      rgba(255, 255, 255, 0.133) 77.5%,
      rgba(255, 255, 255, 0.14) 84.5%,
      rgba(255, 255, 255, 0.15) 91.9%,
      rgba(255, 255, 255, 0.1) 100%
    )
    repeat scroll 0% 0%;
  transform: translateY(-1px);
`;
