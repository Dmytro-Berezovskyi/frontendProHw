import {Routes, Route } from 'react-router-dom';

import {ThemeProvider} from "./context/ThemeContext";

import LayoutAnt from "./components/Layout/Layout";
import PrivateRoute from "./components/PrivateRoute";
import Home from "./pages/Home";
import Resume from "./pages/Resume";
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
                  <Route path="/resume" element={<Resume />}/>
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