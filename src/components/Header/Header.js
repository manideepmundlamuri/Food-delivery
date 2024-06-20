import React from 'react'
import './Header.css'
const Header = () => {
    const backgroundImage = {
        backgroundImage: "url('/header_img.png')",
    };
    return (
        <div className='header' style={backgroundImage}>
            <div className="header-contents">
                <h2>Order your favourite food here</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime dolorem quod corporis reprehenderit reiciendis omnis pariatur, ea, sunt, voluptates quaerat libero nam. Tenetur dolorem culpa est officiis ipsa excepturi labore.</p>
                <button>View Menu</button>
            </div>
        </div>
    )
}

export default Header
