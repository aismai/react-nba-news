import React from "react";
import styles from "../VideosList.css";

import VideosListTemplate from "../VideoListTemplate";

const VideosRelated = props => (
  <div className={styles.relatedWrapper}>
    <VideosListTemplate data={props.data} teams={props.teams} />
  </div>
);
export default VideosRelated;
