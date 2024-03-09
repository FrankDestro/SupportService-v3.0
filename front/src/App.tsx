import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "./Page/Auth";
import Login from "./Page/Auth/Login/login";
import Recovery from "./Page/Auth/Recovery";
import DashboardPage from "./Page/DashboardPage";
import Tickets from "./Page/Tickets";
import Users from "./Page/Users";
import NavbarMenu from "./components/NavbarMenu";
import Sidebar from "./components/Sidebar";

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/auth" element={<Auth />}>
            <Route index element={<Login />} />
            <Route path="recovery" element={<Recovery />} />
          </Route>
          <Route
            path="/*"
            element={
              <>
                <Sidebar />
                <section className="home-section">
                  <div className="app-container">
                    <NavbarMenu />
                    <Routes>
                      <Route path="dashboard" element={<DashboardPage />} />
                      <Route path="tickets" element={<Tickets />} />
                      <Route path="users" element={<Users />} />
                    </Routes>
                  </div>
                </section>
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
