import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function ChangeTheme() {
  const [theme, setTheme] = useState(() => {
    if (window.matchMedia("(prefers-color-scheme:dark)").matches) {
      return "dark";
    }
    return "light";
  });

  useEffect(() => {
    const htmlCheckBox = document.querySelector(".theme-checkbox");

    if (theme === "dark") {
      document.querySelector("html").classList.add("dark");
      htmlCheckBox.checked = true;
    } else {
      document.querySelector("html").classList.remove("dark");
      htmlCheckBox.checked = false;
    }
  }, [theme]);

  const handleChangeTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <input
      type="checkbox"
      onClick={handleChangeTheme}
      className="theme-checkbox"
    />
  );
}

export default ChangeTheme;
