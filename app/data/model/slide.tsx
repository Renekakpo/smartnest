export interface Slide {
    id: string;
    image: any; // Use 'any' because 'require' returns a type of any
    title: string;
    description: string;
  }