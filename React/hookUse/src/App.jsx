import { lazy, Suspense } from "react"

const fetchCocktails = async() => {
  const response = await fetch('https://restapi.fr/acocktails')
  return  response.json();
} 

const ComposantA = lazy(()=> {
  new Promise((res) => 
  setTimeout(()=> res(import("./components/pages/ComponentsA")),3000))
})
function App() {
// state


// behavior

// render
  return (
    <div className="container">
      <Suspense>
        <ComposantA fetchCocktails={fetchCocktails()}/>
      </Suspense>
    </div>
  )
}

export default App
