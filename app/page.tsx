import Navbar from "@/components/Navbar";
import AboutMe from "@/components/AboutMe";

export default function Home() {
  return (
      <main className="text-gray-400 bg-gray-900 body-font">
          <Navbar/>
          <AboutMe/>
      </main>
  );
}
