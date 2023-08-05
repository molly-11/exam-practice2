/* eslint-disable react/react-in-jsx-scope */
import "./App.css";
import BeerCards from "./components/BeerCards";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div id="mainDiv">

      <BeerCards/>
      </div>
      
    </div>
  );
}

export default App;
