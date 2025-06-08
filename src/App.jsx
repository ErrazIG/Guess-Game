import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <main>
          <Outlet />
        </main>
        <footer>Mon Footer</footer>
      </div>
    </>
  );
}

export default App;
