import Routing from "../src/components/landing_page/routes/index";
import Carousel from "../src/components/landing_page/Carousel";
import TechnicalCoursesSection from "./components/landing_page/TechnicalCoursesSection";
import NonTechnicalCoursesSection from "./components/landing_page/NonTechnicalCoursesSection";
import Footer from "./components/landing_page/Footer";
import SignUp from "./components/SignupPage/SignUp";
import "./App.css";

function App() {
  return (
    <div>
      {/* <Routing />
      <Carousel />
      <TechnicalCoursesSection />
  <NonTechnicalCoursesSection />
<Footer />*/}
      <SignUp/>
      
    </div>
  );
}

export default App;
