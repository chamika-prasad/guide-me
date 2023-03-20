import ProfileCard from "../components/profilecard";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { CustomerPersonalData,CustomerProfileDescription } from "../data/customerpersonaldata";
import { CustomerExperienceData } from "../data/customerexperiencedata";
import { Education } from "../data/customereducation";

const CustomerProfile = () => {

    const isConsultent = false

  return (
    <div>
    <div>
      <Navbar />
    </div>
    <div className="pt-5">
      <ProfileCard PersonalData={CustomerPersonalData} ProfileDescription={CustomerProfileDescription} ExperienceData={CustomerExperienceData} isConsultent={isConsultent} Education={Education}/>
    </div>
    <div className="pt-5">
      <Footer />
    </div>
  </div>
  )
}

export default CustomerProfile
