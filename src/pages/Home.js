import React from "react";
import HooksUseState from "../components/HooksUseState";
import HookUseReducer from "../components/HookUseReducer";
import HooksUseEffect from "../components/HooksUseEffect";
import HookUseContext from "../components/HookUseContext";
import HookUseRef from "../components/HookUseRef";

//useContext
import { useContext } from "react";
import { SomeContext } from "../components/HookUseContext";

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
    </div>
  );
};

export default Home;
