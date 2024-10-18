
export default function AboutUs() {
    return(
        <>
         {/* <!-- Preloader Start --> */}
    <div id="preloader" className="preloader">
        <div className="box d-grid gap-4">
            <span className="man-pre m-auto">
                <img src="src/assets/img/banner/preloader.png" alt="img"/>
            </span>
            <span className="p1-clr fz-40 fw-bold text-center d-block">
                FarmHub
            </span>
        </div>
    </div>

    {/* <!-- Offcanvas Area Start --> */}
    <div className="fix-area">
        <div className="offcanvas__info">
            <div className="offcanvas__wrapper">
                <div className="offcanvas__content">
                    <div className="offcanvas__top d-flex justify-content-between align-items-center">
                        <div className="offcanvas__logo">
                            <a href="index.html">
                                <img src="src/assets/img/logo/favcion.png" alt="logo-img"/>
                            </a>
                        </div>
                        <div className="offcanvas__close">
                            <button>
                                <i className="fas fa-times"></i>
                            </button>
                        </div>
                    </div>
                    <div className="mobile-menu fix mb-3"></div>
                    <div className="offcanvas__contact">
                        <p className="p800-clr mb-xxl-5 mb-3">
                            Financial planners help people to knowledge in about how to invest and save their moneye the
                            mos efficient way in to
                            eve.planners Financial planners help people to my destin knowledge in about
                        </p>
                        <h4>Contact Info</h4>
                        <ul>
                            <li className="d-flex align-items-center">
                                <div className="offcanvas__contact-icon">
                                    <i className="fal fa-map-marker-alt"></i>
                                </div>
                                <div className="offcanvas__contact-text">
                                    <a target="_blank" href="#">Us 1216, road 45 house of street</a>
                                </div>
                            </li>
                            <li className="d-flex align-items-center">
                                <div className="offcanvas__contact-icon mr-15">
                                    <i className="fal fa-envelope"></i>
                                </div>
                                <div className="offcanvas__contact-text">
                                    <a href="mailto:demo23yourmail.com"><span
                                            className="mailto:demo23yourmail.com">demo23yourmail.com</span></a>
                                </div>
                            </li>
                            <li className="d-flex align-items-center">
                                <div className="offcanvas__contact-icon mr-15">
                                    <i className="fal fa-clock"></i>
                                </div>
                                <div className="offcanvas__contact-text">
                                    <a target="_blank" href="#">Mod-friday, 06am -02pm</a>
                                </div>
                            </li>
                            <li className="d-flex align-items-center">
                                <div className="offcanvas__contact-icon mr-15">
                                    <i className="far fa-phone"></i>
                                </div>
                                <div className="offcanvas__contact-text">
                                    <a href="tel:+11002345909">(307) 555-0133</a>
                                </div>
                            </li>
                        </ul>
                        <div className="header-button mt-4 mb-4">
                            <a href="contact.html" className="cmn-btn">
                                Get A Quote
                                <i className="fa-solid fa-arrow-right"></i>
                            </a>
                        </div>
                        <h4>Social Media</h4>
                        <div className="social-icon d-flex align-items-center">
                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                            <a href="#"><i className="fa-solid fa-x"></i></a>
                            <a href="#"><i className="fab fa-youtube"></i></a>
                            <a href="#"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="offcanvas__overlay"></div>

    {/* <!-- Header Common Adjustment Component --> */}
    <div id="header-sticky" className="header-common-adjustment">
        <a href="index.html" className="logo-v04">
            <img src="src/assets/img/logo/logo-light-clone.png" alt="img"/>
        </a>
        <div className="topheader-mainheader">
            {/* <!-- Header Top Section Start --> */}
            <div className="header-top-section topcmn-style d-lg-block d-none">
                <div className="container">
                    <div className="header-top-wrapper">
                        <ul className="contact-list">
                            <li>
                                <a href="#"><i className="fa-solid fa-envelope p1-clr"></i>
                                    info@example.com</a>
                            </li>
                            <li>
                                <a href="#" className="link"><i className="fa-solid fa-location-dot p1-clr"></i> 9991 Ohio St.
                                    Califirnia,
                                    10299</a>
                            </li>
                        </ul>
                        <div className="social-wrapper d-flex align-items-center">
                            <a href="#" className="white"><i className="white fa-brands fa-pinterest-p"></i></a>
                            <a href="#" className="white"><i className="white fa-brands fa-linkedin-in"></i></a>
                            <a href="#" className="white">
                                <svg width="11" height="12" viewBox="0 0 11 12" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M6.55735 5.16157L10.5183 0.65625H9.57971L6.14039 4.56816L3.39341 0.65625H0.225098L4.37906 6.57174L0.225098 11.2963H1.16378L4.79579 7.16516L7.6968 11.2963H10.8651L6.55712 5.16157H6.55735ZM5.2717 6.62386L4.85082 6.03481L1.502 1.34768H2.94375L5.64629 5.13034L6.06717 5.71939L9.58015 10.6363H8.13839L5.2717 6.62409V6.62386Z"
                                        fill="white" />
                                </svg>
                            </a>
                            <a href="#" className="white"><i className="white fab fa-facebook-f"></i></a>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Header Section Start --> */}
            <header className="header-v4">
                <div className="container">
                    <div className="mega-menu-wrapper">
                        <div className="header-main">
                            <div className="header-left d-xl-none d-block">
                                <div className="logo">
                                    <a href="index.html" className="header-logo">
                                        <img src="src/assets/img/logo/logo-black.png" alt="logo-img"/>
                                    </a>
                                </div>
                            </div>
                            <div className="header-right d-flex justify-content-between w-100 align-items-center">
                                <div className="mean__menu-wrapper">
                                    <div className="main-menu">
                                        <nav id="mobile-menu">
                                            <ul>
                                                <li className="has-dropdown active menu-thumb">
                                                    <a href="index.html">
                                                        Home
                                                        <i className="fas fa-angle-down"></i>
                                                    </a>
                                                    <ul className="submenu has-homemenu">
                                                        <li>
                                                            <div className="homemenu-items">
                                                                <div className="homemenu">
                                                                    <div className="homemenu-thumb">
                                                                        <img src="src/assets/img/header/home-1.jpg"
                                                                            alt="img"/>
                                                                        <div className="demo-button">
                                                                            <a href="index.html"
                                                                                className="theme-btn p5-bg">
                                                                                <span>Home 01</span>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                    <div className="homemenu-content text-center">
                                                                        <h4 className="homemenu-title">
                                                                            Home Version 01
                                                                        </h4>
                                                                    </div>
                                                                </div>
                                                                <div className="homemenu">
                                                                    <div className="homemenu-thumb mb-15">
                                                                        <img src="src/assets/img/header/home-2.jpg"
                                                                            alt="img"/>
                                                                        <div className="demo-button">
                                                                            <a href="index-2.html"
                                                                                className="theme-btn p5-bg">
                                                                                <span>Home 02</span>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                    <div className="homemenu-content text-center">
                                                                        <h4 className="homemenu-title">
                                                                            Home Version 02
                                                                        </h4>
                                                                    </div>
                                                                </div>
                                                                <div className="homemenu">
                                                                    <div className="homemenu-thumb mb-15">
                                                                        <img src="src/assets/img/header/home-3.jpg"
                                                                            alt="img"/>
                                                                        <div className="demo-button">
                                                                            <a href="index-3.html"
                                                                                className="theme-btn p5-bg">
                                                                                <span>Home 03</span>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                    <div className="homemenu-content text-center">
                                                                        <h4 className="homemenu-title">
                                                                            Home Version 03
                                                                        </h4>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a href="about.html">About Us</a>
                                                </li>
                                                <li>
                                                    <a href="service.html">
                                                        Services
                                                        <i className="fas fa-angle-down"></i>
                                                    </a>
                                                    <ul className="submenu">
                                                        <li><a href="service.html">Services</a></li>
                                                        <li><a href="service-details.html">Services Details</a></li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a href="gallery.html">
                                                        Projects
                                                        <i className="fas fa-angle-down"></i>
                                                    </a>
                                                    <ul className="submenu">
                                                        <li><a href="gallery.html">Gallery</a></li>
                                                        <li><a href="gallery-details.html">Gallery Details</a></li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a href="blog.html">
                                                        Blog
                                                        <i className="fas fa-angle-down"></i>
                                                    </a>
                                                    <ul className="submenu">
                                                        <li><a href="blog.html">Blog</a></li>
                                                        <li><a href="blog-details.html">Blog Details</a></li>
                                                    </ul>
                                                </li>
                                                <li className="has-dropdown">
                                                    <a href="#">
                                                        Pages
                                                        <i className="fas fa-angle-down"></i>
                                                    </a>
                                                    <ul className="submenu">
                                                        <li><a href="about.html">About Us</a></li>
                                                        <li><a href="product-list.html">Product</a></li>
                                                        <li><a href="product-details.html">Product Details</a></li>
                                                        <li><a href="faq.html">Faq's</a></li>
                                                        <li><a href="contact.html">Contact</a></li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a href="contact.html">Contact Us</a>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                                <div className="common-adjust-toggle">
                                    <a href="#" className="header-help">
                                        <img src="src/assets/img/icon/chat.svg" alt="img"/>
                                        <span className="d-grid">
                                            <span className="need">
                                                Need help?
                                            </span>
                                            <span className="call">
                                                (307) 555-0133
                                            </span>
                                        </span>
                                    </a>
                                    <div className="header__hamburger my-auto">
                                        <div className="sidebar__toggle d-center">
                                            <svg width="22" height="10" viewBox="0 0 22 10" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10.5879 1L21.1761 1" stroke="#FDD61F" stroke-width="2" />
                                                <path d="M0 8.41406L21.1765 8.41406" stroke="#FDD61F"
                                                    stroke-width="2" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    </div>
    {/* <!-- Header Common Adjustment Component --> */}

    {/* <!-- Search Area Start --> */}
    <div className="search-wrap">
        <div className="search-inner">
            <i className="fas fa-times search-close" id="search-close"></i>
            <div className="search-cell">
                <form method="get">
                    <div className="search-field-holder">
                        <input type="search" className="main-search-input" placeholder="Search..."/>
                    </div>
                </form>
            </div>
        </div>
    </div>

    {/* <!-- Hero Section Start --> */}
    <section className="breadcrumnd-banner overflow-hidden">
        <div className="container">
            <div className="breadcrumnd-wrapp">
                <div className="bread-content">
                    <h1 className="wow fadeInDown" data-wow-delay=".4s">
                        About Us
                    </h1>
                    <ul className="bread-listing">
                        <li>
                            <a href="index.html">
                                Home
                            </a>
                        </li>
                        <li>
                            <i className="fa-solid fa-angle-right"></i>
                        </li>
                        <li>
                            About Us
                        </li>
                    </ul>
                </div>
                <div className="bread-thumb d-sm-block d-none">
                    <img src="src/assets/img/about/tt-slice.png" alt="img"/>
                </div>
            </div>
        </div>
    </section>

    {/* <!-- About Version --> */}
    <section className="about-section style-v01 section-padding white-bg">
        <div className="container">
            <div className="row g-4 align-items-center justify-content-center">
                <div className="col-lg-6 col-md-6 col-sm-8 order-md-0 order-1">
                    <div className="about-thumv01 position-relative">
                        <img src="src/assets/img/about/choose-man.png" alt="img" className="mimg"/>
                        {/* <!-- Elemennt --> */}
                        <img src="src/assets/img/about/f-food.png" alt="img" className="f-food"/>
                        <img src="src/assets/img/about/l-food.png" alt="img" className="l-food wow fadeInLeft"
                            data-wow-delay=".5s"/>
                        <img src="src/assets/img/about/t-food.png" alt="img" className="t-food wow fadeInLeft"
                            data-wow-delay=".7s"/>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6">
                    <div className="about-contentv1">
                        <div className="section-title mb-40">
                            <h5 className="p1-clr wow fadeInLeft" data-wow-delay="0.4s">
                                Why Chose Us
                            </h5>
                            <h2 className="wow fadeInDown" data-wow-delay=".3s">
                                Bringing nature's bounty to your plate
                            </h2>
                            <p className="wow fadeInUp" data-wow-delay=".4s">
                                Agriculture and farming are essential industries that involve the cultivation of crops,
                                raising of livestock, and
                                production
                            </p>
                            <div className="progress_bar d-grid gap-xxl-4 gap-4">
                                <div className="progress_bar_item">
                                    <div className="per-title d-flex align-items-center justify-content-between"
                                        style={{width: "70%;"}}>
                                        <div className="item_label p900-clr">Pure And Organic</div>
                                        <div className="item_value p900-clr">0%</div>
                                    </div>
                                    <div className="item_bar">
                                        <div className="progress" data-progress="70"></div>
                                    </div>
                                </div>
                                <div className="progress_bar_item">
                                    <div className="per-title d-flex align-items-center justify-content-between"
                                        style={{width: "80%;"}}>
                                        <div className="item_label p900-clr">Healthy Food</div>
                                        <div className="item_value p900-clr">0%</div>
                                    </div>
                                    <div className="item_bar">
                                        <div className="progress" data-progress="80"></div>
                                    </div>
                                </div>
                            </div>
                            <a href="about.html" className="cmn-btn round100 cmn-primary2">
                                Read More
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* <!-- Service section --> */}
    <section className="service-section white-bg">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-xxl-6 col-xl-7 col-md-8 col-sm-11">
                    <div className="section-title mb-60 text-center">
                        <h5 className="p1-clr wow fadeInLeft" data-wow-delay="0.4s">
                            Our Latest Service
                        </h5>
                        <h2 className="wow fadeInDown" data-wow-delay=".3s">
                            Harvesting dreams one crop at a time
                        </h2>
                    </div>
                </div>
            </div>
            {/* <!-- Body --> */}
            <div className="row g-xl-4 g-3 justify-content-center">
                <div className="col-lg-4 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay=".3s">
                    <div className="service-itemsv1">
                        <img src="src/assets/img/icon/count1.svg" alt="svg" className="icons"/>
                        <div className="content">
                            <a href="service-details.html" className="title">Green Grow</a>
                            <p>
                                Agriculture and farming are essential industries
                            </p>
                            <a href="service-details.html" className="arrows">Read More <i
                                    className="fa-solid fa-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay=".5s">
                    <div className="service-itemsv1">
                        <img src="src/assets/img/icon/wheat-sesh.svg" alt="svg" className="icons"/>
                        <div className="content">
                            <a href="service-details.html" className="title">Agri Consulting</a>
                            <p>
                                Agriculture and farming are essential industries
                            </p>
                            <a href="service-details.html" className="arrows">Read More <i
                                    className="fa-solid fa-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay=".7s">
                    <div className="service-itemsv1">
                        <img src="src/assets/img/icon/smart-flower.svg" alt="svg" className="icons"/>
                        <div className="content">
                            <a href="service-details.html" className="title">Farm Smart</a>
                            <p>
                                Agriculture and farming are essential industries
                            </p>
                            <a href="service-details.html" className="arrows">Read More <i
                                    className="fa-solid fa-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* <!-- Section Testimonial Version One --> */}
    <section className="testimonial-section testimonial-style1 section-padding">
        <div className="container">
            <div className="row g-6 align-items-center">
                <div className="col-lg-4 col-md-4">
                    <div className="testimonial-thumbv1 w-100 wow fadeInDown" data-wow-delay=".4s">
                        <img src="src/assets/img/testimonial/testimonial.png" alt="img" className="w-100"/>
                    </div>
                </div>
                <div className="col-lg-8 col-md-8">
                    <div className="testimonial-common-wrapper position-relative ps-xxl-5 ps-lg-4">
                        <div className="swiper testimonial-slidewrap01">
                            <div className="swiper-wrapper">
                                <div className="swiper-slide">
                                    <div className="testimonail-common-items">
                                        <div className="ratting d-flex align-items-center justify-content-between">
                                            <img src="src/assets/img/icon/quote-left.svg" alt="icon"/>
                                            <div className="stars">
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                            </div>
                                        </div>
                                        <p>
                                            Agriculture and farming are essential industries that involve the
                                            cultivation of crops, raising of livestock, and
                                            production a of food and other agricultural products Agriculture farming are
                                            essential industries involve cultivation
                                        </p>
                                        <div className="review-man">
                                            <img src="src/assets/img/testimonial/re1.png" alt="img"/>
                                            <div className="cont">
                                                <h3>
                                                    Haney Cooper
                                                </h3>
                                                <span>
                                                    Ceo
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="testimonail-common-items">
                                        <div className="ratting d-flex align-items-center justify-content-between">
                                            <img src="src/assets/img/icon/quote-left.svg" alt="icon"/>
                                            <div className="stars">
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                            </div>
                                        </div>
                                        <p>
                                            Agriculture and farming are essential industries that involve the
                                            cultivation of crops, raising of
                                            livestock, and
                                            production a of food and other agricultural products Agriculture farming are
                                            essential industries involve
                                            cultivation
                                        </p>
                                        <div className="review-man">
                                            <img src="src/assets/img/testimonial/re1.png" alt="img"/>
                                            <div className="cont">
                                                <h3>
                                                    Haney Cooper
                                                </h3>
                                                <span>
                                                    Ceo
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="testimonail-common-items">
                                        <div className="ratting d-flex align-items-center justify-content-between">
                                            <img src="src/assets/img/icon/quote-left.svg" alt="icon"/>
                                            <div className="stars">
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                            </div>
                                        </div>
                                        <p>
                                            Agriculture and farming are essential industries that involve the
                                            cultivation of crops, raising of
                                            livestock, and
                                            production a of food and other agricultural products Agriculture farming are
                                            essential industries involve
                                            cultivation
                                        </p>
                                        <div className="review-man">
                                            <img src="src/assets/img/testimonial/re1.png" alt="img"/>
                                            <div className="cont">
                                                <h3>
                                                    Haney Cooper
                                                </h3>
                                                <span>
                                                    Ceo
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="dot-cmn"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* <!-- Who We Are section --> */}
    <section className="who-section overflow-hidden p900-bg section-padding">
        <div className="container">
            <div className="row g-4 justify-content-between align-items-end">
                <div className="col-lg-6">
                    <div className="section-title mb-40">
                        <h5 className="p1-clr wow fadeInLeft" data-wow-delay="0.4s">
                            Who we are
                        </h5>
                        <h2 className="wow fadeInDown white-clr mb-24" data-wow-delay=".3s">
                            Nourishing world from seed to table
                        </h2>
                        <p className="white-clr wow fadeInDown" data-wow-delay=".4s">
                            Agriculture and farming are essential industries that involve the cultivation of crops,
                            raising of livestock, and
                            production of food
                        </p>
                    </div>
                    <div className="row g-xl-6 g-4">
                        <div className="col-sm-6 wow fadeInDown" data-wow-delay=".4s">
                            <div className="who-box">
                                <div className="icon d-center">
                                    <img src="src/assets/img/icon/hand-planp900.svg" alt="icon"/>
                                </div>
                                <a href="#" className="title">
                                    Growing stron <br/> a feeding
                                </a>
                            </div>
                        </div>
                        <div className="col-sm-6 wow fadeInDown" data-wow-delay=".6s">
                            <div className="who-box">
                                <div className="icon d-center">
                                    <img src="src/assets/img/icon/wheath-p900.svg" alt="icon"/>
                                </div>
                                <a href="#" className="title">
                                    Taking care of <br/> the Earth
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="who-contact-wrap">
                        <h3 className="white-clr">
                            Leave message
                        </h3>
                        <form action="#" className="row g-xl-4 g-3">
                            <div className="col-lg-6">
                                <input type="text" placeholder="Name"/>
                            </div>
                            <div className="col-lg-6">
                                <input type="email" placeholder="E-mail"/>
                            </div>
                            <div className="col-lg-6">
                                <input type="number" placeholder="Your Number"/>
                            </div>
                            <div className="col-lg-6">
                                <select name="select">
                                    <option value="1">
                                        Your Area
                                    </option>
                                    <option value="1">
                                        Us
                                    </option>
                                    <option value="1">
                                        Uk
                                    </option>
                                    <option value="1">
                                        Turky
                                    </option>
                                </select>
                            </div>
                            <div className="col-lg-12">
                                <textarea name="message" rows="4" placeholder="Message"></textarea>
                            </div>
                            <div className="col-lg-12">
                                <button type="submit" className="cmn-btn cmn-primary2 text-capitalize">
                                    Submit Now
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Element --> */}
        <img src="src/assets/img/element/who-element.png" alt="img" className="who-element"/>
    </section>

    {/* <!-- Service section --> */}
    <section className="service-feature-section white-bg space-top">
        <div className="filter-mixtup">
            <div className="container">
                <div className="row g-4 justify-content-between align-items-end mb-60">
                    <div className="col-xxl-5 col-xl-7">
                        <div className="section-title">
                            <h5 className="p1-clr wow fadeInLeft" data-wow-delay="0.4s">
                                Our Frature
                            </h5>
                            <h2 className="wow fadeInDown" data-wow-delay=".3s">
                                Nourishing the world from seed to table
                            </h2>
                        </div>
                    </div>
                    <div className="col-xxl-5 col-xl-5">
                        <div className="mixtup-filtering d-flex justify-content-end">
                            <div className="filter-btns">
                                <button type="button" data-filter="all">
                                    All
                                </button>
                                <button type="button" data-filter=".category-a">
                                    Fresh
                                </button>
                                <button type="button" data-filter=".category-b">
                                    Organic
                                </button>
                                <button type="button" data-filter=".category-c">
                                    Vegetables
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="all-catagorys">
                    <div className="mix category-a" data-order="1">
                        <div className="feature-itemsv1">
                            <img src="src/assets/img/gallery/feature1.jpg" alt="img" className="f-thumb"/>
                            <div className="content">
                                <a href="product-details.html" className="title">Tomato</a>
                                <p>
                                    Agriculture farming are the essential
                                </p>
                                <h5>
                                    $120
                                </h5>
                                <a href="product-details.html" className="add-tocart">Add To Chart</a>
                            </div>
                        </div>
                    </div>
                    <div className="mix category-b" data-order="2">
                        <div className="feature-itemsv1">
                            <img src="src/assets/img/gallery/feature2.jpg" alt="img" className="f-thumb"/>
                            <div className="content">
                                <a href="product-details.html" className="title">Meat</a>
                                <p>
                                    Agriculture farming are the essential
                                </p>
                                <h5>
                                    $80
                                </h5>
                                <a href="product-details.html" className="add-tocart">Add To Chart</a>
                            </div>
                        </div>
                    </div>
                    <div className="mix category-c" data-order="3">
                        <div className="feature-itemsv1">
                            <img src="src/assets/img/gallery/feature3.jpg" alt="img" className="f-thumb"/>
                            <div className="content">
                                <a href="product-details.html" className="title">Blossomed</a>
                                <p>
                                    Agriculture farming are the essential
                                </p>
                                <h5>
                                    $45
                                </h5>
                                <a href="product-details.html" className="add-tocart">Add To Chart</a>
                            </div>
                        </div>
                    </div>
                    <div className="mix category-a" data-order="4">
                        <div className="feature-itemsv1">
                            <img src="src/assets/img/gallery/feature4.jpg" alt="img" className="f-thumb"/>
                            <div className="content">
                                <a href="product-details.html" className="title">Egg</a>
                                <p>
                                    Agriculture farming are the essential
                                </p>
                                <h5>
                                    $44
                                </h5>
                                <a href="product-details.html" className="add-tocart">Add To Chart</a>
                            </div>
                        </div>
                    </div>
                    <div className="mix category-a category-c" data-order="5">
                        <div className="feature-itemsv1">
                            <img src="src/assets/img/gallery/feature5.jpg" alt="img" className="f-thumb"/>
                            <div className="content">
                                <a href="product-details.html" className="title">Corning</a>
                                <p>
                                    Agriculture farming are the essential
                                </p>
                                <h5>
                                    $80
                                </h5>
                                <a href="product-details.html" className="add-tocart">Add To Chart</a>
                            </div>
                        </div>
                    </div>
                    <div className="mix category-b" data-order="6">
                        <div className="feature-itemsv1">
                            <img src="src/assets/img/gallery/feature6.jpg" alt="img" className="f-thumb"/>
                            <div className="content">
                                <a href="product-details.html" className="title">Kales</a>
                                <p>
                                    Agriculture farming are the essential
                                </p>
                                <h5>
                                    $45
                                </h5>
                                <a href="product-details.html" className="add-tocart">Add To Chart</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* <!--<< Sponsor Branding Start >>--> */}
    <section className="sponsor-branding-section section-padding white-bg">
        <div className="container">
            <div className="swiper brand-slider">
                <div className="swiper-wrapper">
                    <div className="swiper-slide">
                        <div className="brand-image">
                            <img src="src/assets/img/sponsor/sp1.png" alt="img"/>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="brand-image">
                            <img src="src/assets/img/sponsor/sp2.png" alt="img"/>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="brand-image">
                            <img src="src/assets/img/sponsor/sp3.png" alt="img"/>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="brand-image">
                            <img src="src/assets/img/sponsor/sp4.png" alt="img"/>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="brand-image">
                            <img src="src/assets/img/sponsor/sp5.png" alt="img"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* <!--<< Subscribe Start >>--> */}
    <div className="subscrbie-section subscrbie-stylev03">
        <div className="container">
            <div className="subscribe-wrapper-v03">
                <div className="container position-relative">
                    <div className="row g-4 align-items-end justify-content-between">
                        <div className="col-lg-6 col-md-6 mb-xl-5 pb-xl-4">
                            <div className="get-element">
                                <img src="src/assets/img/element/get-element.png" alt="img" className="d-md-block d-none"/>
                            </div>
                            <div className="subs-contentv3">
                                <h2>
                                    Get Update <span>Subscribe</span> <br/> to Newsletter
                                </h2>
                                <form action="#" className="subscribe-form03 flex-xl-nowrap flex-wrap">
                                    <input type="text" placeholder="Enter Your Email"/>
                                    <button type="submit" className="cmn-btn text-capitalize">
                                        Subcribe
                                        <i className="fa-solid fa-arrow-right"></i>
                                    </button>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="conatact-box common-contact-inner position-relative">
                                <div className="section-title mb-40">
                                    <h5 className="p1-clr wow fadeInLeft" data-wow-delay="0.4s">
                                        Contact
                                    </h5>
                                    <h2>
                                        Get Touch Here
                                    </h2>
                                </div>
                                <form action="#" className="row g-xl-4 g-3">
                                    <div className="col-lg-6">
                                        <input type="text" placeholder="Name"/>
                                    </div>
                                    <div className="col-lg-6">
                                        <input type="email" placeholder="E-mail"/>
                                    </div>
                                    <div className="col-lg-12">
                                        <input type="text" placeholder="Subject"/>
                                    </div>
                                    <div className="col-lg-12">
                                        <textarea name="message" placeholder="Message"></textarea>
                                    </div>
                                    <div className="col-lg-6">
                                        <button type="submit" className="cmn-btn text-capitalize">
                                            Submit Now
                                        </button>
                                    </div>
                                </form>
                                {/* <!-- Element --> */}
                                <img src="src/assets/img/element/sun-element.png" alt="img"
                                    className="sun-element d-xl-block d-none" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    {/* <!--<< Footer Section Start >>--> */}
    <footer className="footer-section overflow-hidden position-relative footer-style3">
        <div className="footer-widgets-wrapper footer-widget-wrapperv03">
            <div className="container">
                <div className="row g-3 g-md-4 g-4 justify-content-between">
                    <div className="col-xl-4 col-lg-3 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay=".3s">
                        <div className="single-footer-widget">
                            <div className="widget-head">
                                <a href="index.html" className="footer-logo">
                                    <img src="src/assets/img/logo/logo-light.png" alt="logo-img"/>
                                </a>
                            </div>
                            <div className="footer-content">
                                <p className="pre-pragraph">
                                    Lorem ipsum dolor amet consectetur <br/> sell adipis elit phase nibh ellentes
                                </p>
                                <div className="social-wrapper social-empact d-flex align-items-center">
                                    <a href="#" className="white-clr"><i className="white-clr fab fa-facebook-f"></i></a>
                                    <a href="#" className="white-clr">
                                        <svg width="11" height="12" viewBox="0 0 11 12" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M6.55735 5.16157L10.5183 0.65625H9.57971L6.14039 4.56816L3.39341 0.65625H0.225098L4.37906 6.57174L0.225098 11.2963H1.16378L4.79579 7.16516L7.6968 11.2963H10.8651L6.55712 5.16157H6.55735ZM5.2717 6.62386L4.85082 6.03481L1.502 1.34768H2.94375L5.64629 5.13034L6.06717 5.71939L9.58015 10.6363H8.13839L5.2717 6.62409V6.62386Z"
                                                fill="white-clr" />
                                        </svg>
                                    </a>
                                    <a href="#" className="white-clr"><i className="white-clr fa-brands fa-linkedin-in"></i></a>
                                    <a href="#" className="white-clr"><i className="white-clr fa-brands fa-pinterest-p"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay=".5s">
                        <div className="single-footer-widget">
                            <div className="widget-head">
                                <h3 className="white-clr">Service</h3>
                            </div>
                            <ul className="list-area">
                                <li>
                                    <a href="about.html">
                                        About Us
                                    </a>
                                </li>
                                <li>
                                    <a href="service.html">
                                        Service
                                    </a>
                                </li>
                                <li>
                                    <a href="faq.html">
                                        FAQ
                                    </a>
                                </li>
                                <li>
                                    <a href="blog.html">
                                        Blog Ang News
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay=".5s">
                        <div className="single-footer-widget">
                            <div className="widget-head">
                                <h3 className="white-clr">Contact</h3>
                            </div>
                            <ul className="list-area list-contact">
                                <li>
                                    <a href="#">
                                        <i className="fa-solid fa-envelope"></i>
                                        debra.holt@example.com
                                    </a>
                                </li>
                                <li>
                                    <a href="info@example.com" className="link">
                                        <i className="fa-solid fa-location-dot"></i>
                                        1901 Thornridge Cir. Shiloh, <br/> Hawaii 81063
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="link">
                                        <i className="fa-solid fa-phone"></i>
                                        (270) 555-0117 <br/>
                                        (270) 555-0118
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay=".5s">
                        <div className="single-footer-widget">
                            <div className="widget-head">
                                <h3 className="white-clr">Newslatter</h3>
                            </div>
                            <div className="latest-thumwrap">
                                <img src="src/assets/img/footer/ln1.png" alt="img"/>
                                <img src="src/assets/img/footer/ln2.png" alt="img"/>
                                <img src="src/assets/img/footer/ln3.png" alt="img"/>
                                <img src="src/assets/img/footer/ln4.png" alt="img"/>
                                <img src="src/assets/img/footer/ln5.png" alt="img"/>
                                <img src="src/assets/img/footer/ln6.png" alt="img"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer-bottom">
            <div className="container">
                <div
                    className="footer-wrapper footer-wrapperv01 d-md-flex d-grid gap-md-0 gap-2 align-items-center justify-content-md-between justify-content-center text-md-start text-center">
                    <p className="wow fadeInLeft color-2" data-wow-delay=".3s">
                        &copy; Yoursitename 2024| All Rights Reserved
                    </p>
                    <ul className="footer-menu wow fadeInRight" data-wow-delay=".5s">
                        <li>
                            <a href="contact.html">
                                Trams & Condition
                            </a>
                        </li>
                        <li>
                            <a href="contact.html">
                                Privacy Policy
                            </a>
                        </li>
                        <li>
                            <a href="contact.html">
                                Contact Us
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
        </>
    )
}