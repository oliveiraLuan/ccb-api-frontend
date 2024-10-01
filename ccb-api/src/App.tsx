import { useState } from "react";
import "./App.css";
import * as hymnService from "./services/hymn-service";
import { Hymn } from "./models/Hymn";
import { HymnDetails } from "./components/HymnDetails";

function App() {
  const minValue = 1;
  const maxValue = 480;

  const [hymnNumber, setHymnNumber] = useState<number>(0);
  const [hymn, setHymn] = useState<Hymn>();

  return (
    <>
      <h1>CCB API</h1>
      <main>
        <section>
          <form className="hymnForm">
            <label>Digite o número do hino</label>
            <input
              inputMode="numeric"
              name="hymnNumber"
              type="number"
              min={minValue}
              max={maxValue}
              onChange={handleInputChange}
            />
            <button onClick={HandleButtonSearch}>Buscar</button>
          </form>
        </section>
      </main>

      <section className="result-section">
        {hymn && <HymnDetails hymn={hymn} />}
      </section>
    </>
  );

  function handleInputChange(event: any) {
    setHymnNumber(event.target.value);
  }

  function HandleButtonSearch(event: any) {
    event.preventDefault();

    hymnService
      .findById(hymnNumber)
      .then((response) => {
        setHymn(response.data);
      })
      .catch(() => {
        setHymn(undefined);
      });
  }
}

export default App;
