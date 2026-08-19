import ProfileImage from "./components/ProfileImage";

export default function App() {
  return (
    <div className="min-h-screen p-8">
      <div className="card w-96 bg-neutral shadow-xl overflow-hidden">
        <ProfileImage />
      </div>
    </div>
  );
}
