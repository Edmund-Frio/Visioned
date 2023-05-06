import { Routes, Route } from "react-router-dom";
import Navbar  from "./components/header/Navbar";
import { About } from "./components/form/About/About";
import { Account } from "./components/form/Account/Account";
import { Settings } from "./components/form/Settings/Settings";
import { Markdown } from "./components/form/Notes/Markdown/Markdown";
import { Footer } from "./components/footer/Footer";

function App(): JSX.Element {
  return (
    <div className="App">
      <div className="grid grid-flow-rows grid-rows-1 gap-3 p-4 max-w-7xl h-screen overflow-hidden mx-auto">
        <Navbar />
        <Routes>
          <Route path="/" element={<Markdown />} />
          <Route path="settings" element={<Settings />} /> 
          <Route path="about" element={<About />} />
          <Route path="account" element={<Account />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
