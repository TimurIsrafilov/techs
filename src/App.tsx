import { Suspense, useContext, useState } from "react";
import { Route, Routes, Link } from "react-router-dom";
import "./styles/index.scss";
import { Counter } from "./components/Counter";
import Main from "./pages/Main/Main";
import About from "./pages/About/About";
import { AboutAsync } from "./pages/About/About.async";
import { MainAsync } from "./pages/Main/Main.async";
import { ThemeContext } from "./styles/theme/ThemeContext";
import { useTheme } from "./styles/theme/useTheme";
import { classNames } from "./helpers/classNames/classNames";

export enum Theme {
  LIGHT = "light",
  DARK = "dark",
}

const App = () => {
  const { toggleTheme, theme } = useTheme();

  return (
    <div className={classNames("app", { we: false }, [theme])}>
      <button type="button" onClick={toggleTheme}>
        Change Theme
      </button>
      <Counter />
      <Link to={"/about"}>to about</Link>
      <Link to={"/main"}>to main</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={"about"} element={<AboutAsync />} />
          <Route path={"main"} element={<MainAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
