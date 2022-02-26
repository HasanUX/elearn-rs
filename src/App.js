import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Favorites from "./components/Favorites";
import Home from "./components/Home";
import Login from "./components/Login";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <Header />
                <Hero />
                <Home />
                <Footer />
              </>
            }
          />
        </Routes>

        <Routes>
          <Route
            exact
            path="/login"
            element={
              <>
                <Login />
              </>
            }
          />
        </Routes>

        <Routes>
          <Route
            exact
            path="/favorites"
            element={
              <>
                <Header />
                <Favorites />
                <Footer />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
