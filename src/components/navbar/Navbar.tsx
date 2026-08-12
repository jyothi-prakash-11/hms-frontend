import { useEffect, useState } from "react";
import type { NavbarResponse } from "./navbar.types";
import navbarApi from "./navbar.api";
import { NavLink } from "react-router-dom";

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
    <>
      <aside>
        {menu.map((menu) => (
          <NavLink key={menu.label} to={`/admin/${menu.route}`}>
            {menu.label}
          </NavLink>
        ))}
      </aside>
    </>
  );
}
