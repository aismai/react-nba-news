import React, { Component } from "react";
import { firebaseArticles } from "../../../firebase";

import SliderTemplates from "./SliderTemplates";

class Slider extends Component {
  state = { news: [] };

  componentWillMount() {
    firebaseArticles
      .limitToFirst(3)
      .once("value")
      .then(snapshot => {
        const news = [];

        snapshot.forEach(childSnapshot => {
          news.push({
            ...childSnapshot.val(),
            id: childSnapshot.key
          });
        });
        this.setState({
          news
        });
      });
  }

  render() {
    return (
      <div>
        <SliderTemplates
          data={this.state.news}
          type={this.props.type}
          settings={this.props.settings}
        />
      </div>
    );
  }
}

export default Slider;
