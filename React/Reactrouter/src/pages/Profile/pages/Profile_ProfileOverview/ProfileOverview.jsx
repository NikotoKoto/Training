import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function ProfileOverview() {
  const navigate = useNavigate();
  const navigateToData = () => {
    navigate("data")
  }
  return (
    <>
    <h3>ProfileOverview</h3>
    <button onClick={navigateToData}>data</button>
    </>
  )
}
