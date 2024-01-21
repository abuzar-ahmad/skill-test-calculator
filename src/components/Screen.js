import React, { useContext } from "react";
import { CalcContext } from "../context/CalcContext";

const Screen = () => {
  const { calc } = useContext(CalcContext);



  // const fontSize = calc.num ? `${24 / calc.num.toString().length}vw` : '5vw';
  const fontSize = "2vw";
  console.log(calc.num);
  console.log(calc.num.toString().length);
  console.log(30/ calc.num.toString().length);

  return (
    <div className="screen" style={{ fontSize }}>
      {calc.num ? calc.num : calc.res}
    </div>
  );
};

export default Screen;
