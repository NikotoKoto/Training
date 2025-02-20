import React, { useEffect, useState } from 'react'

export default function HomePage() {
  const [recipes, setRecipes] = useState([])

  const fetchRecipes = async() => {
    const response = await fetch('https://restapi.fr/api/recipes')
    if(response.ok){
      const body = await response.json();
      setRecipes(body)
    }
  }

 useEffect(() => {
   fetchRecipes();
 }, [])
 
  return (
    <>
    <h2>Home page</h2>
    <ul>{recipes && recipes.map((r) => <li key={r.id}>{r.title}</li>)}</ul>
    </>

  )
}
