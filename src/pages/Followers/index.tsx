import React, { useState } from 'react'
import Follower from '../../components/UI/Follower';
import Header from '../../components/UI/Header';

import './styles.scss';

const Followers:React.FC = () => {
  const [qtd, setQtd] = useState(7);
  const title = window.location.pathname.replace(/(^\/)/,'');
  // ${qtd < 1 ? title : title+"s"}
   
  return (
    <section className="followers">
      
      <Header title={`${qtd} ${title}`}/>
      
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
