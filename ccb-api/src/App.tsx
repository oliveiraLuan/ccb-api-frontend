import { useEffect, useState } from "react";
import "./App.css";
import * as hymnService from "./services/hymn-service";
import { Hymn } from "./models/Hymn";
import { HymnDetails } from "./components/HymnDetails";

function App() {
  const minValue = 1;
  const maxValue = 480;

  const [hymnNumber, setHymnNumber] = useState<number>(0);
  const [hymn, setHymn] = useState<Hymn>();

  useEffect(() => {
    hymnService
      .findById(hymnNumber)
      .then((response) => {
        setHymn(response.data);
      })
      .catch(() => {
        setHymn(undefined);
      });
  }, [hymnNumber]);

  return (
    <>
      
      <main>
        <h1>Hinário CCB</h1>
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
          </form>
        </section>
        <section className="result-section">
        {hymn && <HymnDetails hymn={hymn} />}
      </section>
      </main>
    </>
  );

  function handleInputChange(event: any) {
    setHymnNumber(event.target.value);
  }
}

export default App;
