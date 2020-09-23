import React from 'react'

import { FiGithub, FiHome, FiUser, FiUsers } from 'react-icons/fi';
import BottomBarOption from '../BottomBarOption';

import './styles.scss';

const BottomBar: React.FC = () => {
  return (
    <nav className="bottomBar">
      <ul className="bottomBar__list">
        <BottomBarOption Icon={FiHome}   size={24} active={true} />
        <BottomBarOption Icon={FiGithub} size={24} />
        <BottomBarOption Icon={FiUsers}  size={24} />
        <BottomBarOption Icon={FiHome}   size={24} />
      </ul>
    </nav>
  )
}

export default BottomBar;
