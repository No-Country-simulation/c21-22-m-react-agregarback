import "./style.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem("token");
  const handleLogin = async e => {
    e.preventDefault();
    try {
      const response = await fetch("https://3395-181-73-15-203.ngrok-free.app/api/v1/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password
        })
      });
      const data = await response.json();
      if (response.ok) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: data.message,
          showConfirmButton: false,
          timer: 3000
        });
        localStorage.setItem("token", data.token);
        navigate("/profile");
      } else {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: data.message,
          showConfirmButton: false,
          timer: 3500,
        });
      };
    } catch (error) {
      console.error("Error al realizar el login: ", error);
    };
  };
  const handleLogout = () => {
    localStorage.removeItem("token");
    console.log("Sesión cerrada");
    navigate("/");
  };
  return (
    <div className="loginSection">
      {!isLoggedIn ? (
        <>
          <h5>
            Inicia sesión para gestionar tus solicitudes de adopción, descubrir
            nuevos compañeros y seguir de cerca a las mascotas que has
            seleccionado
          </h5>
          <form onSubmit={handleLogin}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label fw-bold">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label fw-bold">
                Contraseña
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="loginButton">
              <button type="submit" className="btn btn-dark">
                Iniciar sesión
              </button>
            </div>
          </form>
          <div>
            <p>
              ¿No tienes una cuenta?
              <br />
              <Link to="/register">
                <u>Regístrate</u>
              </Link>
            </p>
          </div>
        </>
      ) : (
        <>
          <h5>Ya has iniciado sesión</h5>
          <button onClick={handleLogout} className="btn btn-dark">
            Cerrar sesión
          </button>
        </>
      )}
    </div>
  );
};

export default Login;
