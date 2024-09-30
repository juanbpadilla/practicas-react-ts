export interface Product {
  id: string
  title: string
  price: number
  category: string
  thumbnail: string
}

export type ListOfProducts = Product[]