import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    getTimeFromServer();
  }, []);

  const getTimeFromServer = async () => {
    try {
      let response = await fetch("/slow");
      let vals = await response.json();
      console.log(`vals is:`, vals);
      return setData(vals.currentTime);
    } catch (ex) {
      console.log(ex);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={getTimeFromServer}>Click Me</button>
        <p>{data || "no value yet"}</p>
      </header>
    </div>
  );
}

export default App;
