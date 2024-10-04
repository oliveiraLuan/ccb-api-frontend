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
  const [message, setMessage] = useState<string>(""); 

  useEffect(() => {
    hymnService
      .findById(hymnNumber)
      .then((response) => {
        setHymn(response.data);
        setMessage("");
      })
      .catch(() => {
        if(hymnNumber >= minValue && hymnNumber <= maxValue) {
          setHymn(undefined);
          setMessage("Hino não encontrado");
        }
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
            <h2>{message}</h2>
          </form>
        </section>
        <section id="result-section" className="result-section">
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
