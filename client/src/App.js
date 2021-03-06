import "./styles/app.scss";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import LoginForm from "./pages/LoginForm";
import RegisterForm from "./pages/RegisterForm";
import Wrapper from "./components/Wrapper";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/app.scss";


function App() {
  return (
    <Router>
      <>
        <Wrapper>
          <Route exact path="/" component={Home} />
          <Route exact path="/LoginForm" component={LoginForm} />
          <Route exact path="/RegisterForm" component={RegisterForm} />
          <Route exact path="/home" component={Home} />
        </Wrapper>
      </>
    </Router>
  );
}

export default App;
