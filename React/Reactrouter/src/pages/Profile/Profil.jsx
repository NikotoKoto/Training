import React from 'react'
import { NavLink, Outlet, useParams, useSearchParams } from 'react-router-dom'

export default function Profil() {
  // const {id,name} = useParams()
  // const [queryParams, setQueryParams] = useSearchParams();
  // console.log(queryParams)
  // console.log(queryParams.get("age"))
  return (
<>
    <ul>
      <li><NavLink end to="">Overview</NavLink></li>
      <li><NavLink  to="data">Data</NavLink></li>
      {/*To keep the scroll level, need to used preventScrollReset into method NavLink*/}
    
    </ul>

    <div className="">
      <h2>Profile</h2>
      <Outlet/>
    </div>
    </>
  )
}
