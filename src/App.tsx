import About from "./About";
import "./App.css";
import Hero from "./Hero";
import NavBar from "./NavBar";
import Button from "./Button";
import Reviews from "./Reviews";
import RandomFacts from "./RandomFacts";
import Footer from "./Footer";
import MobileMenu from "./MobileMenu";

function App() {
  return (
    <>
      <NavBar />
      <MobileMenu />
      <Hero />
      <About />
      <Button />
      <Reviews />
      <RandomFacts />
      <Button />
      <Footer />
    </>
  );
}

export default App;
