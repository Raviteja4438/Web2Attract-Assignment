import React, {useState} from 'react'
import './index.css'
import 'bootstrap-icons/font/bootstrap-icons.css';

const DesignCard = ({ image, title, size, onBook, onGetQuote }) => {
  const [isFavorite, setIsFavorite] = useState(false)

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite)
  }

  return (
    <div className="design-card">
        <img src={image} alt={title} className="design-card-image" />
        <div className="design-card-body">
            <h3 className="design-card-title">{title}</h3>
            <p className="design-card-size">Size: {size}</p>
            <div className="design-card-actions">
                <button className="design-card-btn book-btn" onClick={onBook}>Book Free Consultation</button>
                <button className="design-card-btn quote-btn" onClick={onGetQuote}>Get Quote</button>
            </div>
            <div className={`design-card-favorite ${isFavorite ? 'favorite' : ''}`} onClick={toggleFavorite}>
                <i className="bi bi-heart"></i>
            </div>
        </div>
    </div>
  )
}

export default DesignCard;
