import { FC } from 'react';
import Input from '../../components/input';

//Imagens
import store from '../../assets/img/cadastro.png';
import gria from '../../assets/img/gria.png';

const Candidate: FC = () => {
  return (
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
          <Input type="text" id="cpf" name="cpf" label="CPF" />
          <Input type="email" id="email" name="email" label="E-mail" />
          <Input type="password" id="password" name="password" label="Senha" />
          <Input
            type="password"
            id="password1"
            name="password1"
            label="Confirmar senha"
          />

          <Input
            type="button"
            value="CADASTRAR"
            onClick={() => alert('Até aqui tudo bem!')}
          />
          <Input
            type="button"
            value="JÁ POSSUI CADASTRO? FAÇA O LOGIN AQUI"
            onClick={() => alert('Wow!')}
            className="login-button"
          />
        </div>
      </form>
    </div>
  );
};

export default Candidate;
