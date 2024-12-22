import {Routes, Route } from 'react-router-dom';

import {ThemeProvider} from "./context/ThemeContext";

import Layout from "./components/Layout/Layout";
import LayoutAnt from "./components/Layout/Layout";
import PrivateRoute from "./components/PrivateRoute";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Contacts from "./pages/Contacts";
import NotFound from "./pages/NotFound";
import FormikForm from "./pages/Form";
import Counter from "./pages/Counter";
import Login from "./pages/Login";


function App() {
  return (
      <ThemeProvider>
          <Routes>
              <Route path="/" element={<LayoutAnt />}>
                  <Route index element={<Home />}/>
                  <Route path="/login" element={<Login />}/>
                  <Route path="/about" element={<AboutMe />}/>
                  <Route path="/contacts" element={
                      <PrivateRoute>
                        <Contacts />
                      </PrivateRoute>}
                  />
                  <Route path="/form" element={<FormikForm/>}/>
                  <Route path="/counter" element={<Counter />}/>
                  <Route path="*" element={<NotFound />} />
              </Route>
          </Routes>
      </ThemeProvider>
  );
}

export default App;
