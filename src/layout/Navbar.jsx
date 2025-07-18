import { NavLink } from "react-router";
import { useAuth } from "../auth/AuthContext";
import { useNavigate } from "react-router";

export default function Navbar() {
  const { token, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <header id="navbar">
      <NavLink id="brand" to="/">
        <p>Lasso</p>
      </NavLink>
      <nav>
        {token ? (
          <>
            <NavLink to="/profile">User Profile</NavLink>
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
