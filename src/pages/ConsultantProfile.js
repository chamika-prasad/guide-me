import ConsultantProfileCard from "../components/consultantprofilecard";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const ConsultantProfile = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="pt-5">
        <ConsultantProfileCard />
      </div>
      <div className="pt-5">
        <Footer />
      </div>
    </div>
  );
};

export default ConsultantProfile;
