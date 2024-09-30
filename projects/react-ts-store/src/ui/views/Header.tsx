import { Filters } from '../components/Filters'
import { useFilters } from '../../entities/context/filterContext'

export const Header = () => {
  const { filters, setFilters } = useFilters()

  return (
    <header className="header">
      <h1>React Store 🛒</h1>
      <Filters setFilters={setFilters} filters={filters} />
    </header>
  )
}