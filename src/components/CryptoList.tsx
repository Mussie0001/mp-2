import styled from 'styled-components';
import { Crypto } from '../interfaces/Crypto.ts';

const CryptoListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 20px;
`;

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

export default function CryptoList({ data }: { data: Crypto[] }) {
  const sortedData = [...data].sort((a, b) => parseFloat(b.price_usd) - parseFloat(a.price_usd));

  return (
    <CryptoListContainer>
      {sortedData.map((crypto: Crypto, index: number) => {
        let rankType = 'middle';

        if (index < 3) {
          rankType = 'top';
        } else if (index >= sortedData.length - 3) {
          rankType = 'bottom';
        }

        return (
          <CryptoItem
            key={crypto.id}
            $rankType={rankType}
          >
            <h2>{crypto.name}</h2>
            <p>Symbol: {crypto.symbol}</p>
            <p>Price: ${crypto.price_usd}</p>
          </CryptoItem>
        );
      })}
    </CryptoListContainer>
  );
}