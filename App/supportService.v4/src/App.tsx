import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/Home/home";
import Ticket from "./routes/Tickets/tickets";
import User from "./routes/Users/user";
import MainLayout from "./layout/MainLayout";
import "bootstrap"; // Para incluir o JavaScript do Bootstrap
import "bootstrap/dist/css/bootstrap.min.css"; // Para incluir o CSS do Bootstrap

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="/ticket" element={<Ticket />} />
            <Route path="/user" element={<User />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
