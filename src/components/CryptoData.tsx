import { useState, useEffect } from 'react';
import CryptoList from './CryptoList';
import { Crypto } from '../interfaces/Crypto.ts';

function CryptoData() {
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
    <div>
      <CryptoList data={cryptoData} />
    </div>
  );
}

export default CryptoData;


