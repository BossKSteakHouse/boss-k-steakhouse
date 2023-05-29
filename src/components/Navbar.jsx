import React from 'react'
import logo from '../assets/restaurant-logo.jpg'

export default function Navbar() {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light">
                <div class="container">
                    <a class="navbar-brand" href="#">
                        <img src={logo} alt="Logo" class="navbarLogo" />
                    </a>
                    <button id="burger-menu" class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ms-auto navItems">
                            <li class="nav-item">
                                <a class="nav-link text-white" href="#">FB Page</a>
                            </li>
                            <span class="space"></span>
                            <li class="nav-item">
                                <a class="nav-link text-white" href="#">Menu</a>
                            </li>
                            <span class="space"></span>
                            <li class="nav-item">
                                <a class="nav-link text-white" href="#">Home</a>
                            </li>
                            <span class="space"></span>
                            <li class="nav-item">
                                <a class="nav-link text-white" href="#">Contact Us</a>
                            </li>
                            <span class="space"></span>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
    }
