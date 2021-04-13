import '../css/App.css';
import { useState } from 'react';
import ResultsList from './ResultsList';
import Footer from './Footer';
import SpeciesDetail from './SpeciesDetail';
import Search from './Search';

function App() {
  const [apiData, setApiData] = useState(null);
  const [selectedSpecies, setSelectedSpecies] = useState(null);
  // loading flag set to false to check for loading

  async function callINatAPI(query) {
    console.log("api call");
    const url = "https://api.inaturalist.org/v1/observations/species_counts?verifiable=true&hrank=species&";
    console.log(`${url}${query}`);
    const response = await fetch(`${url}${query}`).then(x => x.json());

    console.log(response.total_results);
    console.log(response);
    setApiData(response);
  };

  // unobserved_by_user_id=1762669

  const handleSearchSubmit = (event) => {
    const lng = event.target.lng.value;
    const lat = event.target.lat.value;
    const radius = event.target.radius.value || 80;
    const user = event.target.user.value;
    let query = `lat=${lat}&lng=${lng}&radius=${radius}`;
    if (user.length > 0) query += `&unobserved_by_user_id=${user}`;
    callINatAPI(query);
    console.log("yup");
    event.preventDefault();
  };
  // &iconic_taxa=Actinopterygii%2CAnimalia%2CAmphibia%2CArachnida%2CAves%2CChromista%2CFungi%2CInsecta%2CMammalia%2CMollusca%2CReptilia%2CPlantae%2CProtozoa%2Cunknown

  const handleSpeciesSelect = (index) => {
    console.log(index);
    setSelectedSpecies(apiData.results[index]);
    console.log(selectedSpecies);
  };

  let button = <Search onSearchSubmit={handleSearchSubmit} />;

  let results = null;
  if (selectedSpecies) {
    results = <SpeciesDetail specie={selectedSpecies} onSpeciesSelect={handleSpeciesSelect} />;
  } else if (apiData) {
    results = <ResultsList species={apiData.results.sort((a, b) => a.count - b.count)} onSpeciesSelect={handleSpeciesSelect} />;
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>iNat app</h1>
        {button}
      </header>
      {results}
      <Footer />
    </div >
  );
}

export default App;
