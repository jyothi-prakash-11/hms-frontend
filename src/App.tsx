import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./features/auth/pages/LoginPage";
import { Layout } from "./components/layout/Layout";
import AdminDashboard from "./features/admin/AdminDashBoard";
import { ProtectedRoute } from "./features/auth/ProtectedRoute";
import RequestAccess from "./features/requestAccess/page/requestAccess";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage></LoginPage>}></Route>
          <Route
            path="/requestaccess"
            element={<RequestAccess></RequestAccess>}
          ></Route>
          <Route element={<ProtectedRoute></ProtectedRoute>}>
            <Route path="/admin" element={<Layout></Layout>}>
              <Route
                path="dashboard"
                element={<AdminDashboard></AdminDashboard>}
              ></Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
