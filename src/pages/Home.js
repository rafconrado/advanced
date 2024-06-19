import React from "react";
import HooksUseState from "../components/HooksUseState";
import HookUseReducer from "../components/HookUseReducer";
import HooksUseEffect from "../components/HooksUseEffect";
import HookUseContext from "../components/HookUseContext";

const Home = () => {
  return (
    <div>
      <HooksUseState />
      <HookUseReducer />
      <HooksUseEffect />
      <HookUseContext />
    </div>
  );
};

export default Home;
