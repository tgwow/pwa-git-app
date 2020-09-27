import React, {useContext} from 'react'

import './styles.scss';
import NavigationContext from "../../../contexts/context.navigation";
import BottomBarOption from "../BottomBarOption";

const BottomBar: React.FC = () => {
  const { data } = useContext(NavigationContext);

  return (
    <nav className="bottomBar">
      <ul className="bottomBar__list">
        {
          data.map(optData => (
            <BottomBarOption key={optData.id} size={24} id={optData.id} title={optData.title} Icon={optData.Icon} />
          ))
        }
      </ul>
    </nav>
  )
}

export default BottomBar;
