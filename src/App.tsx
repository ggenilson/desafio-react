import { FC } from 'react';
import StoreCandidate from './pages/candidate';
import './styles/index.css';
import 'font-awesome/css/font-awesome.min.css';

const App: FC = () => {
  return (
    <div className="container-wrapper">
      <div className="turn-back">
        <i className="fa fa-arrow-left" />
        <span>Retornar</span>
      </div>

      <StoreCandidate />
    </div>
  );
};

export default App;
