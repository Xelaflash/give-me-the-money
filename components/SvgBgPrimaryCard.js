// styles imports
import { COLORS } from '../styles/constants';

export default function SvgBgPrimaryCard() {
  return (
    <svg viewBox='0 0 350 498' width='350' height='498' xmlns='http://www.w3.org/2000/svg' version='1.1'>
      <rect x='0' y='0' width='350' height='498' fill={COLORS.white} />
      <defs>
        <linearGradient id='gradient'>
          <stop offset='1%' stopColor='hsl(223, 74%, 7%)' />
          <stop offset='55%' stopColor='hsl(223, 64%, 27%)' />
          <stop offset='95%' stopColor='hsl(223, 54%, 47%)' />
        </linearGradient>
      </defs>
      <path
        d='M0 219L11.7 209.3C23.3 199.7 46.7 180.3 70 178C93.3 175.7 116.7 190.3 140 184.8C163.3 179.3 186.7 153.7 210 157.5C233.3 161.3 256.7 194.7 280 197.8C303.3 201 326.7 174 338.3 160.5L350 147L350 0L338.3 0C326.7 0 303.3 0 280 0C256.7 0 233.3 0 210 0C186.7 0 163.3 0 140 0C116.7 0 93.3 0 70 0C46.7 0 23.3 0 11.7 0L0 0Z'
        fill='url(#gradient)'
        strokeLinecap='round'
        strokeLinejoin='miter'
      />
    </svg>
  );
}
