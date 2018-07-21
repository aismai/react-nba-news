import React from "react";
import styles from "../Articles.css";
import moment from "moment";

const formaDate = date => {
  return moment(date).format(" MM-DD-YYYY");
};
const PostData = props => (
  <div className={styles.articlePostData}>
    <div>
      Date: <span>{formaDate(props.data.date)}</span>
    </div>
    <div>
      Author: <span>{props.data.author}</span>
    </div>
  </div>
);

export default PostData;
