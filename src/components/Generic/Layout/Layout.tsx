import React from 'react'

import NavigationConfig from "../NavigationConfig";
import {NavigationProvider} from "../../../contexts/context.navigation";

interface SidebarProps  {
  loggedIn : boolean
}

const Layout: React.FC<SidebarProps> = ({ children, loggedIn}) => {
  let layout;
  if(loggedIn) {
    layout = (  
      <> 
        <NavigationProvider>
          <NavigationConfig/>
        </NavigationProvider>
        {children}
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
