import {Routes, Route } from 'react-router-dom';

import {ThemeProvider} from "./context/ThemeContext";

import LayoutAnt from "./components/Layout/Layout";
import PrivateRoute from "./components/PrivateRoute";
import Home from "./pages/Home";
import Todo from "./pages/Todo";
import Contacts from "./pages/Contacts";
import NotFound from "./pages/NotFound";
import Counter from "./pages/Counter";
import Login from "./pages/Login";

function App() {
  return (
      <ThemeProvider>
          <Routes>
              <Route path="/" element={<LayoutAnt />}>
                  <Route index element={<Home />}/>
                  <Route path="/login" element={<Login />}/>
                  <Route path="/todo" element={<Todo />}/>
                  <Route path="/contacts" element={
                      <PrivateRoute>
                        <Contacts />
                      </PrivateRoute>}
                  />
                  <Route path="/counter" element={<Counter />}/>
                  <Route path="*" element={<NotFound />} />
              </Route>
          </Routes>
      </ThemeProvider>
  );
}

export default App;