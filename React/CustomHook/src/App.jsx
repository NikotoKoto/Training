// import { useTrackMouse } from './hooks/useTrackMouse'
import { useFetchData } from './hooks/useFetchData';
import styled from 'styled-components';

function App() {
  // call the use custom reusable
const {data: recipes, isLoading} = useFetchData(`https://restapi.fr/api/recipes`);

  return (
   <AppStyled >

    {isLoading ?
    <p>Chargement ...</p>
    :<ul>{recipes.map((r) => <li key={r._id}>{r.title}</li>)}</ul>
}

   </AppStyled>
  )
}



// function App() {

//   const position = useTrackMouse();
//   return (
//    <AppStyled >

//     <h1>x : {position.x} | y : {position.y}</h1>

//    </AppStyled>
//   )
// }

export default App

const AppStyled = styled.div `
  
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;

`
