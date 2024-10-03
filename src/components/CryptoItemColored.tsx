import styled from 'styled-components';
import { Crypto } from '../interfaces/Crypto.ts';

const CryptoItem = styled.div<{ $rankType: string }>`
  width: 200px;
  margin: 15px;
  padding: 10px;
  background-color: ${(props) =>
    props.$rankType === 'top' ? 'green' :
    props.$rankType === 'bottom' ? 'red' : 'yellow'};
  border: 1px solid #ccc;
  border-radius: 10px;
  text-align: center;

  h2 {
    font-size: 1.5rem;
    margin-bottom: 10px;
  }

  p {
    font-size: 1.2rem;
  }
`;

interface CryptoWithRank extends Crypto {
  rankType: string;
}

export default function CryptoItemColored({ name, symbol, price_usd, rankType }: CryptoWithRank) {
  return (
    // destructuring rankType and passing it with a $ prefix so that it won't be passed to the DOM element to fix warning
    <CryptoItem $rankType={rankType}>
      <h2>{name}</h2>
      <p>Symbol: {symbol}</p>
      <p>Price: ${price_usd}</p>
    </CryptoItem>
  );
}


