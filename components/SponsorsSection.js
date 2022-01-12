import Image from 'next/image';
// styles imports
import styled from 'styled-components';
// responsive queries
import { QUERIES } from '../styles/constants';
// Data
import SPONSORS_DATA from '../data/sponsors.js';

export default function SponsorsSection() {
  const sponsors = SPONSORS_DATA;

  return (
    <SponsorsSectionWrapper>
      <TitleWrapper>
        <h2 className='header'>
          Our <span>Sponsors</span>
        </h2>
        <p className='subheader'>
          The proud <span>money</span> givers
        </p>
      </TitleWrapper>
      <LogoGridWrapper>
        {sponsors.map((sponsor) => (
          <SponsorLogoWrapper key={sponsor.id}>
            <Image src={sponsor.img} alt={sponsor.altText} layout='fill' objectFit='contain' />
          </SponsorLogoWrapper>
        ))}
      </LogoGridWrapper>
    </SponsorsSectionWrapper>
  );
}

const SponsorsSectionWrapper = styled.section`
  padding: 64px 64px 128px 64px;
`;

const TitleWrapper = styled.div`
  margin-top: -85px;
  text-align: center;
`;

const LogoGridWrapper = styled.div`
  margin-top: 92px;
  display: flex;
  gap: 32px;
  justify-content: space-around;
  flex-wrap: wrap;

  @media ${QUERIES.tabletAndDown} {
    gap: 16px;
  }
`;

const SponsorLogoWrapper = styled.div`
  position: relative;
  height: 70px;
  width: 110px;
  padding: 16px;
`;
