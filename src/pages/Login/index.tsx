import React from 'react'

import { FaGithub, FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom';

import './styles.scss'

const Login: React.FC = () => {
  return (
    <div className="flex-center">

    <div className="login">
      <div className="login__icon u-margin-bottom-3">
        <FaGithub/>
      </div>

      <form action="#" className="form" autoComplete="off">
        <div className="form__group">
          <input className="form__input" type="text" placeholder="Usuário" required/>
          <label className="form__label">Campo obrigatório</label>
        </div>

        <div className="form__group">
          <a href="/home" className="btn btn--yellow">Entrar <FaArrowRight/> </a>
        </div>
      </form>
    </div>
    </div>

  )
}

export default Login
