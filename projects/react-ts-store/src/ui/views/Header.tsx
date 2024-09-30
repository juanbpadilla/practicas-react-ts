import { Filters } from '../components/Filters'

export const Header = () => {
  return (
    <header className="header">
      <h1>React Store 🛒</h1>
      <Filters />
    </header>
  )
}