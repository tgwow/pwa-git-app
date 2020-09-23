import React from 'react'

import Header from '../../components/UI/Header';
import Repository from '../../components/UI/Repository';

import './styles.scss';

const Repositories: React.FC = () => {
  return (
    <>
      <section className="repositories">
        <Header title="10 repositorios"/>
        <ul className="repositories__list">
          <Repository/>
          <Repository/>
          <Repository/>
          <Repository/>
          <Repository/>
        </ul>
      </section>
    </>
  )
}

export default Repositories;
