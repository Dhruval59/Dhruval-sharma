import Header from "../Components/Header";
import Footer from "../Components/Footer";
import About from "../Components/About";
import Projects from "../Components/Projects";
import Contact from "../Components/Contact";
import HomePage from "../Components/Home";

export default function Page() {
  return (
    <div className="bg-white dark:bg-gray-800 text-black dark:text-white">
      
      {/* Header Section */}
      <Header />
      <HomePage />
      {/* About Section */}
      <div id="about">
        <About />
      </div>

      {/* Projects Section */}
      <div id="projects">
        <Projects />
      </div>

      {/* Contact Section */}
      <div id="contact">
        {/* <h2 className="text-2xl font-semibold text-center mb-4">Contact</h2> */}
        <Contact />
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}
