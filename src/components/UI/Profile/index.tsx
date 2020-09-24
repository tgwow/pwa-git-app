import React, {useContext} from 'react'

import './styles.scss';

import { FiLogOut } from 'react-icons/fi';

import Numbers from '../Number';
import Avatar from '../Avatar/Avatar';

import AuthContext from "../../../contexts/auth";

const Profile: React.FC = () => {
  const { logOut, user } = useContext(AuthContext);

  function handleLogout () {
    logOut();
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
          <Avatar size={12} image={user ? user.avatar_url : 'asdasd'}/>
        </div>

        <div className="profile__info u-margin-bottom-2">
          <h1 className="profile__username heading-primary u-margin-bottom-1">{user?.name}</h1>
          <p className="">{user?.email}</p>
          <p className="">{user?.company}/<span>SP</span></p>
        </div>

        <Numbers />

        <div className="profile__bio">
          <h2 className="heading-primary u-margin-bottom-1">Bio</h2>
          <p>{user?.bio}</p>
        </div>
      
      </section>

    </main>
  )
}

export default Profile
