import React from 'react'

import { FiArrowRight } from 'react-icons/fi'

import Avatar from '../Avatar/Avatar'

import './styles.scss';

import {FollowerProps} from "../../../pages/Followers";
import {Link} from "react-router-dom";

const Follower: React.FC<FollowerProps> = ({fol}) => {

  function handleClick() {
    console.log(fol.login);
  }
  return (
    <li className="follower">
      <Link to={`home/${fol.login}`} className="follower__link" onClick={handleClick}>
        <div className="follower__box">
          <Avatar size={ 6.4 } image={fol.avatar_url} />
          <h3 className="follower__name heading-tertiary">{fol.login}</h3>
        </div>
        <FiArrowRight size={24} />
      </Link>
    </li>
  )
}

export default Follower;
