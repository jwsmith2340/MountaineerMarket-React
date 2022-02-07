import { FaGithubSquare, FaLinkedin } from 'react-icons/fa'
import './Footer.scss'

function Footer() {
    return (
        <div className="footer-box">
            <div className="contact"><h5>Contact Us</h5></div>
            <div className="copyright"><h5>James Smith</h5></div>
            <div className="links"><h5><FaGithubSquare /></h5><h5><FaLinkedin /></h5></div>
        </div>
    )
}

export default Footer