import '../styles/Filters.css'

export const Filters = () => {
  return (
    <section className="filters">
      <div>
        <label htmlFor="price">Price</label>
        <input
          type='range'
          id='price'
          min='0'
          max='1000'
        />
      </div>

      <div>
        <label htmlFor="category">Categoría</label>
        <select id='category'>
          <option value="all">Todas</option>
          <option value="laptops">Laptops</option>
          <option value="smartphones">Celulares</option>
          <option value="fragrances">Fragancias</option>
        </select>
      </div>
    </section>
  )
}