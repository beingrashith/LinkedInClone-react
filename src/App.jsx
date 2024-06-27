import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { AllRouters } from "./components/routers.jsx/routers";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <AllRouters />
      </BrowserRouter>
    </div>
  );
}

export default App;
