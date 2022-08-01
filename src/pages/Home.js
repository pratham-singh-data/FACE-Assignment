import React from 'react'
import { Navigate } from 'react-router'

export const Home = ({login}) => {
    if(!login){
        return(<Navigate to="/login"/>);
    }

  return (
    <div>Home</div>
  )
}
