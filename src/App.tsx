import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./features/auth/pages/LoginPage";
import { Layout } from "./components/layout/Layout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage></LoginPage>}></Route>
          <Route path="/admin" element={<Layout></Layout>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
