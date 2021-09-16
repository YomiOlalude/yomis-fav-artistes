import './App.css';
import React from "react";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Artistes from "./pages/Artistes";
import SingleArtiste from "./pages/SingleArtiste";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/artistes" component={Artistes} />
      <Route exact path="/artistes/:slug" component={SingleArtiste} />
      <Route component={Error} />
    </Switch>
    </>
  ); 
}

export default App;
