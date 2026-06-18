import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import './App.css'
import Home from "./pages/Home";
import MoodTracker from "./pages/MoodTracker";
import Quotes from "./pages/Quotes";
import Tips from "./pages/Tips";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/mood"
          element={<MoodTracker />}
        />

        <Route
          path="/quotes"
          element={<Quotes />}
        />

        <Route
          path="/tips"
          element={<Tips />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;