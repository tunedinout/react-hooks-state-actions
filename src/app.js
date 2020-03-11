import React from "react";
import ItemList from "./components/item/itemList";
import DataForm from "./components/datasource/dataFormClass";
import ColorList from "./components/color/colorList";

class App extends React.Component {
  render() {
    return (
      <div>
        <DataForm />
        <ItemList />
        <ColorList />
      </div>
    );
  }
}

export default App;
