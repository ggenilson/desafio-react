import { FC } from 'react';
import './styles/index.css';
import StoreCandidate from './pages/candidate';

const App: FC = () => {
  return (
    <div className="container-wrapper">
      <div className="turn-back">
        <span>Retornar</span>
      </div>

      <StoreCandidate />
    </div>
  );
};

export default App;
