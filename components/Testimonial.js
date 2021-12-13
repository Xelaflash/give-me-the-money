import Image from 'next/image';
import styled from 'styled-components';

// TODO: Make component a carousel and add 2,3 more testimonials => create a data object

export default function Testimonial() {
  return (
    // styles inspired from https://css-for-js.dev/ in order to gain time
    <TestimonialStyles>
      <AvatarWrapper>
        {/* I do not use Next image because of styling issues */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        {/* TODO: add pic id when inside a collection */}
        <img src='https://i.pravatar.cc/300' alt='Fake profiles pics - Testimonial section' />
      </AvatarWrapper>
      <blockquote>
        Before I was rich but sad and lonely. <br />
        Then i gave my money and sky was blue again. <br />
        Thanks <strong>Give My Money Inc.</strong>
      </blockquote>
      <figcaption>
        <a href='https://twitter.com/GhostXela' target='_blank' rel='noopener noreferrer'>
          Jean Blaguin
        </a>
        King of the Bongo
      </figcaption>
    </TestimonialStyles>
  );
}

const TestimonialStyles = styled.figure`
  padding-top: 1.5vw;
  padding-bottom: 4vw;
  width: 100%;
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
