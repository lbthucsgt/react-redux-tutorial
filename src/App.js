import logo from './logo.svg';
import './App.css';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom"

import Todo from './pages/todo';
import Home from './pages/home';
import Counter from './pages/counter';
import Yesno from "./pages/yesno";
import TestCallback from "./pages/testCallback";

function App() {
  return (
      <Router>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/todo" element={<Todo />} />
              <Route path="/counter" element={<Counter />} />
              <Route path="/yesno" element={<Yesno />} />
              <Route path="/test-callback" element={<TestCallback />} />
          </Routes>
      </Router>
  );
}

export default App;
