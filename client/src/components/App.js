import '../css/App.css';
import { useState } from 'react';
import ResultsList from './ResultsList';
import Footer from './Footer';
import SpeciesDetail from './SpeciesDetail';
import Search from './Search';

function App() {
  const [loading, setLoading] = useState(false);
  const [apiData, setApiData] = useState(null);
  const [totalResults, setTotalResults] = useState(null);
  const [selectedSpecies, setSelectedSpecies] = useState(null);
  const [user, setUser] = useState(null);      // remove direct ID before hosting
  // const [coordinates, setcoordinates] = useState(null);
  const [radius, setRadius] = useState(null);
  const [months, setMonths] = useState([]);
  const [taxa, setTaxa] = useState([]);
  const [sortByLeastSeen, setSort] = useState(true);

  const calendar = ["", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  // loading flag set to false to check for loading

  async function callINatAPI(query) {
    console.log("api call");
    const url = "https://api.inaturalist.org/v1/observations/species_counts?verifiable=true&rank=species&";
    console.log(`${url}\n${query}`);
    const response = await fetch(`${url}${query}`)
      .then(res => {
        if (!res.ok) throw Error(res.status);
        else return res.json();
      })
      .catch(error => {
        console.error('onRejected function called: ' + error.message);
      });

    if (response) {
      setApiData(response.results.sort((a, b) => a.count - b.count));
      setTotalResults(response.total_results);
    }
    setLoading(false);
  };

  // add endangered option threatened=true
  const handleSearchSubmit = (event) => {
    setLoading(true);
    // removes any non number, comma, periof or dash. splits at ",", ", " or " "
    // replace may be useless if input won't allow ()
    const coor = event.target.coor.value.replace(/[^0-9\-., ]/g, "").split(/, | |,/);
    const rad = event.target.radius.value || 10;
    const notUser = event.target.user.value;// || "1762669";                               // DELETE LATER
    let query = `lat=${coor[0]}&lng=${coor[1]}&radius=${rad}`;

    if (notUser.length > 0) {
      setUser(notUser);
      query += `&unobserved_by_user_id=${notUser}`;
    };

    let taxa = getCheckboxes(event.target.taxa, setTaxa);
    if (taxa.length > 0) query += `&iconic_taxa=${taxa}`;

    let months = getCheckboxes(event.target.months, setMonths);
    if (months.length > 0) query += `&month=${months}`;

    let threatened = event.target.threatened.checked;
    if (threatened) query += "&threatened=true";

    callINatAPI(query);
    // setcoordinates([lat, lng]);
    setRadius(rad);
    setSort(true);
    event.preventDefault();
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
    console.log(index);
    setSelectedSpecies(apiData[index]);
    console.log(selectedSpecies);
  };

  const monthPicker = () => {
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

  let userText = user ? `not seen by user ${user} ` : "seen";
  let results = null;
  let monthString = months.length > 0 ? `During ${monthPicker()}.` : "Year round.";
  let sortText = sortByLeastSeen ? "most" : "least";

  //if (selectedSpecies) {
  //   results = <SpeciesDetail specie={selectedSpecies} onSpeciesSelect={handleSpeciesSelect} />;
  // }

  if (loading) {
    results = "Searching for species...";
  } else if (apiData) {
    results = <>
      {totalResults} species {userText} within {radius} km. {monthString}
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
