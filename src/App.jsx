import ProfileImage from "./components/ProfileImage";
import ProfileInfo from "./components/ProfileInfo";
import EmailButton from "./components/EmailButton";
import AboutSection from "./components/AboutSection";
import InterestsSection from "./components/InterestsSection";
import SocialLinks from "./components/SocialLinks";

export default function App() {
  return (
    <div className="min-h-screen p-8 flex items-center justify-center">
      <div className="card w-96 bg-neutral shadow-xl overflow-hidden">
        <ProfileImage />
        <div className="card-body items-center text-center">
          <ProfileInfo />
          <EmailButton />
          <AboutSection />
          <InterestsSection />
          <SocialLinks />
        </div>
      </div>
    </div>
  );
}
