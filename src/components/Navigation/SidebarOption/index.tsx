import React, {useContext} from 'react'

import './styles.scss';
import NavigationContext, {OptionProps} from "../../../contexts/context.navigation";
import {Link} from "react-router-dom";

const SidebarOption:React.FC<OptionProps> = (props) => {
  const { Icon, title, id, size } = props;

  const { isActive, setActive } = useContext(NavigationContext);
  return (
    <Link
      to={`/${title.toLocaleLowerCase()}`}
      className={`sidebarOption ${isActive(id) ? 'sidebarOption__active' : ''} `}
      onClick={() =>setActive(id)}
    >
      <Icon size={size} />
      <h2> { title } </h2>
    </Link>
  )
}
export default SidebarOption;