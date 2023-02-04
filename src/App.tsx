import "./App.css";

import Header from "./components/layout/header/header";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Header>
        {/* <GeoUser />
        <GeoUserCard /> */}
        {/* <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/topics" element={<GeoUser />} />
        </Routes> */}
      </Header>
    </div>
  );
}

export default App;
