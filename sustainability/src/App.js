import "./App.css";
import Header from "./components/header";
import Navbar from "./components/navbar";
import MapComponent from "./components/Map";
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Navbar></Navbar>
      <MapComponent></MapComponent>
    </div>
  );
}

export default App;
