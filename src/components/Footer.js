import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
  return (
    <footer class="footer">
      <div class="footer-icons"></div>
        <FontAwesomeIcon icon={faEnvelope} className="footer-icon" />
        <FontAwesomeIcon icon={faEnvelope} className="footer-icon" />
        <FontAwesomeIcon icon={faPhone} className="footer-icon" />
        <FontAwesomeIcon icon={faPhone} className="footer-icon" />
    </footer>
  )
}

export default Footer