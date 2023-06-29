import { FaQuoteRight } from "react-icons/fa";

const Review = ({ position, children }) => {
  const { image, title, name, quote } = children;
  return (
    <article className={position}>
      <img src={image} alt={name} className="person-img" />
      <h4>{name}</h4>
      <p className="title">{title}</p>
      <p className="text">{quote}</p>
      <FaQuoteRight className="icon" />
    </article>
  );
};

export default Review;
