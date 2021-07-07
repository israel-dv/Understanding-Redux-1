import React, { Fragment } from "react";

import HelloWorld from "./HelloWorld";
import ButtonGroup from "./ButtonGroup";
import { store } from "./store";

const App = () => {
  const { tech } = store.getState();

  return (
    <Fragment>
      <HelloWorld tech={tech} />
      <ButtonGroup technologies={["React", "Elm", "React Redux"]} />
    </Fragment>
  );
};

export default App;
