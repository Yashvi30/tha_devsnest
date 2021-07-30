import "./App.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import { useFetch } from "./hooks/useFetch";
import Footer from "./components/Footer";

function App() {
  const url = `https://jsonplaceholder.typicode.com/users`;
  const { data } = useFetch(url);
  return (
    <div className="container">
      <Router>
        <main>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </main>
        <Switch>
          <Route path="/" exact>
            <Home data={data} />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route render={() => <h1>Ooops... Page not found!!!</h1>}></Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
