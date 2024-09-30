import { useState } from 'react'
import { Products } from './views/Products'
import { mockProducts } from '../infrastructure/mocks/products'
import { ListOfProducts } from '../entities/types'
import { Header } from './views/Header'

interface Props {
  products: ListOfProducts
}

function useFilters() {
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0
  })

  const filterProducts = ({ products }: Props) => {
    return products.filter(product => {
      return (
        product.price >= filters.minPrice &&
        (
          filters.category === 'all' ||
          product.category === filters.category
        )
      )
    })
  }

  return { filterProducts, setFilters, filters }
}

function App() {
  const [products] = useState(mockProducts)
  const { filterProducts, setFilters, filters } = useFilters()

  // const filterProducts = ({ products }: Props) => {
  //   return products.filter(product => {
  //     return (
  //       product.price >= filters.price && (
  //         filters.category === 'all' || product.category === filters.category
  //       )
  //     )
  //   })
  // }

  const filteredProducts = filterProducts({ products })

  return (
    <>
      <Header setFilters={setFilters} filters={filters} />
      <Products products={filteredProducts} />
    </>
  )
}

export default App
