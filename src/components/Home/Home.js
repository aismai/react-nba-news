import React from "react";

import Slider from "../widgets/Slider/Slider";

const Home = () => {
  return (
    <div>
      <Slider type="featured" start={0} amount={3} />
    </div>
  );
};

export default Home;
