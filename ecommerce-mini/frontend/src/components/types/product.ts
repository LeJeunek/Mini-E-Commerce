export type Category = "piston" | "rod" | "wiper";

export interface Product {
  id: string;
  name: string;
  category: Category;
  price: number;
  description: string;
  image: string;

}
