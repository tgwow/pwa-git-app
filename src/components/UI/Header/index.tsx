import React from 'react'

import { FiArrowLeft } from 'react-icons/fi';

import './styles.scss';
import {Link} from "react-router-dom";

interface HeaderProps {
  title: string;
}
const Header: React.FC<HeaderProps> = ({ title } ) => {
  return (
    <header className="header">
      <Link to={'/'}>
        <FiArrowLeft size={24}/>
      </Link>
      <h3 className="header__title heading-tertiary">{ title }</h3>
    </header>  
  )
}

export default Header
