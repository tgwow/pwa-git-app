import React from 'react';

import { FiGithub, FiHome, FiUser } from 'react-icons/fi';

import './styles.scss';

import SidebarOption from '../SidebarOption';

interface SidebarProps  {
  loggedIn : boolean
}

const Sidebar: React.FC<SidebarProps> = ({children, loggedIn }) => {
  return (
    <>
      <nav className="sidebar">
        <SidebarOption Icon={FiHome} title="Home" active={true}/> 
        <SidebarOption Icon={FiGithub} title="Repos"/>
        <SidebarOption Icon={FiUser} title="Seguidores"/> 
        <SidebarOption Icon={FiUser} title="Seguindo"/> 
      </nav>
      {children}
    </>
  ) 
}

export default Sidebar;