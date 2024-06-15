import React from "react";
import HooksUseState from "../components/HooksUseState";
import HookUseReducer from "../components/HookUseReducer";
import HooksUseEffect from "../components/HooksUseEffect";

const Home = () => {
  return (
    <div>
      <HooksUseState />
      <HookUseReducer />
      <HooksUseEffect />
    </div>
  );
};

export default Home;
