import Divider from "../components/divider";
import AboutMe from "../components/home/about-me/aboutme";
import Education from "../components/home/education/education";
import FeaturedWork from "../components/home/featurework/featurework";
import HeroSection from "../components/home/hero-section/herosection";
import ProjectOverview from "../components/home/project-overview/projectoveriew";

const page = () => {
  return (
    <main>
      <section id="inicio">
        <HeroSection />
      </section>

      <Divider />

      <section id="sobre-mi">
        <AboutMe />
      </section>

      <Divider />

      <section id="trabajos">
        <FeaturedWork />
      </section>

      <Divider />

      <section id="Proyectos">
        <ProjectOverview />
      </section>

      <Divider />

      <section id="educacion">
        <Education />
      </section>
    </main>
  );
};

export default page;
