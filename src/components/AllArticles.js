import Card from "./Card";
import previousIcon from "../assets/images/previous-icon.svg";
import nextIcon from "../assets/images/next-icon.svg";

const AllArticles = () => {
  return (
    <div className="all-articles-container">
      <h3 className="all-articles-header">Tous les articles</h3>
      <div className="all-cards-container">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div className="all-articles-pagination-container">
        <button className="previous-button"><img src={previousIcon} alt="" />Précédent</button>
        <p className="pagination-index">Page 1 sur X</p>
        <button className="next-button">Suivant<img src={nextIcon} alt="" /></button>
      </div>
    </div>
  )
}

export default AllArticles;