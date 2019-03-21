import React, { Component } from 'react';
import Logo from "./components/logo/Logo.js";
import Timer from "./components/timer/Timer.js";
import NewsLetter from "./components/newsLetter/NewsLetter.js";
import SocialHandles from "./components/socialHandles/SocialHandles.js";
import Background from "./components/background/Background.js";
import Heading from "./components/heading/Heading.js";
import Loader from "./components/loader/Loader.js";

import './App.css';

class App extends Component {
constructor()
{
  super();
  this.state=
              {
                loading:"hidden"
              }
}
// componentWillMount()
// {
//   this.setState({loading:"visible"});
// }
// componentDidMount()
// {
//   this.setState({loading:"hidden"});
// }
  render() {
    return (
      <div className="App">
        <Background />
        <Loader visibility={this.state.loading}/>
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
