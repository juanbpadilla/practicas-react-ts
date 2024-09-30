import { createRoot } from 'react-dom/client'
import App from './ui/App.tsx'
import './ui/styles/index.css'
import { FilterProvider } from './entities/context/filterContext'

createRoot(document.getElementById('root')!).render(
  <FilterProvider>
    <App />
  </FilterProvider>,
)
