import "./App.css";
import Header from "./components/Header";
import Inicio from "./components/Inicio";
import Sobre from "./components/Sobre";

function App() {
  return (
    <div>
      <Header />
      <div id="inicio"></div>
      <Inicio />
      <div id="sobre"></div>
      <Sobre />
      <div id="servicos"></div>
      <div id="contato"></div>
    </div>
  );
}

export default App;
