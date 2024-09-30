import { Dispatch, SetStateAction } from 'react'
import '../styles/Filters.css'

interface FiltersProps {
  setFilters: Dispatch<SetStateAction<{ category: string, minPrice: number }>>
  filters: { category: string, minPrice: number }
}

export const Filters: React.FC<FiltersProps> = ({ setFilters, filters }) => {
  const handleChangeMinPrice = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newPrice = Number(event.target.value)
    setFilters(prevState => ({
      ...prevState,
      minPrice: newPrice
    }))
  }

  const handleChangeCategory = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newCategory = event.target.value
    setFilters(prevState => ({
      ...prevState,
      category: newCategory
    }))
  }
  return (
    <section className="filters">
      <div>
        <label htmlFor="price">Precio mínimo:</label>
        <input
          type='range'
          id='price'
          min='0'
          max='1000'
          onChange={handleChangeMinPrice}
        />
        <span>${filters.minPrice}</span>
      </div>

      <div>
        <label htmlFor="category">Categoría</label>
        <select id='category' onChange={handleChangeCategory}>
          <option value="all">Todas</option>
          <option value="laptops">Laptops</option>
          <option value="smartphones">Celulares</option>
          <option value="fragrances">Fragancias</option>
        </select>
      </div>
    </section>
  )
}