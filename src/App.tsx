import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./features/auth/pages/LoginPage";
import { Layout } from "./components/layout/Layout";
import AdminDashboard from "./features/admin/AdminDashboard";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage></LoginPage>}></Route>
          <Route path="/admin" element={<Layout></Layout>}>
            <Route
              path="dashboard"
              element={<AdminDashboard></AdminDashboard>}
            ></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
