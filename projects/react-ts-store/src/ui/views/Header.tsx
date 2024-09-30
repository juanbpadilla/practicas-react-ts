import { Dispatch, SetStateAction } from 'react'
import { Filters } from '../components/Filters'

interface HeaderProps {
  setFilters: Dispatch<SetStateAction<{ category: string, minPrice: number }>>
  filters: { category: string, minPrice: number }
}

export const Header: React.FC<HeaderProps> = ({ setFilters, filters }) => {
  return (
    <header className="header">
      <h1>React Store 🛒</h1>
      <Filters setFilters={setFilters} filters={filters} />
    </header>
  )
}