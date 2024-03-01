import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Tickets from "./Page/Tickets";
import Users from "./Page/Users";
import NavbarMenu from "./components/NavbarMenu";
import Sidebar from "./components/Sidebar";
import Home from "./Page/Home";
import Login from "./Page/Login/login";

const App: React.FC = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/*"
          element={
            <>
              <Sidebar />
              <section className="home-section">
                <div className="app-container">
                  <NavbarMenu />
                  <Routes>
                    <Route index element={<Home />} />
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
