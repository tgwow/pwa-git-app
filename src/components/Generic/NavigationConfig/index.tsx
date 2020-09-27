import React, {useState, useEffect } from 'react';

import Sidebar from "../../Navigation/Sidebar";
import BottomBar from "../../Navigation/BottomBar";

const NavigationConfig: React.FC= () => {
  const [mobile, setMobile] = useState<boolean>(window.innerWidth <= 500);

  let sidebar;

  // sign event listener to my funciton
  useEffect(() => {
    window.addEventListener('resize', resizeScreen)
  }, []);
  // get screen width every screen resize
  function resizeScreen() {
    if (window.innerWidth <= 500 )
      setMobile(true)
    else
      setMobile(false)
  }
  if (!mobile)
    sidebar = ( <Sidebar/> )
  else
    sidebar = ( <BottomBar/> )

  return (
    <>
      {sidebar}
    </>
  )
}

export default NavigationConfig;