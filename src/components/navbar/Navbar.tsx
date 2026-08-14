import { useEffect, useState } from "react";
import type { NavbarResponse } from "./navbar.types";
import navbarApi from "./navbar.api";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

export function Navbar() {
  const [menu, setMenu] = useState<NavbarResponse[]>([]);

  useEffect(() => {
    async function loadMenu() {
      const response = await navbarApi.getNavbarItems();
      setMenu(response.data);
    }

    loadMenu();
  }, []);

  return (
    <aside className="navbar">
      <div className="navbar-title">HMS</div>

      <nav className="navbar-links">
        {menu.map((menu) => (
          <NavLink key={menu.label} to={`/admin/${menu.route}`}>
            {menu.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
