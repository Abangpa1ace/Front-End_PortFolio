import About from "./Containers/About/About";
import Main from "./Containers/Main/Main";
import Navbar from "./Containers/Navbar/Navbar";
import Footer from "./Containers/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div>
        <Main />
        <About />
      </div>
      <Footer />
    </div>
  );
}

export default App;
