import { useState } from "react";
import "./App.css";
import data from "./assets/data.json";
import Search from "./Components/Search";
import Line from "./Components/Line";
import Footer from "./Components/Footer";

function App() {
  const [search, setSearch] = useState("");
  return (
    <div className="page">
      <header className="header">😎 EmojiSearch 😎</header>
      <Search search={search.toLowerCase()} setSearch={setSearch} />
      <Line value={search} data={data} />
      <Footer />
    </div>
  );
}

export default App;
