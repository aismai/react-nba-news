import React, { Component } from "react";
import axios from "axios";
import styles from "./VideosList.css";

import { URL } from "../../../config";
import Button from "../Buttons/Button";
import VideosListTemplate from "./VideoListTemplate";

class VideosList extends Component {
  state = {
    teams: [],
    videos: [],
    start: this.props.start,
    end: this.props.start + this.props.amount,
    amount: this.props.amount
  };

  renderTitle = () => {
    return this.props.title ? (
      <h3>
        <strong>NBA</strong> Videos
      </h3>
    ) : null;
  };

  renderButton = () => {
    return this.props.loadMore ? (
      <Button
        type="loadMore"
        text="Load More Videos"
        loadMore={() => this.loadMore()}
      />
    ) : (
      <Button type="linkTo" text="More Videos" linkTo="/videos" />
    );
  };

  renderVideos = () => {
    let template = null;

    switch (this.props.type) {
      case "card":
        template = (
          <VideosListTemplate
            data={this.state.videos}
            teams={this.state.teams}
          />
        );
        break;
      default:
        template = null;
    }

    return template;
  };

  loadMore = () => {
    let end = this.state.end + this.state.amount;
    this.request(this.state.end, end);
  };

  componentWillMount() {
    this.request(this.state.start, this.state.end);
  }

  request = (start, end) => {
    if (this.state.teams.length < 1) {
      axios.get(`${URL}/teams`).then(response => {
        this.setState({
          teams: response.data
        });
      });
    }

    axios.get(`${URL}/videos?_start=${start}&_end=${end}`).then(response => {
      this.setState({
        videos: [...this.state.videos, ...response.data],
        start,
        end
      });
    });
  };

  render() {
    return (
      <div className={styles.videosList_wrapper}>
        {this.renderTitle()}
        {this.renderVideos()}
        {this.renderButton()}
      </div>
    );
  }
}

export default VideosList;
