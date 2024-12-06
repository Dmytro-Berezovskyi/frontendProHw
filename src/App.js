import {Routes, Route, NavLink} from 'react-router-dom';

import Home from "./Home/Home";
import About from "./About/About";
import Contact from "./Contact/Contact";

function App() {
  return (
    <Routes>
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
    </Routes>
  );
}

export default App;
