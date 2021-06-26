import { FC, useState } from 'react';
import Input from '../../components/input';
import Modal from '../../components/modal';
import { validateEmail } from '../../utils';

//Imagens
import store from '../../assets/img/cadastro.png';
import gria from '../../assets/img/gria.png';
import info from '../../assets/img/informacao.png';

const Candidate: FC = () => {
  const [toggle, setToggle] = useState(false);
  const [email, setEmail] = useState('');

  function handleSaveCandidate() {
    setToggle(true);
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSaveCandidate();
  };

  return (
    <>
      <Modal
        Component={
          <>
            <img src={info} alt="Informação" />
            <h2>Cadastro Realizado com Sucesso!</h2>

            <div className="confirm-link">
              <span>
                O link de confirmação foi enviado para o email
                *******ail@email.com
              </span>
            </div>
          </>
        }
        toggle={toggle}
        setToggle={setToggle}
        className="modal-save-candidate"
      />

      <div className="container-form">
        <div className="left-img">
          <img src={store} alt="Cadastro" />
        </div>

        <form onSubmit={handleSubmit}>
          <div className="turn-back hidden">
            <i className="fa fa-arrow-left" />
            <span>Retornar</span>
          </div>
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
            <Input type="text" id="cpf" name="cpf" label="CPF" required />
            <Input
              type="email"
              id="email"
              name="email"
              label="E-mail"
              onBlur={e => setEmail(e.target.value)}
              required
              isValid={validateEmail(email)}
            />
            <Input
              type="password"
              id="password"
              name="password"
              label="Senha"
              required
            />
            <Input
              type="password"
              id="password1"
              name="password1"
              label="Confirmar senha"
              required
            />

            <Input type="submit" value="CADASTRAR" className="btn-store" />

            <Input
              type="submit"
              value="JÁ POSSUI CADASTRO? FAÇA O LOGIN AQUI"
              className="login-button"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default Candidate;
