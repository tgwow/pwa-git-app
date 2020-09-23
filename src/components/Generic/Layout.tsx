import React from 'react'
import Sidebar from '../Navigation/Sidebar'

import BottomBar from '../Navigation/BottomBar';

interface SidebarProps  {
  loggedIn : boolean
}

const Layout: React.FC<SidebarProps> = ({ children, loggedIn}) => {
  let layout;
  if(loggedIn) {
    layout = (  
      <> 
        <Sidebar loggedIn={loggedIn}/>
        {children}
        <BottomBar/>
      </>
    )
  }
  else {
    layout = (
      <>
        {children}
      </>
    )
  }
  return layout;
}

export default Layout;
