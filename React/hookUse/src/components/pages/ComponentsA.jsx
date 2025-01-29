
import { use } from 'react'


export default function ComponentsA({fetchCocktails}) {
    // state
const cocktails = use(fetchCocktails)
    // behavior

    // render
  return (
    <div><ul>{cocktails.map((c) => <li>{c.name}</li>)}</ul></div>
  )
}
