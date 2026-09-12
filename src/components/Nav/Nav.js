import { NavLink } from "react-router";
import "./Nav.css";

function Nav() {
  return (
    <>
      <div id="nav_wrapper">
        <nav>
          <ul>
            <li>
              <NavLink to="/" end>
                Inicio
              </NavLink>
            </li>
            <li>
              <NavLink to="/servicios" end>
                Servicios
              </NavLink>
            </li>
            <li>
              <NavLink to="/contacto" end>
                Contacto
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Nav;
