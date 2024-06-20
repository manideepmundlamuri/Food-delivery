import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-left">
                    <img src={assets.logo} alt="" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos harum, corporis quis eum nesciunt itaque nam eaque maiores odit veniam ab omnis soluta impedit eligendi maxime laborum optio aspernatur quos.</p>
                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                    </div>
                </div>
                <div className="footer-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivary</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>
                <div className="footer-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+1-222-3333-060</li>
                        <li>contact@tomato.com</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className='footer-copyright'>Copyright 2024 &copy; - All Right Reserved.</p>
        </div>
    )
}

export default Footer
