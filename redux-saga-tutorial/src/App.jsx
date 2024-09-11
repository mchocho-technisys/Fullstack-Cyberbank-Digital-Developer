import { useDispatch, useSelector } from "react-redux";
import { actions, selectors } from "../redux/reducers/counter";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const counter = useSelector(selectors.getCounter);
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => dispatch(actions.incrementRequest())}>
          count is {counter}
        </button>
        <button onClick={() => dispatch(actions.resetCounter())}>reset</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
