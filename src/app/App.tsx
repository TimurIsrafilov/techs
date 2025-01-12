import { Suspense, useContext, useState } from "react";
import { Route, Routes, Link } from "react-router-dom";
import "./styles/index.scss";

import { About } from "pages/About/index";
import { Main } from "pages/Main/index";
import { ThemeContext } from "./providers/ThemeProvider/lib/ThemeContext";
import { useTheme } from "app/providers/ThemeProvider/lib/useTheme";
import { classNames } from "shared/lib/helpers/classNames/classNames";

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

      <Link to={"/about"}>to about</Link>
      <Link to={"/main"}>to main</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={"about"} element={<About />} />
          <Route path={"main"} element={<Main />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
