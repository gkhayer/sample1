import "../style/Home.css";
import ProductPage from "./ProductPage";

export interface Product {
  id: Number;
  name: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
  price: string;
  color: string;
}

export interface ProductTypes {
  products: Product[];
}

const Home = () => {
  return (
    <>
      <div>
        <div className="box">{/* {middle part} */}</div>
        <ProductPage />
      </div>
    </>
  );
};

Home.propTypes = {};

export default Home;
