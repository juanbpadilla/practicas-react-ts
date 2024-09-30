import '../styles/Products.css'
import { AddToCartIcon } from '../components/Icons'

interface Product {
  id: string
  title: string
  price: number
  category: string
  thumbnail: string
}

type ListOfProducts = Product[]

interface Props {
  products: ListOfProducts
}

export const Products = ({ products }: Props) => {
  return (
    <main className='products'>
      <ul>
        {
          products.map(product => (
            <li key={product.id}>
              <img
                src={product.thumbnail}
                alt={product.title}
              />
              <div>
                <strong>{product.title}</strong>
              </div>
              <div>
                <button>
                  <AddToCartIcon />
                </button>
              </div>
            </li>
          ))
        }
      </ul>
    </main>
  )
}
