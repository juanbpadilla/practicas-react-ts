export interface Product {
  id: string
  title: string
  price: number
  category: string
  thumbnail: string
}

export type ListOfProducts = Product[]

export interface Filters {
  category: string;
  minPrice: number;
}