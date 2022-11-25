import './App.css';
import ChooseYourPlan from './Components/ChooseYourPlan/ChooseYourPlan';
import Companies from './Components/Companies/Companies';
import Features from './Components/Features/Features';
import Footer from './Components/Footer/Footer';
import Hero from './Components/HeroSection/Hero';
import Locations from './Components/Locations/Locations';
import NavBar from './Components/Navbar/NavBar';
import NewsLetter from './Components/NewsLetter/NewsLetter';
import Testimonials from './Components/Testimonials/Testimonials';
import Usage from './Components/UsageSection/Usage';

function App() {
  return (
    <>
    <NavBar />
      <div className='MainContainer'>
        
        <Hero />
        <Usage />
        <Features />
        <ChooseYourPlan />
        <Locations />
        <Companies />
        <Testimonials />
        <NewsLetter />

      </div>
      <Footer />
    </>
  );
}

export default App;
