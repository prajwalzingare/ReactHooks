//This tut is from Thapa technical-https://www.youtube.com/watch?v=5gCtW7RCtQA&t=9s&ab_channel=ThapaTechnical
import { cleanup } from "@testing-library/react";
import React, { useState, useEffect } from "react";

function UseEffect2() {
  const [widthCount, setWidthCount] = useState(window.screen.width);
  const change = () => {
    // console.log(window.innerWidth); yaha pe apneko innerwidth milegi
    setWidthCount(window.innerWidth); //count inner width ke barobar set ho jayega jaise hi ap usko change karoge uski width dikhegi
  };
  useEffect(() => {
    // console.log("render"); exact render hone ke bad run hoga.
    window.addEventListener("resize", change);
    //but jub app elements ke event listner me jao ge to apko dikhega ki har bar jub bhi apan window ko reset karte hai tub tub useefect render hota hai or oo event me store hpta hai jiski vajese browsert crash ho sakta hai ya phir memory lick ho sakti hai. so thats why we have to perform clean up function.
    //this function helps to clean memory from render past function.
    return function cleanup() {
      // console.log("removed"); jais ehi useefect run ho ga uske bad cleanup function run hoga jo event ko remove karega iki vajese memory leak nahi hoti ja website hang nahi hoti.
      window.removeEventListener("resize", change);
    };
  });

  // useEffect(() => {
  //   first;

  //   return () => {
  //     second;
  //   };
  // }, [third]);

  return (
    <div>
      <p>The actual size of the window is</p>
      <h1>{widthCount}</h1>
    </div>
  );
}

export default UseEffect2;
