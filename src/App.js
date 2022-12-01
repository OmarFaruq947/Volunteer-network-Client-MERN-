import { createContext } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Component/About/About";
import Admin from "./Component/Admin/Admin";
import Blog from "./Component/Blog/Blog";
import BlogDetails from "./Component/Blog/BlogDetails";
import Donation from "./Component/Donation/Donation";
import Events from "./Component/Events/Events";
import Faq from "./Component/Faq/Faq";
import Footer from "./Component/Footer/Footer";
import Header from "./Component/header/Header";
import Home from "./Component/Home/Home";
import Nomatch from "./Component/Nomatch/Nomatch";
import Login from "./Component/Registration/Login";
import Registration from "./Component/Registration/Registration";

export const LogedInContext = createContext("default aci");

function App() {
  
  return (
    <LogedInContext.Provider value=''>
      <div className="App">
        <Header />
        <div className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/donation" element={<Donation />} />
            <Route path="/events" element={<Events />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blogDetails/:id" element={<BlogDetails />} />
            <Route path="/about" element={<About />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registration" element={<Registration />} />
            {/* <Route path="/checkYourEmail" element={<CheckYourEmail />} /> */}
            <Route path="/admin" element={<Admin />} />

            <Route path="*" element={<Nomatch />} />
          </Routes>
        </div>
        <br />
        <Footer />
      </div>
    </LogedInContext.Provider>
  );
}

export default App;
