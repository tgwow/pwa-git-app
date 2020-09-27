import React, { useContext } from 'react';

import './styles.scss';

import SidebarOption  from '../SidebarOption';
import NavigationContext from "../../../contexts/context.navigation";

const Sidebar: React.FC = () => {

  const { data } = useContext(NavigationContext);

  return (
    <nav className="sidebar">
      {
        data.map(opt=> (
          <SidebarOption key={opt.id} id={opt.id} title={opt.title} size={opt.size} Icon={opt.Icon}/>
        ))
      }
    </nav>
  )
}

export default Sidebar;