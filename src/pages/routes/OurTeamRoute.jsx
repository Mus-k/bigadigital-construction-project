import React from 'react'
import { OurTeam } from '../OurTeam'

export const OurTeamRoute = () => {
  return (
    <div>
       <div className="route">
        <h1 className="titleRoute">About us</h1>
        <p>
          Home <span>/</span>About
        </p>
      </div>
      <OurTeam/>
    </div>
  )
}
