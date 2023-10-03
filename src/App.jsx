import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import Error from "./pages/error";
import Menu from "./pages/menu";
import { useState } from "react";
import UserContext from "./services/userContext";
import Beneficiarios from "./pages/secciones/beneficiarios";
import { checkLogin } from "./services/checkLogin";

function App() {
  const [nombreUsuario, setNombreUsuario] = useState(
    localStorage.getItem("nombreUsuario") || null
  );
  const [rolUsuario, setRolUsuario] = useState(null);
  const [ramaUsuario, setRamaUsuario] = useState(null);
  const auth = checkLogin(); 

  console.log(auth)
  
  return (
    <UserContext.Provider value={{nombreUsuario,setNombreUsuario,rolUsuario,setRolUsuario,ramaUsuario,setRamaUsuario}}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Error />} />
          <Route path="/menu" element={auth ? <Menu/> : <Login/>}/>
          <Route path="/menu/beneficiarios"element={auth ? <Beneficiarios/> : <Login/>}/>
        </Routes>
      </Router>
    </UserContext.Provider>
  );
}


export default App;
