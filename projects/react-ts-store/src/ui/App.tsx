import { useState } from 'react'
import { Products } from './views/Products'
import { mockProducts } from '../infrastructure/mocks/products'
import { ListOfProducts } from '../entities/types'
import { Header } from './views/Header'
import { useFilters } from '../entities/context/filterContext'

interface Props {
  products: ListOfProducts
}

const App = () => {
  const [products] = useState(mockProducts)

  const { filters } = useFilters()

  const filterProducts = ({ products }: Props) => {
    return products.filter(product => {
      return (
        product.price >= filters.minPrice &&
        (filters.category === 'all' || product.category === filters.category)
      );
    });
  };

  const filteredProducts = filterProducts({ products })

  return (
    <>
      <Header />
      <Products products={filteredProducts} />
    </>
  )
}

export default App
