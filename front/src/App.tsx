import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Tickets from "./Page/Tickets";
import Users from "./Page/Users";
import NavbarMenu from "./components/NavbarMenu";
import Sidebar from "./components/Sidebar";


const App: React.FC = () => {
  return (
    <>
      <Sidebar />
      <section className="home-section">
        <div className="app-container">
          <NavbarMenu />
          <BrowserRouter>
            <Routes>
              <Route path="tickets" element={<Tickets />} />
              <Route path="users" element={<Users />} />
            </Routes>
          </BrowserRouter>
        </div>
      </section>
    </>
  );
};

export default App;
