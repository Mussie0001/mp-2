import { useState, useEffect } from 'react';
import styled from 'styled-components';
import CryptoList from './components/CryptoList.tsx';
import { Crypto } from './interfaces/Crypto.ts';

const AppContainer = styled.div`
  width: 80vw;
  margin: auto;
  text-align: center;
  border: 2px solid #333;
  h1 {
    font-style: italic;}
`;

export default function App() {
  const [cryptoData, setCryptoData] = useState<Crypto[]>([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://api.coinlore.net/api/tickers/');
      const data = await response.json();
      setCryptoData(data.data);
    }

    fetchData().catch((e: Error) => console.error('Error fetching data:', e));
  }, []);

  return (
    <AppContainer>
      <h1>Live Cryptocurrency Market Data</h1>
      <CryptoList data={cryptoData}/>
    </AppContainer>
  );
}

