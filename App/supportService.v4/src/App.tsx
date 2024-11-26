import "bootstrap"; // Para incluir o JavaScript do Bootstrap
import "bootstrap/dist/css/bootstrap.min.css"; // Para incluir o CSS do Bootstrap
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Auth from "./routes/Auth/Auth";
import Login from "./routes/Auth/Login/Login";
import Recovery from "./routes/Auth/Recovery/Recovery";
import Home from "./routes/Home/home";
import Ticket from "./routes/Tickets/tickets";
import User from "./routes/Users/user";
import Test from "./routes/Test/Test";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/auth" element={<Auth />}>
            <Route index element={<Login />} />
            <Route path="recovery" element={<Recovery />} />
          </Route>
          <Route element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="/ticket" element={<Ticket />} />
            <Route path="/auth" element={<Login />} />
            <Route path="/user" element={<User />} />
            <Route path="/test" element={<Test />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
