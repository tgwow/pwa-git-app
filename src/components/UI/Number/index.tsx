import React from 'react'
import NumberOption from '../NumberOption'

import './styles.scss';

const Numbers: React.FC = () =>  {
  return (
    <div className="number">
      <ul className="number__list">
        <NumberOption qtd={32} title="Repos"/>
        <NumberOption qtd={12} title="Seguidores"/>
        <NumberOption qtd={122} title="Seguindo"/>
      </ul>
  </div>
  )
}

export default Numbers
