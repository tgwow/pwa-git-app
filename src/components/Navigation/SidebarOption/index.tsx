import React from 'react'

import './styles.scss';

import { Link } from 'react-router-dom';

// interface of icons
import { IconType } from 'react-icons/lib/esm';

interface OptionProps {
  Icon: IconType,
  title: string,
  active?: boolean
}

const SidebarOption: React.FC<OptionProps> = ({ Icon, title, active }) => {
  return (
    <Link to={title.toLocaleLowerCase()} className={`sidebarOption ${active && 'sidebarOption__active'}`}>
      <Icon size={32}/>
      <h2> { title } </h2>
    </Link>
  )
}

export default SidebarOption;
