import Navbar from "../components/Navbar";
import Search from "../components/Search";
import LatestArticles from "../components/LatestArticles";
import Categories from "../components/Categories";
import AllArticles from "../components/AllArticles";

const Home = () => {
  return (
    <>
      <Navbar />
      <Search />
      <LatestArticles />
      <Categories />
      <AllArticles />
    </>
  )
}

export default Home;