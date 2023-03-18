import { Routes,Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ContactUs from "./pages/ContactUs";
import ConsultantProfile from "./pages/ConsultantProfile";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/ContactUs" element={<ContactUs/>} />
      <Route path="/ConsultantProfile" element={<ConsultantProfile/>} />
    </Routes>
    </>
  );
}

export default App;
