import React from 'react'
import { Outlet } from 'react-router-dom'


const Dashboard = () => {
  return (
    <div>
      <div>Dashboard</div>
      <Outlet/>
    </div>
  )
}

export default Dashboard