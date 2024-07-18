export type Career = {
    id: number;
    title: string;
    salary: number;
    location: string;
  };
  
  export type LoaderData = {
    data: Career[]
  };

  export type CareerDetails = {
    data: Career
  }

  export type ErrorMessage = {
    message: string;
  };

  // Products

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

  export type AccordianType = {
    question: string;
    answer: string;
  };


  // Home

  export type PricesInfo = {
    price: string;
    packTitle: string;
    desc: string;
    features: Features;
    bgColor: string;
    textColor: string;
  };
  

 export type Features = {
    feature1: string;
    feature2: string;
    feature3: string;
  };