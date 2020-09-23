import React from 'react'

import './styles.scss';

import user from '../../../me.jpeg';

import { FiLogOut } from 'react-icons/fi';


import Numbers from '../Number';
import Avatar from '../Avatar/Avatar';


const Profile: React.FC = () => {
  return (
    <main className="profile">

      <header className="header">
        <div className="header__flex">
          <h3 className="header__username heading-tertiary">tgwow</h3>
          <a href="/" className="header__logoff">
            Sair
            <FiLogOut size={24}/>
          </a>
        </div>
      </header>

      <section className="profile__data">

        <div className="avatar-box">
          <Avatar size={12} image={user}/>
        </div>

        <div className="profile__info u-margin-bottom-2">
          <h1 className="profile__username heading-primary u-margin-bottom-1">Thiago Oliveira</h1>
          <p className="">thiago.2809@outlook.com.br</p>
          <p className="">Assis/<span>SP</span></p>
        </div>

        <Numbers/>

        <div className="profile__bio">
          <h2 className="heading-primary u-margin-bottom-1">Bio</h2>
          <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur.</p>
        </div>
      
      </section>

    </main>
  )
}

export default Profile
