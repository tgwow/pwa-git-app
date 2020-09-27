import React, {createContext, useState} from 'react'

import {FiGithub, FiHome, FiUser, FiUsers} from "react-icons/fi";
import {IconType} from "react-icons";

export interface OptionProps {
  id: number;
  Icon: IconType,
  title: string,
  size: number
}
export interface NavigationContextProps {
  data: OptionProps[];
  isActive(id: number): boolean
  setActive(optionId:number): void
}

const NavigationContext = createContext<NavigationContextProps>({} as NavigationContextProps);

export const NavigationProvider: React.FC = ({children}) => {
  const [selected, setSelected] = useState({optionId : 1});

  function isActive(id: number) {
    return selected.optionId === id;
  }
  function setActive(id : number) {
    setSelected({optionId : id})
  }

  const data:OptionProps[] = [
    { id: 1, Icon: FiHome, title: "Home", size:32},
    { id: 2, Icon: FiGithub, title: "Repos", size:32 },
    { id: 3, Icon: FiUser, title: "Seguidores", size:32 },
    { id: 4, Icon: FiUsers, title: "Seguindo", size:32},
  ];

  return (
    <NavigationContext.Provider value={{data, isActive, setActive}}>
      {children}
    </NavigationContext.Provider>
  )
}

export default NavigationContext;