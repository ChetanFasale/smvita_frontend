import React from "react";
import "./Footer.css";
// import { Button } from "./Button";
import { Link } from "react-router-dom";

function TheFooter() {
  return (
    <div className="footer-container">
      
      <div class="footer-links">
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>About Us</h2>
            <Link to="/about">Our Origin</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/contact">Careers</Link>
            <Link to="/about">Terms of Service</Link>
          </div>
          <div class="footer-link-items">
            <h2>Contact Us</h2>
            <Link to="/contact">Contact</Link>
            <Link to="/contact">Support</Link>
            <Link to="/courses">Courses</Link>
            <Link to="/contact">Sponsorships</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
         
          <div class="footer-link-items">
            <h2>Social Media</h2>
            <a href="https://www.instagram.com/narendramodi/" target="_blank">Instagram</a>
            <a href="https://www.facebook.com/SMVITAPGDAC" target="_blank">Facebook</a>
            <a href="https://www.youtube.com/channel/UCYlE74jGPXrd6jxlWpvjX_g" target="_blank">Youtube</a>
            <a href="https://twitter.com/narendramodi?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" target="_blank">Twitter</a>
          </div>
        </div>
        <div className="footer-link-wrapper">
         
          <div class="footer-link-items">
            <h2>Authorised Training center</h2>
            <p id="address">5th Floor, Vidyanidhi Education Complex, Vidyanidhi Road, Juhu Scheme Andheri (W), Mumbai 400 049 India</p>
        
          </div>
        </div>
      </div>
      <section class="social-media">
        <div class="social-media-wrap">
          <small class="website-rights">SMVITA © 2021</small>
          <div class="social-icons">
            <Link
              class="social-icon-link facebook"
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <i class="fab fa-facebook-f" />
            </Link>
            <Link
              class="social-icon-link instagram"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <i class="fab fa-instagram" />
            </Link>
            <Link
              class="social-icon-link youtube"
              to="/"
              target="_blank"
              aria-label="Youtube"
            >
              <i class="fab fa-youtube" />
            </Link>
            <Link
              class="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="Twitter"
            >
              <i class="fab fa-twitter" />
            </Link>
            <Link
              class="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <i class="fab fa-linkedin" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TheFooter;
