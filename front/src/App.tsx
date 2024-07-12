import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "./Page/Auth";
import Login from "./Page/Auth/Login/login";
import Recovery from "./Page/Auth/Recovery";
import DashboardPage from "./Page/DashboardPage";
import Home from "./Page/Home";
import Tickets from "./Page/Tickets";
import Userdetails from "./Page/UserDetails";
import Users from "./Page/Users";
import NavbarMenu from "./components/NavbarMenu";
import SidebarModern from "./components/SidebarModern";


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
            path="/*" element={
              <>
                <SidebarModern />
                <section className="home-section">
                  <div className="app-container">
                    <NavbarMenu />
                    <Routes>
                      <Route path="/home" element={<Home />}>
                        <Route index element={<Home />} />
                      </Route>
                      <Route path="/tickets" element={<Tickets />} />
                      <Route path="/dashboard" element={<DashboardPage />} />
                      <Route path="/users" element={<Users />} />
                      <Route path="users/:userId" element={<Userdetails />} />
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
