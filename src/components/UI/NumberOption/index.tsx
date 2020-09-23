import React from 'react'
import { Link } from 'react-router-dom';

import './styles.scss';

interface NumberProps {
  qtd: number;
  title: string
}


const NumberOption: React.FC<NumberProps> = ({ qtd, title }) =>{
  return (
    <li className="numberOption__item">
      <Link className="numberOption__link" to="/followers">
        {qtd}
      <p className="numberOption__text">{title}</p>
      </Link>
    </li>
  )
}

export default NumberOption
