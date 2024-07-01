import React from "react";
import HooksUseState from "../components/HooksUseState";
import HookUseReducer from "../components/HookUseReducer";
import HooksUseEffect from "../components/HooksUseEffect";
import HookUseContext from "../components/HookUseContext";
import HookUseRef from "../components/HookUseRef";
import HookUseMemo from "../components/HookUseMemo";
import HookUseLayoutEffect from "../components/HookUseLayoutEffect";

//useContext
import { useContext } from "react";
import { SomeContext } from "../components/HookUseContext";
import HookCustom from "../components/HookCustom";

const Home = () => {
  const { contextValue } = useContext(SomeContext);

  return (
    <div>
      <HooksUseState />
      <HookUseReducer />
      <HooksUseEffect />
      <HookUseContext />
      <h2>useContext</h2>
      <p>Valor do contexto: {contextValue}</p>
      <hr />
      <HookUseRef />
      <HookUseMemo />
      <HookUseLayoutEffect />
      <HookCustom />
    </div>
  );
};

export default Home;
