import { Routes,Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ContactUs from "./pages/ContactUs";
import ConsultantProfile from "./pages/ConsultantProfile";
import CustomerProfile from "./pages/CustomerProfile";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/ContactUs" element={<ContactUs/>} />
      <Route path="/ConsultantProfile" element={<ConsultantProfile/>} />
      <Route path="/CustomerProfile" element={<CustomerProfile/>} />
    </Routes>
    </>
  );
}

export default App;
