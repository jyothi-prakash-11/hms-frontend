import { Outlet } from "react-router-dom";
import { Navbar } from "../navbar/Navbar";
import "./Layout.css";

export function Layout() {
  console.log("layout loaded");

  return (
    <div className="app-layout">
      <header className="app-header">
        <h1 className="app-title">HMS</h1>
      </header>

      <div className="app-body">
        <aside className="app-sidebar">
          <Navbar />
        </aside>

        <main className="app-main">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
