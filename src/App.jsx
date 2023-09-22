import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import Error from "./pages/error";
import Menu from "./pages/menu";
import { useState } from "react";
import UserContext from "./services/userContext";

function App() {
  const [nombreUsuario, setNombreUsuario] = useState(null);
  const [rolUsuario, setRolUsuario] = useState(null);
  const [ramaUsuario, setRamaUsuario] = useState(null);

  return (
    <UserContext.Provider value={{nombreUsuario,setNombreUsuario,rolUsuario,setRolUsuario,ramaUsuario,setRamaUsuario}}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
