import React from 'react'
import { Link } from 'react-router-dom';

import './styles.scss';

interface NumberProps {
  qtd: number;
  title: string;
  link?: string;
}

const NumberOption: React.FC<NumberProps> = ({ qtd, title }) =>{

  return (
    <li className="numberOption__item">
      <Link to={`/${title.toLocaleLowerCase()}`} className="numberOption__link" >
        {qtd}
        <p className="numberOption__text">{title}</p>
      </Link>
    </li>
  )
}

export default NumberOption
