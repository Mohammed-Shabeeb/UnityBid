import React from 'react'
import "./CommunityCard.css"

const CommunityCard = ({details}) => {
  return (
    <div className='community-card'>
        <img src={details.logo} alt="logo" />
        <h4>{details.title}</h4>
    </div>
  )
}

export default CommunityCard
