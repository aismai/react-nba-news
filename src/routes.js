import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./components/Home/Home";
import Layout from "./hoc/Layout/Layout";
import NewsArticle from "./components/Articles/News/Post/Index";
import VideoArticle from "./components/Articles/Videos/Video/Index";
import NewsMain from "./components/Articles/News/Main/Index";
import VideosMain from "./components/Articles/Videos/Main/Index";
import SignIn from "./components/signin/SignIn";

class Routes extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/news" exact component={NewsMain} />
          <Route path="/articles/:id" exact component={NewsArticle} />
          <Route path="/videos/:id" exact component={VideoArticle} />
          <Route path="/videos" exact component={VideosMain} />
          <Route path="/sign-in" exact component={SignIn} />
        </Switch>
      </Layout>
    );
  }
}

export default Routes;
