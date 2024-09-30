import { useState } from 'react'
import { Products } from './views/Products'
import { mockProducts } from '../infrastructure/mocks/products'

function App() {
  const [products] = useState(mockProducts)

  return (
    <Products products={products} />
  )
}

export default App
