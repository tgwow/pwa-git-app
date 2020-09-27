import React from 'react'

import { FiStar, FiLock, FiUnlock } from 'react-icons/fi'

import './styles.scss';

import { Repo } from '../../../pages/Repositories';

const Repository: React.FC<Repo> = ({rep } : Repo) => {
  const {id, name, description, stargazers_count, html_url } = rep;

  return (
    <li key={id} className="repository">
      <a href={html_url} target="_blank" rel="noopener noreferrer" className="repository__link">
        <h2 className="repository__name heading-secondary u-margin-bottom-0">{name}</h2>
        <p className="repository__desc">{description}</p>
      </a>
      <div className="repository__info">
        <div className="repository__stars">
          <FiStar size={18}/> {stargazers_count}
        </div>
        <div className="repository__options">
          <FiUnlock size={18}/>
          <FiLock size={18}/>
        </div>
      </div>
    </li>
  )
}

export default Repository;
