import React from 'react'

import { FiStar, FiLock, FiUnlock } from 'react-icons/fi'

import './styles.scss';

const Repositorie: React.FC = () => {
  return (
    <li className="repository">
      <a href="" className="repository__link">
        <h2 className="repository__name heading-secondary u-margin-bottom-0">brasilliapp-react-native</h2>
        <p className="repository__desc">Repository for centralization of the BrasiliApp mobile project</p>
      </a>
      <div className="repository__info">
        <div className="repository__stars">
          <FiStar size={18}/> 32
          {/* <span className="repository__stars__icon">
            <>
          </span> */}
        </div>
        <div className="repository__options">
          <FiUnlock size={18}/>
          <FiLock size={18}/>
        </div>
      </div>
    </li>
  )
}

export default Repositorie;
