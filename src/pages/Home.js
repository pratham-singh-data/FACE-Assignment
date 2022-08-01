import React from 'react'
import { Navigate } from 'react-router'
import { MainHomeContent } from '../components/MainHomeContent';

export const Home = ({login}) => {
    if(!login){
        return(<Navigate to="/login"/>);
    }

  return (
    <div>
        <MainHomeContent/>
    </div>
  )
}
