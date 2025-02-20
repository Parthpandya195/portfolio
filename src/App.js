import './App.css';
import About from './component/About/About';
import Contact from './component/Contact/Contact';
import Hero from './component/Hero/Hero';
import Work from './component/Mywork/Work';
import Navbar from './component/Navbar/Navbar';
import Services from './component/Services/Services';
import Footer from './component/Footer/Footer';
import Social from './component/Socialmedia/Social';



function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Social/>
      <About/>
      <Services/>
      <Work/>
      <Contact/>
      <Footer/>
         </div>
  );
}
export default App;
