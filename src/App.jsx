import { useState } from "react";

import MainSection from "./components/MainSection";
import SearchBar from "./components/SearchBar";
import TopBar from "./components/TopBar";

const App = () => {
  const [searchUserName, setSearchUserName] = useState("");

  const handleSearch = (value) => {
    setSearchUserName(value);
  };

  return (
    <div className="app">
      <TopBar />
      <SearchBar onSearch={handleSearch} searchUserName={searchUserName} />
      <main>
        <MainSection searchUserName={searchUserName} />
      </main>
    </div>
  );
};

export default App;
