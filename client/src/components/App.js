import '../css/App.css';
import { useState } from 'react';
import ResultsList from './ResultsList';
import Footer from './Footer';

function App() {
  const [apiData, setApiData] = useState(null);
  const [selectedSpecies, setSelectedSpecies] = useState(null);
  // loading flag set to false to check for loading

  async function callINatAPI() {
    const response = await fetch(`http://localhost:8080/api`).then(x => x.json());
    setApiData(response);
  };

  const searchSubmit = (event) => {
    event.preventDefault();
    callINatAPI();
  };

  const handleSpeciesSelect = (index) => {
    console.log(index);
    setSelectedSpecies(apiData.results[index]);
    console.log(selectedSpecies);
  };

  let button = <form onSubmit={searchSubmit}>
    <button type="submit">search</button>
  </form>;

  let results = apiData ?
    <ResultsList species={apiData.results} onSpeciesSelect={handleSpeciesSelect} /> :
    null;

  return (
    <div className="App">
      <header className="App-header">
        <h1>iNat app</h1>
      </header>
      {apiData ? results : button}
      <Footer />
    </div >
  );
}

export default App;
