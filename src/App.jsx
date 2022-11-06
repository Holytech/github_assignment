import { Route, Routes } from "react-router";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import NavBar from "./components/NavBar";
import Repos from "./components/Repos";
import RepoDetails from "./components/RepoDetails";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/repos" element={<Repos />} />
        <Route path="/repos/:id" element={<RepoDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
