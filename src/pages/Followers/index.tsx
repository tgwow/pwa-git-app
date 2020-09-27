import React, {useContext, useEffect, useState} from 'react'
import Follower from '../../components/UI/Follower';
import Header from '../../components/UI/Header';

import './styles.scss';
import AuthContext, {User} from "../../contexts/auth";

import * as service from "../../services/auth";

export interface FollowerProps {
  avatar_url?: string;
  login?: string;
  html_url?: string;
  fol: FollowerProps;
}
const Followers:React.FC = () => {
  const [follower, setFollower] = useState<FollowerProps[] | undefined>([]);
  const { user }  = useContext(AuthContext);
  const { followers_url, followers } = user as User

  const title = window.location.pathname.replace(/(^\/)/,'');
  // ${qtd < 1 ? title : title+"s"}

  useEffect(() => {
    async function loadFollowers() {
      // const token = process.env.REACT_APP_GIT_TOKEN
      // const headers : HeadersInit = {"Authorization" : `${token}`}

      const response = await service.get(followers_url);
      const resFollowers = await response.json();
      setFollower(resFollowers);
    }
    loadFollowers();
  }, [followers_url])

  return (
    <section className="followers">
      <Header title={`${followers} ${title}`}/>
      <ul className="followers__list">
        {
          follower?.map(fol => (
            <Follower key={fol.login} fol={fol}/>
          ))
        }
      </ul>
    </section>  
  )
}

export default Followers;
