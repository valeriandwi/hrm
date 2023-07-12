import { Route, Routes } from "react-router-dom";
import { PUBLIC_ROUTES } from "./constants/routeList";
import "./styles/global.scss";

function App() {
  return (
    <div className="App">
      <Routes>
        {PUBLIC_ROUTES.map((route, index) => (
          <Route key={index} {...route} />
        ))}
      </Routes>
    </div>
  );
}

export default App;
