import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./component/Header/Header";
import Blood from "./component/Blood/Blood";
import Registration from "./component/Registration/Registration";
import Home from "./component/Home/Home";
import Footer from "./component/Footer/Footer";
import BloodRegistration from "./component/BloodRegistration/BloodRegistration";
import BloodResult from "./component/Bloodresult/BloodResult";
import CampRegistrations from "./component/CampRegistration/CampRegistration";
import CampResult from "./component/CampResult/CampResult";
import About from "./component/About/About";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Blood" element={<Blood />} />
        <Route path="/Registration" element={<Registration />} />
        <Route path="/BloodRegistration" element={<BloodRegistration />} />
        <Route path="/BloodResult" element={<BloodResult />} />
        <Route path="/CampRegistrations" element={<CampRegistrations />} />
        <Route path="/CampResult" element={<CampResult />} />
        <Route path="/about" element={<About />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
