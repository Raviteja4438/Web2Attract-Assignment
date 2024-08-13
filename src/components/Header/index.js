import './index.css'

const Header = () => {
  return (
    <header className='header'>
        <img src="https://res.cloudinary.com/dlngyh6jo/image/upload/v1723443161/livspace.458227b_kjvszq.svg" alt="Livspace Logo" className="logo" />

        <div className="first">
            <nav className="main-nav">
              <ul>
                <li><a href="#">Interiors</a></li>
                <li><a href="#">Design Ideas</a></li>
                <li><a href="#">Magazine</a></li>
                <li><a href="#">Livspace TV</a></li>
                <li><a href="#">Cities</a></li>
                <li><a href="#">Store Locator</a></li>
                <li><a href="#">More</a></li>
              </ul>
            </nav>
            <nav className="secondary-nav">
              <ul>
              <li><a href="#">How it works</a></li>
              <li><a href="#">Offerings</a></li>
              <li><a href="#">Price Calculators</a></li>
              <li><a href="#">The Modular Journey</a></li>
              <li><a href="#">Refer a Friend</a></li>
              <li><a href="#">Partner with us</a></li>
              <button className="consult-button">CONSULT ONLINE NOW</button>
              </ul>
            </nav>
        </div>
        <div className="header-actions">
          <div className="user-icon">
            <i class="bi bi-person"></i>
          </div>
        </div>
    </header>
  )
}

export default Header;
