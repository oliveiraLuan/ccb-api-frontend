import { useEffect, useState } from "react";
import "./App.css";
import * as hymnService from "./services/hymn-service";
import { Hymn } from "./models/Hymn";
import { HymnDetails } from "./components/HymnDetails";
import logo from "../src/assets/logoccb.png";

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
        if(isValidHymn(hymnNumber)) {
          setHymn(undefined);
          setMessage("Hino não encontrado");
        } else {
          setHymn(undefined);
          setMessage("Digite um hino entre 1 e 480");
        }
      });
  }, [hymnNumber]);

  return (
    <>
      
      <main>
        <img className="logo" src={logo} alt="Logo CCB" />
        <h2>{message}</h2>
        <section>
          <form className="hymnForm">
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
        <section id="result-section" className="result-section">
        {hymn && <HymnDetails hymn={hymn} />}
      </section>
      </main>
    </>
  );

  function handleInputChange(event: any) {
    setHymnNumber(event.target.value);
  }

  function isValidHymn(hymnNumber : number){
    if(hymnNumber >= minValue && hymnNumber <= maxValue) {
        return true;
    }
    return false;
  }
}

export default App;
