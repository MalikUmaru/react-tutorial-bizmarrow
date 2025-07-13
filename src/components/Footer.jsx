import './Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
    return(
        <div className='footer-container'>
          <h4>Your Web Brand
          <h5>&copy; My Web, 2025</h5>
          </h4>
            
            <div>
                <h4>Follow us on</h4>
                <li className='footer-link'>Facebook</li>
                <li className='footer-link'>Twitter</li>
                <li className='footer-link'>Instagram</li>
                <li className='footer-link'>Whatsapp</li>
            </div>
            <div className='footer-quick-links'>
                <h4>Quick Links</h4>
                <li className='quick-link'><Link to="/">Home</Link></li>
                <li className='quick-link'><Link to="/about" >About</Link></li>
                <li className='quick-link'><Link to="/contact" >Contact</Link></li>
                <li className='quick-link'><Link to="/policies" >Terms</Link></li>
            </div>
        </div>
    )
}

export default Footer