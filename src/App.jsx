import {Outlet} from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header.jsx";

function App() {
  return (
    <div className="lg:container lg:mx-auto">
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  );
}

export default App;
