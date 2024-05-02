import Navbar from "@/components/Navbar";
import AboutMe from "@/components/AboutMe";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
      <main className="text-gray-400 bg-gray-900 body-font">
          <Navbar/>
          <AboutMe/>
          <Projects/>
          <Skills/>
      </main>
  );
}
