import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Client from "./pages/Client";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

const App = () => {
  return (
    <>
      <Header />
      <div className="container mx-auto mt-8 mb-32">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/client/:id" element={<Client />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
