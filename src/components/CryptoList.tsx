import styled from 'styled-components';
import { Crypto } from '../interfaces/Crypto.ts';

const CryptoListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 20px;
`;

const CryptoItem = styled.div`
  width: 200px;
  margin: 15px;
  padding: 10px;
  background-color: #f4f4f4;
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
  return (
    <CryptoListContainer>
      {data.map((crypto: Crypto) => (
        <CryptoItem key={crypto.id}>
          <h2>{crypto.name}</h2>
          <p>Symbol: {crypto.symbol}</p>
          <p>Price: ${crypto.price_usd}</p>
        </CryptoItem>
      ))}
    </CryptoListContainer>
  );
}
