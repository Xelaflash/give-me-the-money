// styles imports
import Image from 'next/image';
import styled from 'styled-components';
// responsive queries
import { Twitter, GitHub, Linkedin, Facebook } from 'react-feather';
import Link from 'next/link';
import { QUERIES, WEIGHTS } from '../styles/constants';

//  Components
import VisuallyHidden from './VisuallyHidden';

export default function Footer() {
  return (
    <FooterWrapper>
      <FlexWrapperLeft>
        <LogoWrapper>
          <Image src='/images/logo.png' alt='AlexG WebDev' width={80} height={80} quality={100} />
          <SubLogoText>
            Thanks for the <span>$$$</span>
          </SubLogoText>
        </LogoWrapper>
        <Copyright>©{new Date().getFullYear()} AlexGWebDev. All Rights Reserved.</Copyright>
      </FlexWrapperLeft>

      <LinksWrapper>
        <p>Sections</p>
        <Link href='/'>Products</Link>
        <Link href='/#customer-journey'>Customer Journey</Link>
        <Link href='/#testimonials'>Testimonials</Link>
        <Link href='/#sponsors'>Sponsors</Link>
      </LinksWrapper>

      <FlexWrapperRight>
        <BuyCoffeeBtnWrapper>
          <a href='https://www.buymeacoffee.com/givemethe.money' target='_blank' rel='noreferrer'>
            <Image src='/images/bmc-button.png' alt='Buy me a coffee button' quality={75} width={200} height={56} />
          </a>
        </BuyCoffeeBtnWrapper>
        <SocialWrapper>
          <a href='https://twitter.com/GhostXela' target='_blank' rel='noopener noreferrer'>
            <Twitter size={24} />
            <VisuallyHidden>Twitter</VisuallyHidden>
          </a>

          <a href='https://github.com/Xelaflash' target='_blank' rel='noopener noreferrer'>
            <GitHub size={24} />
            <VisuallyHidden>Github</VisuallyHidden>
          </a>

          <a href='https://www.facebook.com/alexgwebdev' target='_blank' rel='noopener noreferrer'>
            <Facebook size={24} />
            <VisuallyHidden>Facebook</VisuallyHidden>
          </a>

          <a href='https://www.linkedin.com/in/alexgwebdev/' target='_blank' rel='noopener noreferrer'>
            <Linkedin size={24} />
            <VisuallyHidden>Linkedin</VisuallyHidden>
          </a>
        </SocialWrapper>
      </FlexWrapperRight>
    </FooterWrapper>
  );
}

const FooterWrapper = styled.footer`
  --color-homepage-dark: hsla(200deg, 100%, 85%, 0.1);
  min-height: 250px;
  padding: 32px 124px;
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
  display: grid;
  grid-template-columns: 1fr minmax(350px, 1fr) 1fr;
  @media ${QUERIES.tabletAndDown} {
    grid-template-columns: repeat(3, 1fr);
    padding: 32px;
  }

  @media ${QUERIES.phoneAndDown} {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 32px;
  }
`;

// grid elements
const FlexWrapperLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media ${QUERIES.phoneAndDown} {
    text-align: center;
    grid-row: 3;
  }
`;

const LinksWrapper = styled.div`
  justify-self: center;
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: start;

  p {
    font-size: 14px;
    font-weight: ${WEIGHTS.medium};
    color: var(--color-gray-500);
    text-transform: uppercase;
  }
  a {
    font-size: 14px;
    font-weight: ${WEIGHTS.normal};
    color: var(--color-gray-100);
    text-decoration: none;
    &:hover {
      color: var(--color-primary);
    }
  }
`;

const FlexWrapperRight = styled.div`
  justify-self: end;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
  @media ${QUERIES.phoneAndDown} {
    gap: 24px;
    justify-self: center;
  }
`;
// End grid elements

const LogoWrapper = styled.div`
  @media ${QUERIES.phoneAndDown} {
    text-align: center;
  }
`;

const SubLogoText = styled.p`
  font-weight: ${WEIGHTS.bold};
  margin-top: 8px;
  span {
    color: var(--color-primary);
  }
`;

const Copyright = styled.p`
  font-size: 12px;
  font-weight: ${WEIGHTS.medium};
  margin-top: 8px;
  color: var(--color-gray-500);
`;

const BuyCoffeeBtnWrapper = styled.div``;

const SocialWrapper = styled.div`
  display: flex;
  gap: 16px;
  svg {
    color: var(--color-gray-100);
    &:hover {
      color: var(--color-primary);
    }
  }
`;
