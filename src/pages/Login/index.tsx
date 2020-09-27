import React, {useState, useContext} from 'react'

import { FaGithub, FaArrowRight } from 'react-icons/fa'

import './styles.scss'

import AuthContext, {User} from '../../contexts/auth';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const { get, setUser } = useContext(AuthContext);

  async function handleSubmit(e : React.FormEvent) {
    e.preventDefault();

    if (!username) {
      showMessageError('Campo obrigatório');
      return ;
    }

    // chamando a funcao disponibilizada pelo meu contexto para tentar logar
    const url = process.env.REACT_APP_GIT_URL;

    const {status, msg, data} = await get<User>(url+username);
    if (data) {
      setUser(data);
      localStorage.setItem("@Auth:user", JSON.stringify(data));
    }

    if (status === 404) {
      setUsername('');
      showMessageError(`User ${msg}`)
    }
  }

  function showMessageError(message : string ) {
    const elt = document.getElementById("error-message") as HTMLElement;
    elt.textContent = message;
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
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <label id="error-message" className="form__label"/>
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
