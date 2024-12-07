import {Routes, Route, NavLink} from 'react-router-dom';

import {ThemeProvider} from "./context/ThemeContext";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Contacts from "./pages/Contacts";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout/Layout";

function App() {
  return (
      <ThemeProvider>
          <Routes>
              <Route path="/" element={<Layout />}>
                  <Route index element={<Home />}/>
                  <Route path="/about" element={<AboutMe />}/>
                  <Route path="/contacts" element={<Contacts />}/>
                  <Route path="*" element={<NotFound />} />
              </Route>
          </Routes>
      </ThemeProvider>
  );
}

export default App;
