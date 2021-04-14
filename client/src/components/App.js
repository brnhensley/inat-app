import '../css/App.css';
import { useState } from 'react';
import ResultsList from './ResultsList';
import Footer from './Footer';
import SpeciesDetail from './SpeciesDetail';
import Search from './Search';

function App() {
  const [apiData, setApiData] = useState(null);
  const [selectedSpecies, setSelectedSpecies] = useState(null);
  const [user, setUser] = useState(null);      // remove direct ID before hosting
  // const [coordinates, setcoordinates] = useState(null);
  const [radius, setRadius] = useState(null);

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
    const rad = event.target.radius.value || 40;
    const notUser = event.target.user.value || "1762669"; // DELETE LATER
    let query = `lat=${lat}&lng=${lng}&radius=${rad}`;

    let taxa = getTaxa(event.target.Taxa);
    console.log(taxa);
    if (notUser.length > 0) {
      setUser(notUser);
      query += `&unobserved_by_user_id=${notUser}`;
    };

    if (taxa.length > 0) query += `&iconic_taxa=${taxa}`;

    callINatAPI(query);
    // setcoordinates([lat, lng]);
    setRadius(rad);
    // console.log(event.target);
    event.preventDefault();
  };
  // &iconic_taxa=Actinopterygii%2CAnimalia%2CAmphibia%2CArachnida%2CAves%2CChromista%2CFungi%2CInsecta%2CMammalia%2CMollusca%2CReptilia%2CPlantae%2CProtozoa%2Cunknown

  const getTaxa = (checkboxes) => {
    let checked = [];
    checkboxes.forEach(box => {
      // console.log(box);
      if (box.checked) {
        checked.push(box.value);
      }
    });
    return checked.join("%2C");
  };

  const handleSpeciesSelect = (index) => {
    console.log(index);
    setSelectedSpecies(apiData.results[index]);
    console.log(selectedSpecies);
  };
  let userText = user ? `by user #${user} ` : null;

  let results = null;
  if (selectedSpecies) {
    results = <SpeciesDetail specie={selectedSpecies} onSpeciesSelect={handleSpeciesSelect} />;
  } else if (apiData) {
    results = <>
      Species not seen {userText}within {radius} km.
      <ResultsList species={apiData.results.sort((a, b) => a.count - b.count)} onSpeciesSelect={handleSpeciesSelect} />
    </>;
  }


  return (
    <div className="App">
      <header className="App-header">
        <h1>iNat app</h1>
        <Search onSearchSubmit={handleSearchSubmit} />
      </header>
      {results}
      <Footer />
    </div >
  );
}

export default App;
