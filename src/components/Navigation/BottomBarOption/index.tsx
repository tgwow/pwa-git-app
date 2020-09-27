import React, {useContext} from 'react'

import './styles.scss';
import NavigationContext, {OptionProps} from "../../../contexts/context.navigation";
import {Link} from "react-router-dom";

const BottomBarOption: React.FC<OptionProps> = (props) => {
  const { Icon, title, id, size } = props;
  const {isActive, setActive } = useContext(NavigationContext);

  return (
    <Link
      to={title.toLocaleLowerCase()}
      className={
        `bottomBarOption 
         ${isActive(id) ? 'bottomBarOption__active' : ''}`}
      onClick={()=>setActive(id)}  
    >
      <Icon size={size}/>
      <span>{title}</span>
    </Link>
  )
}

export default BottomBarOption;
    
