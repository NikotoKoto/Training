import { lazy, Suspense, useState, useTransition } from "react";

//As an import we need to put function out of function App
// Lazy loading used to render just the component  we need
const ComponentsB = lazy(() => {
  return new Promise((res) => {
    setTimeout(() => {
      res(import("./pages/ComponentsB"));
    }, 3000);
  });
});

const ComponentsA = lazy(() => {
  return new Promise((res) => {
    setTimeout(() => {
      res(import("./pages/ComponentsA"));
    }, 1000);
  });
});

function App() {
  // state
  const [page, setPage] = useState("a");
  // StartTransition used to keep the component render until pending the next component
  const [isPending, startTransition] = useTransition();
  // Comportement
  

  // render
  return (
    <div>
      <button onClick={() => setPage("a")}> Clique sur le composant A </button>
      <button onClick={() => startTransition(() => setPage("b"))}>
        Clique sur le composant B
      </button>
      <Suspense fallback={<h2>Loading A...</h2>}>
        {page === "a" && <ComponentsA />}
        <Suspense fallback={<h2>Loading B...</h2>}>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Exercitationem amet, omnis, labore maxime atque tempore non
            molestiae veniam dolore natus expedita qui fugit ex quidem
            voluptates! Magni magnam sed obcaecati.
          </p>
          {isPending && <small>hi I pending</small>}
          {page === "b" && <ComponentsB />}
        </Suspense>
      </Suspense>
    </div>
  );
}

export default App;
