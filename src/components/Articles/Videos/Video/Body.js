import React from "react";
import styles from "../../Articles.css";

const Body = ({ article }) => (
  <div className={styles.videoWrapper}>
    <h1>{article.title}</h1>
    <iframe
      title="videoplayer"
      width="100%"
      height="300px"
      src={`https://www.youtube.com/embed/${article.url}`}
    />
  </div>
);

export default Body;
