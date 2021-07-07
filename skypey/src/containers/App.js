import _ from "lodash";

import Main from "../components/Main";
import SideBar from "../components/SideBar";
import store from "../store";
import "./App.css";

function App() {
  const { contacts, user, activeUserId } = store.getState();
  return (
    <div className="App">
      <SideBar contacts={_.values(contacts)} />
      <Main user={user} activeUserId={activeUserId} />
    </div>
  );
}

export default App;
