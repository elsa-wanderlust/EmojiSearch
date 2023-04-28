import { useState } from "react";
import "./App.css";
import data from "./assets/data.json";
import Search from "./Components/Search";
import Line from "./Components/Line";
import Footer from "./Components/Footer";

const footerDetails = {
  framework: "React",
  school: "Le Reacteur",
  developper: "Brice",
};

function App() {
  const [search, setSearch] = useState(""); // why can it be placed above the function app
  return (
    <div className="page">
      <div className="container">
        <header className="header">😎 EmojiSearch 😎</header>
        <Search search={search} setSearch={setSearch} />
        <Line value={search.toLowerCase()} data={data} />
        <Footer footerDetails={footerDetails} />
      </div>
    </div>
  );
}

export default App;
