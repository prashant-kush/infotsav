import React, { Component } from 'react';
import Logo from "./components/logo/Logo.js";
import Timer from "./components/timer/Timer.js";
import NewsLetter from "./components/newsLetter/NewsLetter.js";
import SocialHandles from "./components/socialHandles/SocialHandles.js";
import Background from "./components/background/Background.js";
import Heading from "./components/heading/Heading.js";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Background />
        <Logo />
        <Heading />
        <Timer />
        <NewsLetter />
        <SocialHandles />
      </div>
    );
  }
}

export default App;
