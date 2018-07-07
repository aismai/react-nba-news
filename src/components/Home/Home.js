import React from "react";

import Slider from "../widgets/Slider/Slider";

const Home = () => {
  return (
    <div>
      <Slider
        type="featured"
        start={0}
        amount={6}
        settings={{
          dots: false
        }}
      />
    </div>
  );
};

export default Home;
