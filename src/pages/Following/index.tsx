import React from 'react'
import Header from '../../components/UI/Header';

import './styles.scss';

const Followers:React.FC = () => {
  return (
    <section className="followers">
      <Header title="10 seguidores"/>
      <ul className="followers__list">
      </ul>
    </section>  
  )
}

export default Followers;
