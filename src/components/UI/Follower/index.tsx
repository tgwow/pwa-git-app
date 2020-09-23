import React from 'react'

import { FiArrowRight } from 'react-icons/fi'
import user from '../../../me.jpeg';

import Avatar from '../Avatar/Avatar'

import './styles.scss';

const Follower: React.FC = () => {
  return (
    <li className="follower">
      <a href="#" className="follower__link">
        <div className="follower__box">
          <Avatar size={ 6.4 } image={user} />
          <h3 className="follower__name heading-tertiary">tgwow</h3>
        </div>
        <FiArrowRight size={24} />
      </a>
    </li>
  )
}

export default Follower;
