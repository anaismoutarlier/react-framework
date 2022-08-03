import * as reducers from "./reducers";
import Home from "./pages/Home";

//const store = createStore(combineReducers(reducers));
function App() {
  return (
  <div className="App">
    <Home />
  </div>
  );
}

export default App;
