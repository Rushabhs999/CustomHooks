import react, { useState } from "react";

const useCounter = (initialize = 0) => {
  const [count, setCount] = useState(initialize);
  const increement = () => {
    setCount(count + 1);
  };
  return { count, increement };
};

export default useCounter;
