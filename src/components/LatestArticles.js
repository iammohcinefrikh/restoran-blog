import Card from "./Card";

const LatestArticles = () => {
  return (
    <div className="latest-articles-container">
      <h3 className="latest-articles-header">Articles récents</h3>
      <div className="article-cards-container">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}

export default LatestArticles;