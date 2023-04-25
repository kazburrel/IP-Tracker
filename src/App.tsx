import { useState } from "react";
import { BodyMain } from "./components/bodyMain";
// import "../src/assets/app.css";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <div className="container"> */}
      <BodyMain />
      {/* </div> */}
    </>
  );
}

export default App;
