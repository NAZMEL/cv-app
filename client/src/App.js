import "./App.css";
import { BrowserRouter } from "react-router-dom";
import useRoutes from "./routes";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const routes = useRoutes();

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        {routes}
      </div>
    </BrowserRouter>
  );
}

export default App;
