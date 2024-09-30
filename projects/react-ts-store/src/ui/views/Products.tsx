import '../styles/Products.css'
import { AddToCartIcon } from '../components/Icons'
import { ListOfProducts } from '../../entities/types'

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
                <strong>{product.title}</strong> - ${product.price}
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
