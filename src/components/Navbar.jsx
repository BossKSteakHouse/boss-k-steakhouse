import React from 'react'
import logo from '../assets/restaurant-logo.jpg'

export default function Navbar() {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light">
                <div class="container">
                        <img src={logo} alt="Logo" class="navbarLogo" />
                    <button id="burger-menu" class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ms-auto navItems">
                            <li class="nav-item">
                                <a class="nav-link text-white" href="https://www.facebook.com/bossksteakhousedahlia" target="_blank" rel='noreferrer'>FB Page</a>
                            </li>
                            <span class="space"></span>
                            <li class="nav-item">
                                <a class="nav-link text-white" href="#testimonialsSection">Testimonials</a>
                            </li>
                            <span class="space"></span>
                            <li class="nav-item">
                                <a class="nav-link text-white" href="#ourMenuSection">Menu</a>
                            </li>
                            <span class="space"></span>
                            <li class="nav-item">
                                <a class="nav-link text-white" href="#contactUsSection">Contact Us</a>
                            </li>
                            <span class="space"></span>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
    }
