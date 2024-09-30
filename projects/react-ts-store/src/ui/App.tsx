import { useState } from 'react'
import { Products } from './views/Products'
import { mockProducts } from '../infrastructure/mocks/products'
import { ListOfProducts } from '../entities/types'

interface Props {
  products: ListOfProducts
}

function App() {
  const [products] = useState(mockProducts)
  const [filters] = useState({
    category: 'all',
    price: 0
  })

  const filterProducts = ({ products }: Props) => {
    return products.filter(product => {
      return (
        product.price >= filters.price && (
          filters.category === 'all' || product.category === filters.category
        )
      )
    })
  }

  const filteredProducts = filterProducts({ products })

  return (
    <Products products={filteredProducts} />
  )
}

export default App
