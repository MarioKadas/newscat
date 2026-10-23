function Homepage(){

    return(
    <div>

        <div>
            <p className="top-row">
                <a href="#"><img className="top-row-icons" src="./pics/icons/user.webp" alt="user"/></a>
                <a href="#"><img className="top-row-icons" src="./pics/icons/x.webp" alt="x"/></a>
                <a href="#"><img className="top-row-icons" src="./pics/icons/ig.webp" alt="instagram"/></a>
                <a href="#"><img className="top-row-icons" src="./pics/icons/fb.webp" alt="facebook"/></a>
                <a href="#"><img className="top-row-icons" src="./pics/icons/search.webp" alt="search"/></a>
            </p>     
        </div>

        <br></br>
        <br></br>
        <br></br>

        <div className="title-section">
            <h1 className="title">
                <a href="#">
                    <img className="title-icon" src="./pics/icons/logo.webp" alt="NewsCat Logo"/>
                </a>NewsCat
            </h1>
        </div>

        <div className="below-title-bar">
            <h5>
                <a href="#">Newsfeed</a> • <a href="#">Greece</a> • <a href="#">World</a> • <a href="#">Politics</a> • <a href="#">Economy</a> • <a href="#">Society</a> • <a href="#">Lifestyle</a> • <a href="#">Sports</a>
            </h5>
        </div>

        <br/>

        <div id="carouselExampleCaptions" className="carousel slide">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img src="./pics/carousel/woman-refueling-car-with-gasoline-petrol-station.jpg" className="d-block w-100" alt="woman-refueling-car-with-gasoline-petrol-station"/>
                    <div className="carousel-caption">
                        <a className="carousel-caption-style" href="#">
                            <h5>First slide label</h5>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit</p>
                        </a>
                    </div>
                </div>
                <div className="carousel-item">
                <img src="./pics/carousel/radiologist-adjusting-mri-scanner-before-medical-examination-patient-who-is-getting-brain-scan-hospital.jpg" className="d-block w-100" alt="radiologist-adjusting-mri-scanner-before-medical-examination-patient-who-is-getting-brain-scan-hospital"/>
                    <div className="carousel-caption">
                        <a className="carousel-caption-style" href="#">
                            <h5>Second slide label</h5>
                            <p>Lorem ipsum dolor sit amet consectetur porro, commodi!</p>
                        </a>
                    </div>
                </div>
                <div className="carousel-item">
                <img src="./pics/carousel/young-tourist-feeding-birds-pigeons-looking-happy-around-her-travelling-is-her-lifestyle-choice.jpg" className="d-block w-100" alt="young-tourist-feeding-birds-pigeons-looking-happy-around-her-travelling-is-her-lifestyle-choice"/>
                    <div className="carousel-caption">
                        <a className="carousel-caption-style" href="#">
                            <h5>Third slide label</h5>
                            <p>Lorem ipsum dolor sit amet animi, dignissimos?</p>
                        </a>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>

        <br/>

        <div className="container">

            <div className="row">
                <div className="col-lg-6">
                    <a href="#"><img className="article-photos img-fluid" src="./pics/articles/beautiful-coconut-palm-tree-blue-sky.jpg" alt="beautiful-coconut-palm-tree-blue-sky"/></a>
                    <a href="#" className="article-text-style"><h5 className="article-text">Consectetur adipisicing elit. Eaque, commodi</h5></a>
                </div>
                <div className="col-lg-6">
                    <a href="#"><img className="article-photos img-fluid" src="./pics/articles/dusan-veverkolog-nOsJYzXEG98-unsplash.jpg" alt="dusan-veverkolog-nOsJYzXEG98-unsplash"/></a>
                    <a href="#" className="article-text-style"><h5 className="article-text">Lorem ipsum dolor sit amet</h5></a>
                </div>
            </div>
            
            <div className="row">
                <div className="col-lg-6">
                    <a href="#"><img className="article-photos img-fluid" src="./pics/articles/matt-c-newCTAG6kPE-unsplash.jpg" alt="matt-c-newCTAG6kPE-unsplash"/></a>
                    <a href="#" className="article-text-style"><h5 className="article-text">Assumenda eos sequi deserunt ea dignissimos dolorem perspiciatis beatae</h5></a>
                </div>
                <div className="col-lg-6">
                    <a href="#"><img className="article-photos img-fluid" src="./pics/articles/micheile-henderson-ZVprbBmT8QA-unsplash.jpg" alt="micheile-henderson-ZVprbBmT8QA-unsplash"/></a>
                    <a href="#" className="article-text-style"><h5 className="article-text">Obcaecati dolores non eligendi saepe voluptates soluta magnam?</h5></a>
                </div>
            </div>

        </div>

        <br/>

        <footer>
        <div className="footer-grid">
            <div className="brand">
            <h2>NewsCat</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, porro.</p>
            </div>

            <div className="col">
            <h3>Product</h3>
            <ul>
                <li><a href="#">Features</a></li>
                <li><a href="#">Pricing</a></li>
            </ul>
            </div>

            <div className="col">
            <h3>Company</h3>
            <ul>
                <li><a href="#">About</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            </div>

            <div className="col">
            <h3>Legal</h3>
            <ul>
                <li><a href="#">Privacy</a></li>
                <li><a href="#">Terms</a></li>
                <li><a href="#">Security</a></li>
            </ul>
            </div>
        </div>

        <div className="footer-bottom">
            <span>
                <details open>
                    <summary>Credits</summary>
                        <a href="https://www.pexels.com/photo/yawning-ginger-cat-outdoors-37366171/">Cat Photo</a> by Renkgezgini on Pexels<br/>
                        <a href="https://www.magnific.com/free-photo/woman-refueling-car-with-gasoline-petrol-station_4538798.htm">Gas Station Photo</a> by Magnific on Magnific<br/>
                        <a href="https://unsplash.com/photos/firefighters-spraying-water-on-fire-newCTAG6kPE">Firefighter Photo</a> by <a href="https://unsplash.com/@mchesin">Matt C</a> on Unsplash<br/>
                        <a href="https://unsplash.com/photos/brown-fox-lying-on-black-rock-nOsJYzXEG98">Fox Photo</a> by <a href="https://unsplash.com/@veverkolog">Dušan veverkolog</a> on Unsplash<br/>
                        <a href="https://www.magnific.com/free-photo/radiologist-adjusting-mri-scanner-before-medical-examination-patient-who-is-getting-brain-scan-hospital_25566708.htm">MRI Scanner</a> by Drazen Zigic on Magnific<br/>
                        <a href="https://www.magnific.com/free-photo/beautiful-coconut-palm-tree-blue-sky_4099066.htm">Palm Tree Photo</a> by LifeForStock on Magnific<br/>
                        <a href="https://www.magnific.com/free-photo/young-tourist-feeding-birds-pigeons-looking-happy-around-her-travelling-is-her-lifestyle-choice_24706533.htm">Pigeon Photo</a> by LookStudio on Magnific<br/>
                        <a href="https://unsplash.com/photos/green-plant-in-clear-glass-vase-ZVprbBmT8QA">Plant in Coins Photo</a> by <a href="https://unsplash.com/@micheile">micheile henderson</a> on Unsplash<br/>
                </details>
            </span>
            <span>© 2026 Marios Kadas. All rights reserved.</span>
            <div className="socials">
            <a href="#">Twitter</a>
            <a href="#">LinkedIn</a>
            </div>
        </div>
        </footer>

   </div>
    );
}


export default Homepage