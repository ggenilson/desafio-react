import { FC, useState } from 'react';
import Input from '../../components/input';
import Modal from '../../components/modal';

//Imagens
import store from '../../assets/img/cadastro.png';
import gria from '../../assets/img/gria.png';

const Candidate: FC = () => {
  const [toggle, setToggle] = useState(true);

  return (
    <>
      <Modal
        Component={
          <div className="delete-container">
            <div className="delete-container-sms">
              <span>Tem a certeza que deseja eliminar estes dados?</span>
            </div>
          </div>
        }
        toggle={toggle}
        setToggle={setToggle}
        onSaveClick={async () => {
          alert('Salvo');
        }}
      />

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
            <Input type="text" id="cpf" name="cpf" label="CPF" pattern="(\d{3}\.?\d{3}\.?\d{3}-?\d{2})|(\d{2}\.?\d{3}\.?\d{3}/?\d{4}-?\d{2})" />
            <Input type="email" id="email" name="email" label="E-mail" />
            <Input
              type="password"
              id="password"
              name="password"
              label="Senha"
            />
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
    </>
  );
};

export default Candidate;
