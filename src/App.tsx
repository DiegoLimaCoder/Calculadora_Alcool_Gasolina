import "./App.css";

import logoImg from "./assets/logo.png";

function App() {
  return (
    <>
      <div className="container">
        <img className="logo" src={logoImg} alt="logo da gasolina x Álcool" />
        <h1 className="title">Qual é a melhor opção ?</h1>
        <form className="form">
          <label>Álcool (Preço por litro):</label>
          <input
            type="number"
            placeholder="4,90"
            className="input"
            min="1"
            step="0.1"
            required
          />
          <label>Gasolina (Preço por litro):</label>
          <input
            type="number"
            placeholder="4,90"
            className="input"
            min="1"
            step="0.1"
            required
          />
          <input className="button" type="submit" value="Calcular" />
        </form>
      </div>
    </>
  );
}

export default App;
