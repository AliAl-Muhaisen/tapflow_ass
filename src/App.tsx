import "./App.css";
import GeoUser from "./components/geoUser/geoUser";
import GeoUserCard from "./components/geoUser/geoUserCard";
import Header from "./components/layout/header/header";
function App() {
  return (
    <div className="App">
      <Header/>
      <GeoUser />
      <GeoUserCard/>
    </div>
  );
}

export default App;
