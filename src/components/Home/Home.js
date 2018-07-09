import React from "react";

import Slider from "../widgets/Slider/Slider";
import NewsList from "../widgets/NewsList/NewsList";
import VideosList from "../widgets/VideosList/VideosList";
const Home = () => {
  return (
    <div>
      <Slider
        type="featured"
        start={0}
        amount={3}
        settings={{
          dots: false
        }}
      />
      <NewsList type="card" loadMore={true} start={3} amount={3} />
      <VideosList
        type="card"
        title={true}
        loadMore={true}
        start={0}
        amount={3}
      />
    </div>
  );
};

export default Home;
