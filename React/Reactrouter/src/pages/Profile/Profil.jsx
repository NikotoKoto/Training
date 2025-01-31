import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function Profil() {
  return (
<>
    <ul>
      <li><NavLink end to="">Overview</NavLink></li>
      <li><NavLink  to="data">Data</NavLink></li>
    
    </ul>

    <div className="">
      <h2>Profile</h2>
      <Outlet/>
    </div>
    </>
  )
}
