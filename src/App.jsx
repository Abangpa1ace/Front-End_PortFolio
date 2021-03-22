import { useState, useEffect, useCallback } from 'react';
import About from "./Containers/About/About";
import Main from "./Containers/Main/Main";
import Navbar from "./Containers/Navbar/Navbar";
import Footer from "./Containers/Footer/Footer";
import Project from "./Containers/Project/Project";
import Contact from "./Containers/Contact/Contact";

function App() {
  const [pageY, setPageY] = useState(0)
  const handleScroll = useCallback(() => {
    const { pageYOffset } = window;
    setPageY(pageYOffset)
  }, [])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll])

  return (
    <div className="App">
      <Navbar pageY={pageY} />
      <Main />
      <About pageY={pageY} />
      <Project pageY={pageY} />
      <Contact pageY={pageY} />
      <Footer />
    </div>
  );
}

export default App;
