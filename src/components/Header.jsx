import { FaBars, FaShoppingCart } from 'react-icons/fa'
import './Header.scss'

function Header() {
    return (
        <div className="header-box">
            <div className="header-blue-box">
                <div className="hamburger-box">
                    <h4><FaBars /></h4>
                </div>
                <div className="logo-box">
                    <h2>Mountaineer Music</h2>
                </div>
                <div className="cart-box">
                    <h4><FaShoppingCart /></h4>
                </div>
            </div>
        </div>
    )
}

export default Header