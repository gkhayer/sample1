import "../style/Card.css";

interface CardProps {
  title: string;
  description: string;
  imageUrl?: string[];
  indiCardStyle?: {};
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  imageUrl,
  indiCardStyle,
}) => {
  return (
    <div className="card" style={indiCardStyle}>
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
      </div>
      <div className="imageContainer">

      {imageUrl ? (
        <img src={imageUrl} alt={title} className="card-image" />
      ) : (
        <></>
      )}
      </div>
    </div>
  );
};

export default Card;
