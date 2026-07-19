import React from 'react';
import NavBar from './components/common/NavBar';
import Footer from './components/common/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Experience from './pages/Experince';
import ContactUs from './pages/ContactUs';

const App = () => {
  return (
    <>
      <NavBar />
      <main>
        <Home />
        <AboutUs />
        <Experience />
        <ContactUs />
      </main>
      <Footer />
    </>
  );
};

export default App;