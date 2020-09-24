import React from 'react'

import './styles.scss'

interface AvatarProps {
  size?: number;
  image?: string;
}

const Avatar: React.FC<AvatarProps> = ({ size, image }) => {

  const avatarStyle = {
    width: `${size ? size : 12}rem`,
    height: `${size ? size : 12}rem`
  }
  //image = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcactusthemes.com%2Fblog%2Fwp-content%2Fuploads%2F2018%2F01%2Ftt_avatar_small.jpg&f=1&nofb=1';
  return (
    <figure className="avatar" style={avatarStyle}>
      <img 
        src={ image }
        alt="Avatar profile" 
        className="avatar__photo"
      />
    </figure>
  )

}

export default Avatar;
