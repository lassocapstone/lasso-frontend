import { NavLink } from "react-router";
import { useAuth } from "../auth/AuthContext";
import { useNavigate } from "react-router";

export default function Navbar() {
  const { token, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <header id="navbar">
      <NavLink id="brand" to="/">
        <p>Lasso<img src="Lasso_Logo.png" width="20px" height="20px" /></p>

      </NavLink>
      <nav>
        {token ? (
          <>
            <NavLink to="/account">Your Account</NavLink>
            <button onClick={() => {
              logout();
              navigate('/');
            }}>Log out</button>
          </>
        ) : (
          <NavLink to="/">Log in</NavLink>
        )}
      </nav>
    </header>
  );
}
