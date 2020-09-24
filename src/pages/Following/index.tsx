import React from 'react'
import Follower from '../../components/UI/Follower';
import Header from '../../components/UI/Header';

import './styles.scss';

const Followers:React.FC = () => {
  return (
    <section className="followers">
      <Header title="10 seguidores"/>
      <ul className="followers__list">
        <Follower />  
        <Follower />  
        <Follower />  
        <Follower />  
        <Follower />  
        <Follower />  
      </ul>
    </section>  
  )
}

export default Followers;
