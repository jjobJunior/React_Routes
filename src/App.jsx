import { Outlet } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import SearchForm from "./components/SearchForm";

function App() {
  return (
    <div>
      <h1>React Router</h1>
      <NavBar />
      <SearchForm />
      <Outlet />
    </div>
  );
}

export default App;
