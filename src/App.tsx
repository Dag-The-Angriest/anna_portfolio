import About from "./About";
import "./App.css";
import Hero from "./Hero";
import NavBar from "./NavBar";
import Button from "./Button";
import Reviews from "./Reviews";
import RandomFacts from "./RandomFacts";
import Footer from "./Footer";
import MobileMenu from "./MobileMenu";
import PortfolioMenu from "./PortfolioMenu";

function App() {
  return (
    <>
      <NavBar />
      <MobileMenu />
      <PortfolioMenu />
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
