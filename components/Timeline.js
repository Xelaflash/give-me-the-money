// styles imports
import styled from 'styled-components';

export default function Timeline() {
  return (
    <TimelineStyles>
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
        <h2 className="header">How it works</h2>
        <p className="subheader">As easy as 1, 2, 3</p>
      </TitleWrapper>
    </TimelineStyles>
  );
}

const TimelineStyles = styled.div`
  .wrappercurves {
    margin-top: -1px;
    margin-left: -2px;
    transform: rotate(180deg);
    display: block;
    width: 100%;
    min-width: 700px;
    height: 25px;
  }
  `;

const TitleWrapper = styled.div`
  padding-top: 25px;
  text-align: center;
`;
