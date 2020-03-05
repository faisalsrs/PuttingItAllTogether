import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/Counter";
import MyNewComponent from "./components/MyNewComponent";
import PersonCard from "./components/PersonCard";

function App() {
  return (
    <>
      <div>
        <h1>Hello World from create react app</h1>
        <Counter btnText={"Counter has beeen clicked"} />
      </div>
      <div className="App">
        <MyNewComponent someText={"Lets see if this works"} />
      </div>
      <div>
        <PersonCard
          firstName="Jane"
          lastName="Doe"
          age={45}
          hairColor={"Black"}
        />
      </div>
      <div>
        <PersonCard
          firstName="John"
          lastName="Smith"
          age={88}
          hairColor={"Brown"}
        />
      </div>
      <div>
        <PersonCard
          firstName="Millard"
          lastName="Fillmore"
          age={50}
          hairColor={"Brown"}
        />
      </div>
      <div>
        <PersonCard
          firstName="Smith"
          lastName="Maria"
          age={62}
          hairColor={"Brown"}
        />
      </div>
    </>
  );
}

export default App;
