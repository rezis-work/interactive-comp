import Header from "./Components/Header/Header";
import Logo from "./assets/icon-star.svg";
import Ilustration from "./assets/illustration-thank-you.svg";
import "./App.css";
import Points from "./Components/Points/Points";
import { useState } from "react";
import Submit from "./Components/Submit/Submit";

function App() {
  const [curPoint, setCurPoint] = useState(null);
  const [hovered, setHovered] = useState(false);
  const [submit, setSubmit] = useState(false);
  const [btnHover, setBtnHover] = useState(false);
  return (
    <>
      {submit === false && (
        <div className="main-container">
          <Header
            logo={Logo}
            text="How did we do?"
            descr="Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!"
          />
          <Points
            curPoint={curPoint}
            setCurPoint={setCurPoint}
            hovered={hovered}
            setHovered={setHovered}
            submit={submit}
            setSubmit={setSubmit}
            btnHover={btnHover}
            setBtnHover={setBtnHover}
          />
        </div>
      )}
      {submit && <Submit image={Ilustration} curPoint={curPoint} />}
    </>
  );
}

export default App;
