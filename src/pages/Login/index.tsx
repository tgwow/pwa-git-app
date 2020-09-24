import React, {useState, useContext} from 'react'

import { FaGithub, FaArrowRight } from 'react-icons/fa'

import './styles.scss'

import AuthContext from '../../contexts/auth';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const { logIn } = useContext(AuthContext);
  
  
  async function handleSubmit(e : React.FormEvent) {
    e.preventDefault();
    // chamando a funcao disponibilizada pelo meu contexto para tentar logar
    const {status, msg} = await logIn(username);
    if (status == 404) {
      setUsername('');
      showMessageError(msg)
    }

  }

  function showMessageError(message : string ) {
    const elt = document.getElementById("error-message") as HTMLElement;
    elt.textContent = `User ${message}!`;
    elt.style.opacity = '1';
    elt.style.visibility = 'visible';
  }
  return (
    <div className="flex-center">
      <div className="login">
        <div className="login__icon u-margin-bottom-3">
          <FaGithub/>
        </div>
        <form action="#" className="form" autoComplete="off" onSubmit={handleSubmit}>
          <div className="form__group">

            <input
              className="form__input"
              type="text"
              placeholder="Usuário"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <label id="error-message" className="form__label"></label>
          </div>

          <div className="form__group">
            <button className="btn btn--yellow">Entrar <FaArrowRight/> </button>
          </div>
        </form>
      </div>
    </div>

  )
}

export default Login;
