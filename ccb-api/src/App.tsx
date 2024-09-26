import './App.css'

function App() {
  const minValue = 1;
  const maxValue = 480;

  return (
  <>
    <h1>CCB API</h1>
    <form className='hymnForm'>
        <label htmlFor="hymnNumber">Digite o número do hino</label>
        <input type="number" min={minValue} max={maxValue}/>
        <button>Buscar</button>
    </form>
  </>);
}

export default App
