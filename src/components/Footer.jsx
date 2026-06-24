import { Camera, Mail, MapPin, Phone, Users } from 'lucide-react'
import { Link } from 'react-router-dom'
import logo from '../assets/paan-navbar-logo.png'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <section className="footer-brand" aria-label="Brand">
          <img src={logo} alt="PaaN" />
          <p>
            Banarasi sarees rooted in heritage, refined for modern celebrations.
          </p>
        </section>

        <section aria-label="Quick links">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">Catalogue</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </section>

        <section aria-label="Contact information">
          <h3>Contact</h3>
          <ul className="contact-list">
            <li>
              <Phone size={16} aria-hidden="true" />
              +91 99999 99999
            </li>
            <li>
              <Mail size={16} aria-hidden="true" />
              hello@paanweaves.com
            </li>
            <li>
              <MapPin size={16} aria-hidden="true" />
              Varanasi, Uttar Pradesh
            </li>
          </ul>
        </section>

        <section aria-label="Social links">
          <h3>Social</h3>
          <div className="social-links">
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram">
              <Camera size={19} aria-hidden="true" />
            </a>
            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" aria-label="Facebook">
              <Users size={19} aria-hidden="true" />
            </a>
          </div>
        </section>
      </div>
    </footer>
  )
}

export default Footer
