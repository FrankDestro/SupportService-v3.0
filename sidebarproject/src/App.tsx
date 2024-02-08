import "bootstrap/dist/css/bootstrap.min.css";
import Side from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Page2 from "./Page/Page2";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Page1 from "./Page/Page1/indext";
import Home from "./Page/Home";

const App: React.FC = () => {
  return (
    <>
      <Side />
      <section className="home-section">
        <div className="app-container">
          <Navbar />
          <BrowserRouter>
            <Routes>
              <Route index element={<Home />} />
              <Route path="page1" element={<Page1 />} />
              <Route path="page2" element={<Page2 />} />
            </Routes>
          </BrowserRouter>
        </div>
      </section>
    </>
  );
};

export default App;
