import cardImage from "../assets/images/384x240.png";
import openLinkImage from "../assets/images/open-link.svg";

const Card = () => {
  return (
    <div className="article-card">
      <img className="card-picture" alt="" src={cardImage} />
      <p className="card-publishing-date">25 Jun 2024</p>
      <div className="card-title-container">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        <img alt="" src={openLinkImage} />
      </div>
      <p className="card-featured-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
  )
}

export default Card;