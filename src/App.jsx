import ProfileImage from "./components/ProfileImage";
import ProfileInfo from "./components/ProfileInfo";
import EmailButton from "./components/EmailButton";

export default function App() {
  return (
    <div className="min-h-screen p-8">
      <div className="card w-96 bg-neutral shadow-xl overflow-hidden">
        <ProfileImage />
        <div className="card-body items-center text-center">
          <ProfileInfo />
          <EmailButton />
        </div>
      </div>
    </div>
  );
}
