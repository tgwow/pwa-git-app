import React, {useContext} from 'react'
import NumberOption from '../NumberOption'

import './styles.scss';
import AuthContext, {User} from "../../../contexts/auth";

const Numbers: React.FC = () =>  {

  const { user } = useContext(AuthContext);
  const { following, followers, public_repos } = user as User;
  return (
    <div className="number">
      <ul className="number__list">
        <NumberOption qtd={public_repos} title="Repos" />
        <NumberOption qtd={followers} title="Seguidores" />
        <NumberOption qtd={following} title="Seguindo" />
      </ul>
    </div>
  )
}

export default Numbers
