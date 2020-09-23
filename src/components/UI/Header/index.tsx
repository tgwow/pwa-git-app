import React from 'react'

import { FiArrowLeft } from 'react-icons/fi';

import './styles.scss';

interface HeaderProps {
  title: string;
}
const Header: React.FC<HeaderProps> = ({ title } ) => {
  return (
    <header className="header">
      <FiArrowLeft size={24}/>
      <h3 className="header__title heading-tertiary">{ title }</h3>
    </header>  
  )
}

export default Header
