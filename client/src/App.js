import './App.css';
import { useState } from 'react';

function App() {
  const [apiData, setApiData] = useState(null);

  const callINatAPI = () => {
    fetch(`http://localhost:8080/inat`)
      .then(response => {
        if (response.ok) {
          setApiData(response.json());
        } else {
          console.log(response.statusText);
          throw Error(response.statusText);
        }
      });
  };


  return (
    <div className="App">
      <header className="App-header">
        <h1>iNat app</h1>
      </header>
      {callINatAPI()}
    </div>
  );
}

export default App;
