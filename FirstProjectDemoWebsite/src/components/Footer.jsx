import React from 'react'
import "../styles/footer.scss"
const Footer = () => {
  return (
    <footer>
        <div>
            <h1>TechGuru</h1>
            <p>@All rights are Reserved</p>
        </div>
        <div>
            <h4>Follow Us</h4>
            <a href="youtube.com" target={'blank'}>Youtube</a>
            <a href="Instagram.com" target={'blank'}>Instagram</a>
            <a href="facebook.com" target={'blank'}>Facebook</a>
            <a href="linkedin.com" target={'blank'}>Linkedin</a>

        </div>
    </footer>
  )
}

export default Footer