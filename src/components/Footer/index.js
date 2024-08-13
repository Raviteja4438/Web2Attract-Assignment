//import React from 'react'
import {FaFacebookF, FaTwitter, FaInstagram, FaPinterest, FaYoutube} from 'react-icons/fa'
import './index.css'

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer-container">
            <div className="footer-section logo-section">
                <h2 className="footer-title">LIVSPACE</h2>
                <div className="social-icons">
                    <a href="#"><FaFacebookF /></a>
                    <a href="#"><FaTwitter /></a>
                    <a href="#"><FaInstagram /></a>
                    <a href="#"><FaPinterest /></a>
                    <a href="#"><FaYoutube /></a>
                </div>
            </div>
            <div className="footer-section">
                <h4>DOWNLOAD OUR APP</h4>
                <div className="app-links">
                  <a href="#"><img src="https://w7.pngwing.com/pngs/822/688/png-transparent-apple-on-the-app-store-screenshot-iphone-app-store-google-play-store-electronics-text-logo-thumbnail.png" alt="Google Play" /></a>
                  <a href="#"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqUSzDvFwwPhRKLbwliXwVEFpuTuITOizKjA&s" alt="App Store" /></a>
                </div>
            </div>
            <div className="footer-section">
                <h4>OFFERINGS</h4>
                <ul>
                    <li><a href="#">Interiors</a></li>
                </ul>
            </div>
            <div className="footer-section">
                <h4>GET INSPIRED</h4>
                <ul>
                  <li><a href="#">Design Ideas</a></li>
                  <li><a href="#">Magazine</a></li>
                  <li><a href="#">Livspace TV</a></li>
                </ul>
            </div>
            <div className="footer-section">
              <h4>COMPANY</h4>
              <ul>
              <li><a href="#">Refer a friend</a></li>
              <li><a href="#">How it works</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Policies</a></li>
              <li><a href="#">Terms and Conditions</a></li>
              <li><a href="#">About us</a></li>
              <li><a href="#">Store Locator</a></li>
              <li><a href="#">Contact us</a></li>
              <li><a href="#">Privacy</a></li>
              <li><a href="#">Own a franchhise</a></li>
              </ul>
            </div>
            <div className="footer-section contact-section">
                <h4>CONTACT US</h4>
                <ul>
                  <li>Call us: 1800-309-0937</li>
                  <li>Email us: <a href="mailto:care@livspace.com">care@livspace.com</a></li>
                </ul>
          
                <a href="#"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGivEKXPApWw3k-uciqtBEpBghnCu-opV9AA&s" alt="WhatsApp" /></a>
            </div>
            <hr width="100%" color="#ffffff" size="2"></hr>
            <h1 className="head">This site is protected by reCAPTCHA and the GOOGLE privacy and terms Applyed </h1>
            <p className="last">@2024 LIVSPACE.COM ALL RIGHTS RESERVED</p>
            <hr width="100%" color="#ffffff" size="2"></hr>
        </div>
    </footer>
  )
}

export default Footer
