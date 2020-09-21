import React from 'react';

import { FiGithub, FiHome, FiUser } from 'react-icons/fi';


import SidebarOption from '../SidebarOption';

const Sidebar = () => {
  return (
    <section className="sidebar">
      <SidebarOption Icon={FiHome} title="Home"/> 
      <SidebarOption Icon={FiGithub} title="Repos"/>
      <SidebarOption Icon={FiUser} title="Seguidores"/> 
      <SidebarOption Icon={FiUser} title="Seguindo"/> 
    </section>
  ) 
}

export default Sidebar;