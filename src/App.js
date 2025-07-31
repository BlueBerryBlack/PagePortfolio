import Container from './components/Container/Container';
import Hero from './components/Hero/Hero';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';
import AboutMe from './components/AboutMe/AboutMe';
import Gallery from './components/Gallery/Gallery';
import Skills from './components/Skills/Skills';
import Profile from './components/Profile/Profile';

const App = () => {
  return (
    <Container>
      <Hero/>
      <AboutMe/>
      <Profile/>
      <Skills/>
      <Gallery/>
      <Contact/>
      <Footer/>
    </Container>
  );
};

export default App;
