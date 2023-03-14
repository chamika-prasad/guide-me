import { Routes,Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ContactUs from "./pages/ContactUs";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/ContactUs" element={<ContactUs/>} />
    </Routes>
    </>
  );
}

export default App;
