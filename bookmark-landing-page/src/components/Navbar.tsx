import logo from '../assets/logo-bookmark.svg'
import './_Navbar.scss'

export default function Navbar() {
  return (
    <nav className='navbar container'>
        <section className="logo">
            <img src={logo} alt="logo" />
        </section>
        <ul className="list-items">
            <li className="list-item">
                <a href="#">Features</a>
            </li>
            <li className="list-item">
                <a href="#">Pricing</a>
            </li>
            <li className="list-item">
                <a href="#">Contact</a>
            </li>
            <li className="list-item">
                <button className="nav-button">LOGIN</button>
            </li>
        </ul>
    </nav>
  )
}
