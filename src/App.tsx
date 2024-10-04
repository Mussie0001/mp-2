import styled from 'styled-components';
import CryptoData from './components/CryptoData';

const AppContainer = styled.div`
  width: 80vw;
  margin: auto;
  text-align: center;
  border: 2px solid #333;
  h1 {
    font-style: italic;}
`;

function App() {
  return (
    <AppContainer>
      <h1>Live Cryptocurrency Market Data</h1>
      <CryptoData />    
    </AppContainer>
  );
}

export default App;

