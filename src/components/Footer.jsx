import React from 'react';
import '../assets/styles/Footer.css'

const Footer = () => {
  return (
  <>
  <footer id="footer" className="footer dark-background">
  <div className="container footer-top">
    <div className="row gy-4">
      <div className="col-lg-4 col-md-6 footer-about">
        <a href="/" className="logo d-flex align-items-center">
          <span className="sitename">Presento</span>
        </a>
        <div className="footer-contact pt-3">
          <p>A108 Adam Street</p>
          <p>New York, NY 535022</p>
          <p className="mt-3">
            <strong>Phone:</strong> <span>+1 5589 55488 55</span>
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <span>
              <a
                href="/"
                className="__cf_email__"
                data-cfemail="0a63646c654a6f726b677a666f24696567"
              >
                 ketan@gmail.com
              </a>
            </span>
          </p>
        </div>
        <div className="social-links d-flex mt-4">
          <a href="/">
            <i className="bi bi-twitter-x" />
          </a>
          <a href="/">
            <i className="bi bi-facebook" />
          </a>
          <a href="/">
            <i className="bi bi-instagram" />
          </a>
          <a href="/">
            <i className="bi bi-linkedin" />
          </a>
        </div>
      </div>
      <div className="col-lg-2 col-md-3 footer-links">
        <h4>Useful Links</h4>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">About us</a>
          </li>
          <li>
            <a href="/">Services</a>
          </li>
          <li>
            <a href="/">Terms of service</a>
          </li>
          <li>
            <a href="/">Privacy policy</a>
          </li>
        </ul>
      </div>
      <div className="col-lg-2 col-md-3 footer-links">
        <h4>Our Services</h4>
        <ul>
          <li>
            <a href="/">Web Design</a>
          </li>
          <li>
            <a href="/">Web Development</a>
          </li>
          <li>
            <a href="/">Product Management</a>
          </li>
          <li>
            <a href="/">Marketing</a>
          </li>
          <li>
            <a href="/">Graphic Design</a>
          </li>
        </ul>
      </div>
      <div className="col-lg-4 col-md-12 footer-newsletter">
        <h4>Our Newsletter</h4>
        <p>
          Subscribe to our newsletter and receive the latest news about our
          products and services!
        </p>
        <form
          
          className="php-email-form"
        >
          <div className="newsletter-form">
            <input type="email" name="email" />
            <input type="button" defaultValue="Subscribe" />
          </div>
          <div className="loading">Loading</div>
          <div className="error-message" />
          <div className="sent-message">
            Your subscription request has been sent. Thank you!
          </div>
        </form>
      </div>
    </div>
  </div>
  <div className="container copyright text-center mt-4">
    <p>
      © <span>Copyright</span>{" "}
      <strong className="px-1 sitename">Presento</strong>{" "}
      <span>All Rights Reserved</span>
    </p>
    <div className="credits">
      
      Designed by <a href="/">Ketan Hase</a>
    </div>
  </div>
</footer>

  
  
  </>
  )
}

export default Footer