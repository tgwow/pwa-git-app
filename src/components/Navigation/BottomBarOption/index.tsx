import React from 'react'
import { IconType } from 'react-icons';

import { Link } from 'react-router-dom'

import './styles.scss';

interface BottomBarProps {
  Icon: IconType;
  size: number;
  active?: boolean;
}

const BottomBarOption: React.FC<BottomBarProps> = ({ Icon, size, active }) => {
  return (
    <a className={`bottomBarOption ${active}`} >
        <Icon size={size} />
    </a>
  )
}

export default BottomBarOption;
    
