import { Heart, MessageCircle, Search } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/paan-navbar-logo.png'

function Navbar({ searchTerm, onSearchChange }) {
  return (
    <header className="site-header">
      <nav className="navbar" aria-label="Primary navigation">
        <Link className="brand-logo" to="/" aria-label="PaaN home">
          <img src={logo} alt="PaaN" />
          <span>Threads of Heritage</span>
        </Link>

        <div className="search-wrap">
          <Search size={20} aria-hidden="true" />
          <input
            type="search"
            placeholder="Search Banarasi sarees"
            aria-label="Search Banarasi sarees"
            value={searchTerm}
            onChange={(event) => onSearchChange(event.target.value)}
          />
        </div>

        <div className="nav-actions">
          <NavLink className="nav-link" to="/about">
            About
          </NavLink>
          <button className="icon-button" type="button" aria-label="Wishlist">
            <Heart size={19} aria-hidden="true" />
          </button>
          <a
            className="whatsapp-button"
            href="https://wa.me/919999999999"
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle size={18} aria-hidden="true" />
            Enquire
          </a>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
