import React from 'react'
import firstPicture from './../assets/restaurant-hero-picture.jpg'
import restaurantMenu from './../assets/restaurant-menu.jpg'
import testimonial1 from './../assets/testimonials-1.PNG'
import testimonial2 from './../assets/testimonials-2.PNG'
import testimonial3 from './../assets/testimonials-3.PNG'


export default function Main() {
    return (
    <>
        {/* Start of first paragraph and first picture */}
        <div class="container">
        <div class="row">
            <div class="col-6 mt-5 firstParagraph">
            <span>
                Steakhouse na UNLI RICE, UNLI SOUP at UNLI GRAVY nasa fairview na!
                <br />
                Tara boss! Bukas na kami!
                <br />
                Located at: Lot 2 Blk 11 Dahlia ave. Fairview, QC (Inside UNIOIL Gas Station)
                3:00-11:00pm
                Waze/Google Maps: BOSS K Steakhouse - Dahlia
            </span>
            <br />
            </div>
            <div class="col-6 mt-5 px-0">
            <img
                src={firstPicture}
                alt="firstPicture"
                class="img-fluid firstPicture"
                style={{ maxHeight: '300px' }}
            />
            </div>
        </div>
        </div>
        {/* End */}

        {/* Start of our menu */}
        <div class="container mt-5 ourMenu" id="ourMenuSection">
            <h2 class="text-center text-white pt-2">OUR MENU</h2>
        </div>
        <div class="container">
            <div class="row">
            <div class="col p-0">
                <img
                src={restaurantMenu}
                alt="restaurantMenu"
                class="img-fluid"
                />
            </div>
            </div>
        </div>
        {/* End of our menu */}

        {/* Start of testimonials */}
        <div class="container mt-5" id="testimonialsSection">
            <div class="row testimonialsHeader">
            <span>
                TESTIMONIALS
            </span>
            </div>
            <div class="row testimonialsSubtext">
            <span>
                Read What Others Have to Say
            </span>
            </div>
        </div>
<div class="container">
    <div class="row gutters">
        <div class="col-md-4 mb-4">
            <div class="card testimonialCard">
                <img src={testimonial1} class="card-img-top" alt="Person 1" />
                <div class="card-body">
                    <h3>Franz KatrionaEthan</h3>
                    <p class="card-text">“Yummy anjan ako kgabi Legit msarap”</p>
                </div>
            </div>
        </div>
        <div class="col-md-4 mb-4">
            <div class="card testimonialCard">
                <img src={testimonial2} class="card-img-top" alt="Person 2" />
                <div class="card-body">
                    <h3>Meann Jinio</h3>
                    <p class="card-text">“The best po kc ang BOSS K Steakhouse - Dahlia, Fairview”</p>
                </div>
            </div>
        </div>
        <div class="col-md-4 mb-4">
            <div class="card testimonialCard">
                <img src={testimonial3} class="card-img-top" alt="Person 3" />
                <div class="card-body">
                    <h3>daisy fust</h3>
                    <p class="card-text">“Sarap...”</p>
                </div>
            </div>
        </div>
    </div>
</div>
{/* End */}

{/* Contact us start */}
<div class="container mt-5">
    <div class="row contactUsHeader">
    <span>
        CONTACT US
    </span>
    </div>
</div>
<div class="container contactUsContainer" id="contactUsSection">
    <div class="row">
        <div class="col-md-6 mt-5 contactUsParagraph">
            <span>
                Located at: Lot 2 Blk 11 Dahlia ave. Fairview, QC (Inside UNIOIL Gas Station)
            </span>
            <br />
            <span>
                3:00-11:00pm
            </span>
            <span>
                Waze/Google Maps: BOSS K Steakhouse - Dahlia
            </span>
            <br />
            <a href="https://www.facebook.com/bossksteakhousedahlia" target="_blank">
                <button type="button" class="btn btn-secondary btn-sm contactUsButton">
                    Boss K Steakhouse FB Page
                </button>
            </a>
        </div>
            <div class="col-6 mt-5 px-0">
                <iframe
                width="100%"
                height="100%"
                title="map"
                class="absolute inset-0"
                style={{ filter: "opacity(0.7)" }}
                src="https://www.google.com/maps/embed/v1/place?q=Dahlia,+Fairview+QC+(Inside+UNIOIL+Dahlia)+1118+Quezon+City,+Philippines&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                />
            </div>
    </div>
</div>
{/* End */}
    </>
    )
}
