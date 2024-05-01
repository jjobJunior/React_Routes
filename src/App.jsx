import { Outlet} from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div>
      <h1>React Router</h1>
      <NavBar />
      <Outlet />
 
    </div>
  );
}

export default App;
