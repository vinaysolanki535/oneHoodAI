import { LandingNavbar } from "@/components/landing-navbar";
import { LandingHero } from "@/components/landing-hero";

const LandingPage = () => {
  return (
    <div className="h-full">
      <LandingNavbar />
      <div className="h-full items-center justify-center flex">
        <LandingHero />
      </div>
    </div>
  );
};

export default LandingPage;
