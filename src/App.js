// import SideBar from "components/SideBar/SideBar";
import React from "react";
import AutoComplete from "components/AutoComplete";

function App() {
  return (
    <div className={"App"}>
      <h1>React Autocomplete Demo</h1>
      <h2>Start typing and experience the autocomplete wizardry!</h2>
      <AutoComplete
        suggestions={["Oranges", "Apples", "Banana", "Kiwi", "Mango"]}
      />
    </div>
  );
}

export default App;
