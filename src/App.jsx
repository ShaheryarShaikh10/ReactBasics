import Header from "./components/Header/Header.jsx";
import CoreConceptComponent from "./components/CoreConceptComponent.jsx"
import ExampleComponent from "./components/Examples.jsx"
function App() {

  return (
    <>
      <Header />
      <main>
        <CoreConceptComponent/>
        <ExampleComponent/>
      </main>
    </>
  );
}

export default App;
