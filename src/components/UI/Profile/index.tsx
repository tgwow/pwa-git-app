import React, {useContext, useEffect} from 'react'

import { useParams } from "react-router-dom";

import './styles.scss';

import { FiLogOut } from 'react-icons/fi';

import Numbers from '../Number';
import Avatar from '../Avatar/Avatar';

import avatar from '../../../assets/default-avatar.png';
import AuthContext from "../../../contexts/auth";

const Profile: React.FC = () => {
  const { logOut, user, setUser} = useContext(AuthContext);
  const { userParam } = useParams();

  useEffect(() => {
    async function loadUserData() {
      const url = process.env.REACT_APP_GIT_URL;
      if (userParam) {
        const data = await fetch(url+userParam)
        const follower = await data.json();
        setUser(follower)
      }
    }
    loadUserData();
  }, [userParam, setUser]);

  function handleLogout () {
    logOut();
  }

  function isNull(field : string | undefined) {
    return field? '' : 'hidden';
  }

  return (
    <main className="profile">

      <header className="header">
        <div className="header__flex">
          <h3 className="header__username heading-tertiary">{user?.login}</h3>
          <a onClick={handleLogout} className="header__logoff">
            Sair
            <FiLogOut size={24}/>
          </a>
        </div>
      </header>

      <section className="profile__data">

        <div className="avatar-box">
          <Avatar size={12} image={user ? user.avatar_url : avatar}/>
        </div>

        <div className="profile__info u-margin-bottom-2">
          <h1 className={`
                profile__username
                heading-primary
                u-margin-bottom-1 
                ${isNull(user?.location)}
              `}>{user?.name}
          </h1>
          <p className={isNull(user?.email)}>{user?.email}</p>
          <p className={isNull(user?.location)}>{user?.location}</p>
        </div>

        <Numbers />

        <div className="profile__bio">
          <h2 className="heading-primary u-margin-bottom-1">Bio</h2>
          <p className={isNull(user?.bio)}>{user?.bio}</p>
        </div>
      
      </section>

    </main>
  )
}

export default Profile
