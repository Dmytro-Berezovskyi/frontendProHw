import {Routes, Route, NavLink} from 'react-router-dom';

import Home from "./pages/Home/index";
import AboutMe from "./pages/AboutMe/index";
import Contacts from "./pages/Contacts/index";
import NotFound from "./pages/NotFound/index";

function App() {
  return (
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<AboutMe />}/>
        <Route path="/contacts" element={<Contacts />}/>
        <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
