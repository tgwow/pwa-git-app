import React from 'react';

import './syles.scss';

const Wrapper: React.FC = ({children}) => {
  return (
    <div className="app">
      {children}
    </div>
  )
}

export default Wrapper;