import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Client from "./pages/Client";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/client/:id" element={<Client />} />
      </Routes>
    </>
  );
};

export default App;
