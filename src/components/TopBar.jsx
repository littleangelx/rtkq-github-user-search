import { useState } from "react";

import iconMoon from "/assets/icon-moon.svg";
import iconSun from "/assets/icon-sun.svg";

const TopBar = () => {
  const preferTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
  const [darkMode, setDarkMode] = useState(
    preferTheme === "dark" ? true : false
  );

  const toggleDarkMode = () => {
    const html = document.querySelector("html");
    if (darkMode) {
      html.dataset.theme = "light";
      setDarkMode(false);
    } else {
      html.dataset.theme = "dark";
      setDarkMode(true);
    }
  };

  return (
    <div className="topBar">
      <h1>devfinder</h1>
      <div className="mode" onClick={toggleDarkMode}>
        <p>{darkMode ? "Light" : "Dark"}</p>
        <img src={!darkMode ? iconMoon : iconSun} />
      </div>
    </div>
  );
};

export default TopBar;
