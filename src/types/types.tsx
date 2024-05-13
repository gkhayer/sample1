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