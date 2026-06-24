import { useMemo, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import { products } from './data/products'
import About from './pages/About'
import Home from './pages/Home'
import ProductDetail from './pages/ProductDetail'
import './App.css'

function App() {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredProducts = useMemo(() => {
    const query = searchTerm.trim().toLowerCase()

    if (!query) {
      return products
    }

    return products.filter((product) =>
      [
        product.name,
        product.colour,
        product.fabric,
        product.occasion,
        product.weaveType,
      ]
        .join(' ')
        .toLowerCase()
        .includes(query),
    )
  }, [searchTerm])

  return (
    <BrowserRouter>
      <Navbar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <main>
        <Routes>
          <Route
            path="/"
            element={<Home products={filteredProducts} searchTerm={searchTerm} />}
          />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
