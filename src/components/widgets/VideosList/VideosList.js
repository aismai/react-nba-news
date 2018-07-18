import React, { Component } from "react";
import styles from "./VideosList.css";
import {
  firebaseTeams,
  firebaseVideos,
  firebaseLooper
} from "../../../firebase";

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
      firebaseTeams.once("value").then(snapshot => {
        const teams = firebaseLooper(snapshot);
        this.setState({ teams });
      });
    }

    firebaseVideos
      .orderByChild("id")
      .startAt(start)
      .endAt(end)
      .once("value")
      .then(snapshot => {
        const videos = firebaseLooper(snapshot);
        this.setState({
          videos: [...this.state.videos, ...videos],
          start,
          end
        });
      })
      .catch(e => {
        console.log(e);
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
