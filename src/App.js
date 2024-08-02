import { ReduxToolKit } from "./Components/ReduxToolKit";
import CakeView from "./Components/CakeView";
import IcecreamView from "./Components/IcecreamView";
import UserView from "./Components/UserView";
import { Provider } from "react-redux"
import store from "./App/Store"

function App() {
  return (
    <Provider store = {store}>
      <div className="App">
        <CakeView />
        <IcecreamView />
        <UserView />
      </div>
    </Provider>
  );
}

export default App;
