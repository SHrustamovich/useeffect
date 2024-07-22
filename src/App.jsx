import { useEffect, useState } from "react";

const App = () => {

  const [a, setA] = useState(0)
  useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((result) => console.log(result));
  },[])
  
  
  const handly = () => {
    setA(a+9)
  }
  return <>Biror bir narsa
    <button onClick={handly}>+9</button>
    <p>son:{a}</p>
  </>;
};
export default App;
