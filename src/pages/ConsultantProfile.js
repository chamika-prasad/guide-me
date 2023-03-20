import ProfileCard from "../components/profilecard";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { PersonalData,ProfileDescription } from "../data/consultantpersonaldata";
import { ExperienceData } from "../data/experiencedata";

const ConsultantProfile = () => {

  const isConsultent = true
  const Education = null

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="pt-5">
        <ProfileCard PersonalData={PersonalData} ProfileDescription={ProfileDescription} ExperienceData={ExperienceData} isConsultent={isConsultent} Education={Education}/>
      </div>
      <div className="pt-5">
        <Footer />
      </div>
    </div>
  );
};

export default ConsultantProfile;
