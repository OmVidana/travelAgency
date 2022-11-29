import NavBar from "../components/global/NavBar";
import "./MyAccount.scss";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";

function MyAccount() {
  const navigate = useNavigate();
  let { user } = useContext(AuthContext);

  function handleBuy(event, value) {
    // console.log(event.target.value)
    event.preventDefault();
    if (!user) {
      navigate("/login");
    }
    console.log(event.target.editEmail);
    let formData = JSON.stringify({
      username: event.target.editName.value,
      email: event.target.editEmail.value,
      password: event.target.editPwd.value,
    });

    console.log("h");
    // Send data to the backend via POST
    fetch(" http://127.0.0.1:8000/users/", {
      method: "PUT",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      body: formData, // body data type must match "Content-Type" header
    }).then((response) => response.json());
    // .then(data => console.log(data['data']));
    // .then(data => setTitle(data['json1']));
    navigate("/");
  }

  return (
    <>
      <div className="account-page">
        <NavBar />
        <div className="account-container">
          <i className="fa-solid fa-circle-user user-icon"></i>
          <form onSubmit={handleBuy}>
            <input
              type="email"
              placeholder="Correo"
              name="editEmail"
              required
            />
            <input type="text" placeholder="Nombre" name="editName" required />
            <input
              type="password"
              placeholder="Contraseña"
              name="editPwd"
              required
            />
            <button className="modify-button" type="submit">
              Modificar
            </button>
          </form>
          <div className="account-flights-hotels">
            <a href="/micuenta/vuelos" className="account-consults">
              Vuelos Pendientes.
            </a>
            <a href="/micuenta/hoteles" className="account-consults">
              Reservaciones Pendientes.
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyAccount;
