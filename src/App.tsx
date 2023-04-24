import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/header/Navbar";
import { About } from "./components/form/About/About";
import { Account } from "./components/form/Account/Account";
import { Settings } from "./components/form/Settings/Settings";
import { Note } from "./components/form/Notes/Note";

function App(): JSX.Element {
  return (
    <div className="App">
      <div className="grid grid-flow-rows grid-rows-1 gap-3 max-w-4xl p-4 h-screen overflow-hidden mx-auto">
        <Navbar />
        <Routes>
          <Route path="note" element={<Note />} />
          <Route path="settings" element={<Settings />} /> 
          <Route path="about" element={<About />} />
          <Route path="account" element={<Account />} />
        </Routes>
        
      </div>
    </div>
  );
}

export default App;
