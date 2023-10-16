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
import Inventario from "./pages/secciones/inventario";
import Nosotros from "./pages/HomePages/nosotros";
import Scoutismo from "./pages/HomePages/scoutismo";
import Consulta from "./pages/HomePages/consulta";

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
          <Route path="/" element={<Home/>} />
          <Route path="/nosotros" element={<Nosotros/>} />
          <Route path="/scoutismo" element={<Scoutismo />} />
          <Route path="/formulario" element={<Consulta />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Error />} />
          <Route path="/menu" element={auth ? <Menu/> : <Login/>}/>
          <Route path="/menu/beneficiarios"element={auth ? <Beneficiarios/> : <Login/>}/>
          <Route path="/menu/inventario"element={auth ? <Inventario/> : <Login/>}/>
        </Routes>
      </Router>
    </UserContext.Provider>
  );
}


export default App;
