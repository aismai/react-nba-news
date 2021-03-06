import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./components/Home/Home";
import Layout from "./hoc/Layout/Layout";
import NewsArticle from "./components/Articles/News/Post/Index";
import VideoArticle from "./components/Articles/Videos/Video/Index";
import NewsMain from "./components/Articles/News/Main/Index";
import VideosMain from "./components/Articles/Videos/Main/Index";
import SignIn from "./components/signin/SignIn";
import Dashboard from "./components/Dashboard/Dashboard";

const Routes = props => {
  return (
    <Layout user={props.user}>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/news" exact component={NewsMain} />
        <Route path="/articles/:id" exact component={NewsArticle} />
        <Route path="/videos/:id" exact component={VideoArticle} />
        <Route path="/videos" exact component={VideosMain} />
        <Route path="/sign-in" exact component={SignIn} />
        <Route path="/dashboard" exact component={Dashboard} />
      </Switch>
    </Layout>
  );
};

export default Routes;
