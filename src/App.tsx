import { FC } from 'react';
import './styles/index.css';
import Input from './components/input';

import store from './assets/img/cadastro.png';
import gria from './assets/img/gria.png';

const App: FC = () => {
  return (
    <div className="container-wrapper">
      <div className="turn-back">
        <span>Retornar</span>
      </div>

      <div className="container-form">
        <div className="left-img">
          <img src={store} alt="Cadastro" />
        </div>

        <form>
          <div className="header-form">
            <div className="left-header-form">
              <h2>Cadastrar Candidato</h2>
              <span>Cadastre-se e encontre a oportunidade que deseja</span>
            </div>
            <div className="right-header-form">
              <img src={gria} alt="Gria" />
            </div>
          </div>

          <div className="body-form">
            <Input type="text" id="cpf" name="cpf" />
            <Input type="email" id="email" name="email" />
            <Input type="password" id="password" name="password" />
            <Input type="password" id="password1" name="password1" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default App;
