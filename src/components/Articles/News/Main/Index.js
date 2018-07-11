import React from "react";

import Slider from "../../../widgets/Slider/Slider";
import NewsList from "../../../widgets/NewsList/NewsList";

const NewsMain = () => (
  <div>
    <Slider type="featured" settings={{ dots: false }} start={0} amount={3} />
    <NewsList type="cardMain" loadMore={true} start={3} amount={10} />
  </div>
);

export default NewsMain;
