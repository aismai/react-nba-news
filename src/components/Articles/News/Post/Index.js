import React, { Component } from "react";
import {
  firebaseDB,
  firebaseLooper,
  firebaseTeams
} from "../../../../firebase";

import styles from "../../Articles.css";
import Header from "./Header";
import Body from "./Body";

class NewsArticles extends Component {
  state = {
    article: [],
    team: []
  };

  componentWillMount() {
    firebaseDB
      .ref(`articles/${this.props.match.params.id}`)
      .once("value")
      .then(snapshot => {
        let article = snapshot.val();

        firebaseTeams
          .orderByChild("teamId")
          .equalTo(article.team)
          .once("value")
          .then(snapshot => {
            const team = firebaseLooper(snapshot);

            this.setState({
              article,
              team
            });
          });
      });
    // axios
    //   .get(`${URL}/articles?id=${this.props.match.params.id}`)
    //   .then(response => {
    //     let article = response.data[0];

    //     axios.get(`${URL}/teams?id=${article.team}`).then(response => {
    //       this.setState({
    //         article,
    //         team: response.data
    //       });
    //     });
    //   });
  }

  render() {
    const article = this.state.article;
    const team = this.state.team;

    return (
      <div className={styles.articleWrapper}>
        <Header
          teamData={team[0]}
          date={article.date}
          author={article.author}
        />
        <Body article={article} />
      </div>
    );
  }
}

export default NewsArticles;
