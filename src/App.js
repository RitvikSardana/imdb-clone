import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Search from "./Components/Search/Search";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MovieDetail from "./Components/Search/Card/MovieDetail";
function App() {

  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/search">
            <Search />
          </Route>
          <Route path='/movie/:id/details' >
            <MovieDetail />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
