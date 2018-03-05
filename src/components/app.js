import { h, Component } from "preact";
import { Router } from "preact-router";
import Home from "../routes/home";
import Blog from "../routes/blog";
import Post from "../routes/post";

if (module.hot) {
  require("preact/debug");
}

export default class App extends Component {
  handleRoute = e => {
    this.currentUrl = e.url;
  };

  render() {
    return (
      <div id="app">
        <Router onChange={this.handleRoute}>
          <Home path="/" />
          <Blog path="/blog" />
          <Post path="/post/:id" />
        </Router>
      </div>
    );
  }
}
