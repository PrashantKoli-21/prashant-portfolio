import './App.css';
import NavBar from './components/NavBar/NavBar';
import Intro from './components/Intro/Intro';
import Pursuits from './components/Pursuits/Pursuits';
import Expereince from './components/Experience/Experience';
import MyLearnings from './components/MyLearnings/MyLearnings';
import MyCssExpertiese from './components/MyCssExpertiese/MyCssExpertiese';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

import { themeContext } from './Context';
import { useContext } from 'react';

function App() {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className='App'
      style={{
        background : darkMode ? 'black' : '',
        color : darkMode ? 'white' : ''
      }}
    >
      <NavBar />
      <Intro />
      <Pursuits />
      <Expereince />
      <MyLearnings />
      <MyCssExpertiese />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
