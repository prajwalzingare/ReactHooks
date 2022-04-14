import React, { useCallback, useState } from "react";
import Button from "./Button";
import Count from "./Count";
import Title from "./Title";
//link for more info must read this most healpful-https://www.sitepoint.com/implement-memoization-in-react-to-improve-performance/#:~:text=In%20the%20context%20of%20a,will%20return%20the%20cached%20result.
//link for video-https://www.youtube.com/watch?v=IL82CzlaCys&t=86s&ab_channel=Codevolution
function ParentComponent() {
  const [age, setAge] = useState(24);
  const [salary, setSalary] = useState(700000);
  // use callback is a hook that will return a memoized version of the call back function that only changes if one of the dependaancies has changed.
  const incrementAge = useCallback(() => {
    setAge(age + 1);
  }, [age]); //dependancy array
  const incrementSalary = useCallback(() => {
    setSalary(salary + 1000);
  }, [salary]);
  return (
    <div>
      <Title />
      <Count text="Age" count={age} />
      <Button handleclick={incrementAge}>Increment age</Button>
      <Count text="sallary" count={salary} />
      {/* it renders the sallary button without using hook so how to stop this,The new incrementsalary function is created each time when component rerender  */}
      {/* How to tell the react that stop creating new function after rendering the component. */}
      <Button handleclick={incrementSalary}>Increment Salary</Button>
    </div>
  );
}

export default ParentComponent;
