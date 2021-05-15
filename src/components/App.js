import '../css/App.css';
import { useState } from 'react';
import ResultsList from './results/ResultsList';
import Footer from './Footer';
import Search from './search/Search';
// import SpeciesDetail from './results/SpeciesDetail';

function App() {
  const [loading, setLoading] = useState(false);
  const [apiData, setApiData] = useState(null);
  const [totalResults, setTotalResults] = useState(null);
  // const [selectedSpecies, setSelectedSpecies] = useState(null);
  const [user, setUser] = useState(null);
  // const [coordinates, setcoordinates] = useState(null);
  const [radius, setRadius] = useState(null);
  const [months, setMonths] = useState([]);
  const [taxa, setTaxa] = useState([]);
  const [sortByLeastSeen, setSort] = useState(true);
  const [error, setError] = useState(null);


  async function callINatAPI(query) {
    const url = "https://api.inaturalist.org/v1/observations/species_counts?verifiable=true&rank=species&";
    console.log(`${url}\n${query}`);

    const response = await fetch(`${url}${query}`)
      .then(res => {
        if (!res.ok) throw Error(res.status);
        else return res.json();
      })
      .catch(error => {
        console.error('onRejected function called: ' + error.message);
        setError(error.message);
      });

    if (response) {
      setApiData(response.results.sort((a, b) => a.count - b.count));
      setTotalResults(response.total_results);
    } else {
      setApiData(null);
    }

    setLoading(false);
  };

  const handleSearchSubmit = (e) => {
    setError(null);
    setLoading(true);

    // removes any non number, comma, period or dash. splits at "," ", " or " "
    const coor = e.target.coor.value.replace(/[^0-9\-., ]/g, "").split(/, | |,/);
    const rad = e.target.radius.value || 10;
    const notUser = e.target.user.value;
    let query = `lat=${coor[0]}&lng=${coor[1]}&radius=${rad}`;

    if (notUser.length > 0) {
      setUser(notUser);
      query += `&unobserved_by_user_id=${notUser}`;
    } else {
      setUser(null);
    };

    let taxon = getCheckboxes(e.target.taxa, setTaxa);
    if (taxon.length > 0) query += `&iconic_taxa=${taxon}`;

    let months = getCheckboxes(e.target.months, setMonths);
    if (months.length > 0) query += `&month=${months}`;

    let threatened = e.target.threatened.checked;
    if (threatened) query += "&threatened=true";

    callINatAPI(query);
    // setcoordinates([lat, lng]);
    setRadius(rad);
    setSort(true);
    e.preventDefault();
  };

  const getCheckboxes = (checkboxes, setState) => {
    let checked = [];
    checkboxes.forEach(box => {
      if (box.checked) checked.push(box.value);
    });
    setState(checked);
    return checked.join("%2C");
  };

  const handleSpeciesSelect = (index) => {
    // setSelectedSpecies(apiData[index]);
  };

  const monthPicker = () => {
    const calendar = ["", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let output = [];
    months.forEach(month => {
      output.push(calendar[month]);
    });
    return output.join(", ");
  };

  const sortData = () => {
    if (sortByLeastSeen) {
      setApiData(apiData.sort((a, b) => b.count - a.count));
    } else {
      setApiData(apiData.sort((a, b) => a.count - b.count));
    }
    setSort(!sortByLeastSeen);
  };

  //if (selectedSpecies) {
  //   results = <SpeciesDetail specie={selectedSpecies} onSpeciesSelect={handleSpeciesSelect} />;
  // }

  let userText = user ? `not seen by user ${user} ` : "seen";
  let results = null;
  let monthString = months.length > 0 ? `during ${monthPicker()}` : "year round";
  let sortText = sortByLeastSeen ? "most" : "least";
  let taxaText = taxa.length > 0 ? `${taxa.join(", ").toLowerCase()}` : "all taxa";

  // render errors, loading message or search results
  if (error) {
    results = (error === "422") ? `User ${user} not found, user names are case sensative.` : `Error ${error}.`;
  } else if (loading) {
    results = "Searching for species...";
  } else if (apiData) {
    results = <>
      {totalResults} species from {taxaText} {userText} within {radius} km, {monthString}.
      <br />
      <button onClick={() => sortData()}>Sort by {sortText} common</button>
      <ResultsList species={apiData} onSpeciesSelect={handleSpeciesSelect} />
    </>;
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>What's around here? An iNat app</h1>
        <Search onSearchSubmit={handleSearchSubmit} />
      </header>
      <br /><br />
      {results}
      <Footer />
    </div >
  );
}

export default App;