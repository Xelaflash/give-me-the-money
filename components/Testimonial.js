// import Image from 'next/image';
import styled from 'styled-components';
// libs
import { Rerousel } from 'rerousel';
// Data
import { useRef } from 'react';
import TESTIMONIAL_DATA from '../data/testimonials.js';

export default function Testimonial() {
  const testimonialRef = useRef(null);
  const testimonials = TESTIMONIAL_DATA;

  return (
    // styles inspired from https://css-for-js.dev/ in order to gain time
    <Rerousel itemRef={testimonialRef} interval='8000'>
      {testimonials.map((testimonialItem) => (
        <CarouselItem key={testimonialItem.id} ref={testimonialRef}>
          <TestimonialStyles>
            <AvatarWrapper>
              {/* //!!I do not use Next image because of styling issues */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={testimonialItem.img} alt='Fake profiles pics - Testimonial section' />
            </AvatarWrapper>
            {/* eslint-disable-next-line react/no-danger */}
            <blockquote dangerouslySetInnerHTML={{ __html: testimonialItem.text }} />
            <figcaption>
              <a href='https://twitter.com/GhostXela' target='_blank' rel='noopener noreferrer'>
                {testimonialItem.author}
              </a>
              {testimonialItem.workTitle}
            </figcaption>
          </TestimonialStyles>
        </CarouselItem>
      ))}
    </Rerousel>
  );
}

const CarouselItem = styled.div`
  width: 100%;
`;

const TestimonialStyles = styled.figure`
  padding-top: 1.5vw;
  padding-bottom: 4vw;
  max-width: 850px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 32px;
  padding-right: 32px;
  background: var(--color-secondary);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  blockquote {
    font-size: 1.4rem;
    letter-spacing: 0.3px;
    text-align: center;
    margin: 0px 16px;
    padding: 0px 16px;
  }
  strong {
    background-color: rgb(38, 120, 95);
    font-weight: 900;
    background-image: linear-gradient(-180deg, #26785f, #309a68, #3abd69, #57cc6d, #79d77b, #a5e29a, #cbecbd, #eaf6df);
    background-size: 100%;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  figcaption {
    a {
      display: block;
      font-size: 1.4rem;
      font-weight: 700;
      text-transform: uppercase;
      color: #f28466;
      margin-bottom: 8px;
      text-decoration: none;
    }
    margin-top: 32px;
    font-size: 1.1rem;
    text-align: center;
    color: var(--color-gray-700);
  }

  @media (max-width: 650px) {
    padding-left: 8px;
    padding-right: 8px;
    blockquote {
      padding: 0;
    }
  }
`;

const AvatarWrapper = styled.div`
  padding-bottom: 32px;
  img {
    width: 90px;
    height: 90px;
    box-shadow: 0px 0px 0px 4px var(--color-secondary), 0px 0px 0px 6px var(--color-primary);
    border-radius: 50%;
  }
`;
