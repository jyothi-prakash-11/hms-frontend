import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./features/auth/pages/LoginPage";
import AdminDashboard from "./features/admin/AdminDashBoard";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage></LoginPage>}></Route>
          <Route
            path="/admin"
            element={<AdminDashboard></AdminDashboard>}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
