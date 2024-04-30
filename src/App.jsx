import { Outlet } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div>
      <h1>React Router</h1>
      <NavBar/>
      <Outlet />
      {/* <Home />
      <About/> */}
    </div>
  );
}

export default App;
