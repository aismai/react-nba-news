import React, { Component } from "react";
import axios from "axios";

import SliderTemplates from "./SliderTemplates";
import { URL } from "../../../config";

class Slider extends Component {
  state = { news: [] };

  componentWillMount() {
    axios
      .get(
        `${URL}/articles?_start=${this.props.start}&_end=${this.props.amount}`
      )
      .then(response => {
        this.setState({
          news: response.data
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
