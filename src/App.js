import "./App.css";
import { Routes, Route } from "react-router-dom";
import Form from "./Components/Form/Form";
import Card from "./Components/Card/Card";
import NavBar from "./Components/Navbar/Navbar";


function App() {
  return (
    <div className="App">
      <>
      <NavBar />
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/card" element={<Card />} />
        </Routes>
      </>
    </div>
  );
}

export default App;
