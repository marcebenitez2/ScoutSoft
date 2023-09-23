// checkLogin.jsx
export function checkLogin() {
  const storedNombreUsuario = sessionStorage.getItem("nombreUsuario");

  if (!storedNombreUsuario) {
    return false;
  } else {
    return true;
  }
}
