import React from 'react'
import { IconType } from 'react-icons';

import { Link } from 'react-router-dom'

import './styles.scss';

interface BottomBarProps {
  Icon: IconType;
  size: number;
  active?: boolean;
}

// eslint-disable-next-line react/prop-types
const BottomBarOption: React.FC<BottomBarProps> = (props) => {
  const { active, Icon, size } = props;
  return (
    <a className={`bottomBarOption ${active}`} >
      <Icon size={size} />
    </a>
  )
}

export default BottomBarOption;
    
