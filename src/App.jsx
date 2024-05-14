import "./App.css";
import Features from "./components/Features/Features";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import { FaRegCircleQuestion } from "react-icons/fa6";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Features />
      <Footer />
      <button className="sticky-btn">
        <FaRegCircleQuestion /> Help
      </button>
    </div>
  );
}
export default App;
