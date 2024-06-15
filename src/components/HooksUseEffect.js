import { useEffect, useState } from "react";

const HooksUseEffect = () => {
  //1- useEffect no dependecies
  useEffect(() => {
    console.log("Estou sendo executado");
  });

  const [number, setNumber] = useState(1);

  const changeSomething = () => {
    setNumber(number + 1);
  };

  //2- array of dependencies empty
  useEffect(() => {
    console.log("Serie executado apenas uma vez");
  }, []);

  //3- item in array of dependencies
  const [anotherNumber, setAnotherNumber] = useState(0);

  useEffect(() => {
    if (anotherNumber > 0) {
      console.log("Sou executado apenas quando o AnotherNumber muda");
    }
  }, [anotherNumber]);

  //4- cleanup of useEffect
  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("Hello Word");
    }, 2000);

    return () => clearTimeout(timer);
  }, [anotherNumber]);

  return (
    <div>
      <h2>useEffect</h2>
      <p>Number: {number}</p>
      <button onClick={changeSomething}>Executar!</button>
      <p>Another Number: {anotherNumber}</p>
      <button onClick={() => setAnotherNumber(anotherNumber + 1)}>
        Mudar anotherNumber!
      </button>
      <hr />
    </div>
  );
};

export default HooksUseEffect;
