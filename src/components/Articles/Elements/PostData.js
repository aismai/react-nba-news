import React from "react";
import styles from "../Articles.css";

const PostData = props => (
  <div className={styles.articlePostData}>
    <div>
      Date: <span>{props.data.date}</span>
    </div>
    <div>
      Author: <span>{props.data.author}</span>
    </div>
  </div>
);

export default PostData;
