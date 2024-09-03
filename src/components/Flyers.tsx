import '../style/Flyer.css'

export interface FlyerProps {
  title: string;
  description: string;
  url: string;
}

const Flyers: React.FC<FlyerProps> = ({ url, title }) => {
  return <img src={url} alt={title} className="flyer-image"  width={400}/>;
};

export default Flyers;
