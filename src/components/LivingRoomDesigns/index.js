import React, {useState} from 'react'
import DesignCard from '../DesignCard'
import { useNavigate } from 'react-router-dom'
import './index.css'

const LivingRoomDesigns = () => {
  const [showDetails, setShowDetails] = useState(false);
  const navigate=useNavigate()

  const handleGetQuote = () => {
    alert("Get Quote Clicked!")
  }

  const handleBookConsultation = () => {
    setShowDetails(true)
  }

  const handleClosePopup = () => {
    setShowDetails(false)
    navigate('/')
  }

  return (
    <div className="living-room-designs-container">
        <div className="breadcrumbs">
          <a href="#Home">Home</a>/<a href='#Design'>Design Ideas</a>/<span>Living Room</span>
        </div>
        <h2 className="living-room-title">Living Room Interior Designs</h2>
        <p className="living-room-description">
            Discover a wide range of handpicked, living room interior designs and décor ideas at Livspace. We bring<br/>you living room designs that are customizable, practical and trendy. From modular TV units to wall paintings and living<br/>room wall designs, you’ll find all the inspiration you’ll need to get started. Browse now to zero in on your <br/>favourite design and create a living room space that reflects your style.
        </p>
        <div className="living-room-designs">
        <DesignCard
          image="https://images.livspace-cdn.com/w:768/h:400/plain/https://d3gq2merok8n5r.cloudfront.net/abhinav/ond-1634120396-Obfdc/amj-2024-1711965337-VsMIK/living-room-1712816585-gZ0OZ/lr19-1716791918-jGYtH.jpg"
          title="Luxury Contemporary Living Room Design With L Shaped Sofa"
          size="15x14 Feet"
          alt='imag1'
          isFavorite={true}
          onBook={handleBookConsultation}
          onGetQuote={handleGetQuote}
        />
        <DesignCard
          image="https://images.livspace-cdn.com/w:768/h:400/plain/https://d3gq2merok8n5r.cloudfront.net/abhinav/ond-1634120396-Obfdc/amj-2024-1711965337-VsMIK/living-room-1712816585-gZ0OZ/lr20-1716791915-d2TC2.jpg" 
          title="Mirrored Panel Wall Contemporary Living Room Design With Sofas"
          size="13x13 Feet"
          alt='image2'
          isFavorite={false}
          onBook={handleBookConsultation}
          onGetQuote={handleGetQuote}
        />
        <DesignCard
          image="https://images.livspace-cdn.com/w:768/h:400/plain/https://d3gq2merok8n5r.cloudfront.net/abhinav/ond-1634120396-Obfdc/amj-2024-1711965337-VsMIK/living-room-1712816585-gZ0OZ/lr17-1716277318-X6jXM.jpg"
          title="Contemporary Living Room Design With Light Grey Sofa and Accent Chair"
          size="14x12 Feet"
          alt='image3'
          isFavorite={true}
          onBook={handleBookConsultation}
          onGetQuote={handleGetQuote}
        />
        <div className='card1'>
            <h2>2BHK Homes Form 3.37<br/>Laks</h2>
            <p>Homes That Fit All Budgets. EMIS Starting<br/>From 9k/- Month</p>
            <button>GET FREE QUOTE</button>
        </div>
        <DesignCard
          image="https://images.livspace-cdn.com/w:768/h:400/plain/https://d3gq2merok8n5r.cloudfront.net/abhinav/ond-1634120396-Obfdc/amj-2024-1711965337-VsMIK/living-room-1712816585-gZ0OZ/lr16-1716277320-z6EYw.jpg" 
          title="Contemporary Living Room Design With Beign Sofa and Oxyn wall"
          size="16x14 Feet"
          alt='image4'
          isFavorite={true}
          onBook={handleBookConsultation}
          onGetQuote={handleGetQuote}
        />
        <DesignCard
          image="https://images.livspace-cdn.com/w:768/h:400/plain/https://d3gq2merok8n5r.cloudfront.net/abhinav/ond-1634120396-Obfdc/amj-2024-1711965337-VsMIK/living-room-1712816585-gZ0OZ/lr15-1715851746-m9CoA.jpg" 
          title="Contemporary Living Room Design With Yellow Sofa and Nesting Table"
          size="14x12 Feet"
          alt='image5'
          isFavorite={true}
          onBook={handleBookConsultation}
          onGetQuote={handleGetQuote}
        />
        <DesignCard
          image="https://images.livspace-cdn.com/w:768/h:400/plain/https://d3gq2merok8n5r.cloudfront.net/abhinav/ond-1634120396-Obfdc/amj-2024-1711965337-VsMIK/living-room-1712816585-gZ0OZ/lr14-1-1715851748-4tera.jpg"
          title="Contemporary Living Room Design With Light Grey Sofa and Accent Chair"
          size="12x11 Feet"
          alt='image6'
          isFavorite={true}
          onBook={handleBookConsultation}
          onGetQuote={handleGetQuote}
        />
        <DesignCard
          image="https://images.livspace-cdn.com/w:768/h:400/plain/https://d3gq2merok8n5r.cloudfront.net/abhinav/ond-1634120396-Obfdc/amj-2024-1711965337-VsMIK/living-room-1712816585-gZ0OZ/lr13-1715851751-HdgJh.jpg" 
          title="Contemporary Living Room Design With Light Grey Sofa and Accent Chair"
          size="15x14 Feet"
          alt='image7'
          isFavorite={true}
          onBook={handleBookConsultation}
          onGetQuote={handleGetQuote}
        />
        <DesignCard
          image="https://images.livspace-cdn.com/w:768/h:400/plain/https://d3gq2merok8n5r.cloudfront.net/abhinav/ond-1634120396-Obfdc/amj-2024-1711965337-VsMIK/living-room-1712816585-gZ0OZ/wd11-1715852666-gF4uS.jpg" 
          title="Contemporary Living Room Design With Light Grey Sofa and Accent Chair"
          size="15x14 Feet"
          alt='image8'
          isFavorite={true}
          onBook={handleBookConsultation}
          onGetQuote={handleGetQuote}
        />
        <DesignCard
          image="https://images.livspace-cdn.com/w:768/h:400/plain/https://d3gq2merok8n5r.cloudfront.net/abhinav/ond-1634120396-Obfdc/amj-2024-1711965337-VsMIK/living-room-1712816585-gZ0OZ/lr-11-1715851752-zQ9Nd.jpg"
          title="Contemporary Living Room Design With Light Grey Sofa and Accent Chair"
          size="14x12 Feet"
          alt='image9'
          isFavorite={true}
          onBook={handleBookConsultation}
          onGetQuote={handleGetQuote}
        />
        <div className='card2'>
            <h2>The Livspace promise</h2>
            <ul>
                <li>Flat 10 Years Warrenty</li>
                <li>45 days-Move-In gurrante</li>
                <li>146 Quality Checks</li>
                <li>Easy financing Option</li>
                <li>Flat 10 Years Warrenty</li>
                <li>customizable Design</li>
            </ul>
            <button>GET FREE QUOTE</button>
            <p>Know More</p>
        </div>
        <DesignCard
          image="https://images.livspace-cdn.com/w:768/h:400/plain/https://d3gq2merok8n5r.cloudfront.net/abhinav/ond-1634120396-Obfdc/amj-2024-1711965337-VsMIK/living-room-1712816585-gZ0OZ/lr11-1715845035-xzZ8y.jpg" 
          title="Contemporary Living Room Design With Light Grey Sofa and Accent Chair"
          size="14x12 Feet"
          alt='image10'
          isFavorite={true}
          onBook={handleBookConsultation}
          onGetQuote={handleGetQuote}
        />
        <DesignCard
          image="https://images.livspace-cdn.com/w:768/h:400/plain/https://d3gq2merok8n5r.cloudfront.net/abhinav/ond-1634120396-Obfdc/amj-2024-1711965337-VsMIK/real-home-images-1712567973-YCrUk/may-1715239570-6yWI4/living-room-106-1715239591-3mLqY.jpg" 
          title="Contemporary Living Room Design With Light Grey Sofa and Accent Chair"
          size="10x14 Feet"
          alt='image11'
          isFavorite={true}
          onBook={handleBookConsultation}
          onGetQuote={handleGetQuote}
        />
        <DesignCard
          image="https://images.livspace-cdn.com/w:768/h:400/plain/https://d3gq2merok8n5r.cloudfront.net/abhinav/ond-1634120396-Obfdc/amj-2024-1711965337-VsMIK/real-home-images-1712567973-YCrUk/may-1715239570-6yWI4/living-room-106-1715239591-3mLqY.jpg" 
          title="Contemporary Living Room Design With Light Grey Sofa and Accent Chair"
          size="13x16 Feet"
          alt='image12'
          isFavorite={true}
          onBook={handleBookConsultation}
          onGetQuote={handleGetQuote}
        />
        <DesignCard
          image="https://images.livspace-cdn.com/w:768/h:400/plain/https://d3gq2merok8n5r.cloudfront.net/abhinav/ond-1634120396-Obfdc/amj-2024-1711965337-VsMIK/real-home-images-1712567973-YCrUk/may-1715239570-6yWI4/living-room-83-1715239618-uDtU2.jpg" 
          title="Contemporary Living Room Design With Light Grey Sofa and Accent Chair"
          size="12x16 Feet"
          alt='image13'
          isFavorite={true}
          onBook={handleBookConsultation}
          onGetQuote={handleGetQuote}
        />
        <div className='card3'>
            <div>
                <img src='https://images.livspace-cdn.com/w:1366/plain/https://d3gq2merok8n5r.cloudfront.net/bumblebee/design-ideas-1631689829-DYFFs/categories-1631797090-e35Vc/desktop-1631797104-w47JI/1518-x-1288-1648187994-4ef5H.jpg' className='image'alt='image4'/>
            </div>
            <div className='forms'>
                <h2>Design For Every Budget</h2>
                <p>Get Your Dream Home Today .Let Our<br/>Experts help You </p>
                <form>
                    <input type='text' placeholder='Name'/>
                    <input type='email' placeholder='Email'/>
                    <input type='tele' placeholder='Phone'/>
                    <p><input type='checkbox'/>Send me update on whatsapp</p>
                    <input type='text' placeholder='property name'/>
                    <button>GET FREE QUOTE</button>
                    <p>By Submitting this from, you agree to the<br/><span>Privacy,Policy&terms and condition</span></p>
                </form>
            </div>
        </div>
        <DesignCard
          image="https://images.livspace-cdn.com/w:768/h:400/plain/https://d3gq2merok8n5r.cloudfront.net/abhinav/ond-1634120396-Obfdc/jas-2023-1688629305-0KDli/living-room-1689059506-0ozMM/real-home-1690365930-sHRZY/la-4-1690365982-z6Mef.jpg" 
          title="Contemporary Living Room Design With Light Grey Sofa and Accent Chair"
          size="14x12 Feet"
          alt='image14'
          isFavorite={true}
          onBook={handleBookConsultation}
          onGetQuote={handleGetQuote}
        />
        <DesignCard
          image="https://images.livspace-cdn.com/w:768/h:400/plain/https://d3gq2merok8n5r.cloudfront.net/abhinav/ond-1634120396-Obfdc/jas-2023-1688629305-0KDli/living-room-1689059506-0ozMM/lr41-1689679987-atxdY.jpg" 
          title="Contemporary Living Room Design With Light Grey Sofa and Accent Chair"
          size="10x14 Feet"
          alt='image15'
          isFavorite={true}
          onBook={handleBookConsultation}
          onGetQuote={handleGetQuote}
        />
        <DesignCard
          image="https://images.livspace-cdn.com/w:768/h:400/plain/https://d3gq2merok8n5r.cloudfront.net/abhinav/ond-1634120396-Obfdc/jas-2023-1688629305-0KDli/living-room-1689059506-0ozMM/lr40-1689680109-JjmRS.jpg" 
          title="Contemporary Living Room Design With Light Grey Sofa and Accent Chair"
          size="13x16 Feet"
          alt='image16'
          isFavorite={true}
          onBook={handleBookConsultation}
          onGetQuote={handleGetQuote}
        />
      </div>
      {showDetails && (
        <div className="details-popup">
            <button type="button" className="close" aria-label="Close" onClick={handleClosePopup}>
              <span aria-hidden="true">&times;</span>
            </button> 

            <h2>Talk To designer</h2>
            <p>Get your Dream home today. Let our <br/>Experts help you</p>
            <form>
                <input type="text" placeholder='Name' />
                <inout type="email" placeholder="Email" />
                <input type="tele" placeholder="Phone" />
                <p><input type="checkbox" />Send me update on Whatsapp</p>
                <input type="text" placeholder='property name' />
                <button>GET FREE QUOTE</button>
                <p>By submitting this from, you agree to the<br/><span>Privacy, Policy&terms and condition</span></p>
            </form>
        </div>
      )}
    </div>
  )
}

export default LivingRoomDesigns
