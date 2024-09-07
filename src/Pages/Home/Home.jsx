import Banner from "../../components/general/HomeComponents/Banner/Banner";
import Blog from "../../components/general/HomeComponents/Blog/Blog";
import Frames from "../../components/general/HomeComponents/Frames/Frames";
import Portfolio from "../../components/general/HomeComponents/Portfolio/Portfolio";

const Home = () => {
  return (
    <div>
      <Banner />
      <Portfolio />
      <Blog />
      <Frames />
    </div>
  );
};

export default Home;
