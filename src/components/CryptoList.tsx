import styled from 'styled-components';
import { Crypto } from '../interfaces/Crypto.ts';
import CryptoItemColored from './CryptoItemColored.tsx';

const CryptoListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 20px;
`;

export default function CryptoList({ data }: { data: Crypto[] }) {
  const sortedData = [...data].sort((a, b) => parseFloat(b.price_usd) - parseFloat(a.price_usd));

  return (
    <CryptoListContainer>
      {sortedData.map((crypto: Crypto, index: number) => {
        let rankType = 'middle';

        // the 3 highest ranked coins
        if (index < 3) {
          rankType = 'top';
        }
        // the 3 lowest priced coins
        else if (index >= sortedData.length - 3) {
          rankType = 'bottom';
        }

        return (
          <CryptoItemColored
            key={crypto.id}
            id={crypto.id} 
            name={crypto.name}
            symbol={crypto.symbol}
            price_usd={crypto.price_usd}
            rankType={rankType}
          />
        );
      })}
    </CryptoListContainer>
  );
}

