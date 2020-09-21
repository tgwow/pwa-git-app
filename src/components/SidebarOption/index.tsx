import React from 'react'

// import './styles.scss';

// interface of icons
import { IconType } from 'react-icons/lib/esm';

interface OptionProps {
  Icon: IconType,
  title: string
}

const SidebarOption: React.FC<OptionProps> = ({ Icon, title }) => {
  return (
    <div className="sidebarOption">
      <Icon/>
      <h2> { title } </h2>
    </div>
  )
}

export default SidebarOption;
