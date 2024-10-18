export default function Blog() {
    return(
        <>
        {/* <!-- Preloader Start --> */}
    <div id="preloader" class="preloader">
        <div class="box d-grid gap-4">
            <span class="man-pre m-auto">
                <img src="src/assets/img/banner/preloader.png" alt="img"/>
            </span>
            <span class="p1-clr fz-40 fw-bold text-center d-block">
                FarmHub
            </span>
        </div>
    </div>

    {/* <!-- Offcanvas Area Start --> */}
    <div class="fix-area">
        <div class="offcanvas__info">
            <div class="offcanvas__wrapper">
                <div class="offcanvas__content">
                    <div class="offcanvas__top d-flex justify-content-between align-items-center">
                        <div class="offcanvas__logo">
                            <a href="index.html">
                                <img src="src/assets/img/logo/favcion.png" alt="logo-img"/>
                            </a>
                        </div>
                        <div class="offcanvas__close">
                            <button>
                                <i class="fas fa-times"></i>
                            </button>
                        </div>
                    </div>
                    <div class="mobile-menu fix mb-3"></div>
                    <div class="offcanvas__contact">
                        <p class="p800-clr mb-xxl-5 mb-3">
                            Financial planners help people to knowledge in about how to invest and save their moneye the
                            mos efficient way in to
                            eve.planners Financial planners help people to my destin knowledge in about
                        </p>
                        <h4>Contact Info</h4>
                        <ul>
                            <li class="d-flex align-items-center">
                                <div class="offcanvas__contact-icon">
                                    <i class="fal fa-map-marker-alt"></i>
                                </div>
                                <div class="offcanvas__contact-text">
                                    <a target="_blank" href="#">Us 1216, road 45 house of street</a>
                                </div>
                            </li>
                            <li class="d-flex align-items-center">
                                <div class="offcanvas__contact-icon mr-15">
                                    <i class="fal fa-envelope"></i>
                                </div>
                                <div class="offcanvas__contact-text">
                                    <a href="mailto:demo23yourmail.com"><span
                                            class="mailto:demo23yourmail.com">demo23yourmail.com</span></a>
                                </div>
                            </li>
                            <li class="d-flex align-items-center">
                                <div class="offcanvas__contact-icon mr-15">
                                    <i class="fal fa-clock"></i>
                                </div>
                                <div class="offcanvas__contact-text">
                                    <a target="_blank" href="#">Mod-friday, 06am -02pm</a>
                                </div>
                            </li>
                            <li class="d-flex align-items-center">
                                <div class="offcanvas__contact-icon mr-15">
                                    <i class="far fa-phone"></i>
                                </div>
                                <div class="offcanvas__contact-text">
                                    <a href="tel:+11002345909">(307) 555-0133</a>
                                </div>
                            </li>
                        </ul>
                        <div class="header-button mt-4 mb-4">
                            <a href="contact.html" class="cmn-btn">
                                Get A Quote
                                <i class="fa-solid fa-arrow-right"></i>
                            </a>
                        </div>
                        <h4>Social Media</h4>
                        <div class="social-icon d-flex align-items-center">
                            <a href="#"><i class="fab fa-facebook-f"></i></a>
                            <a href="#"><i class="fa-solid fa-x"></i></a>
                            <a href="#"><i class="fab fa-youtube"></i></a>
                            <a href="#"><i class="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="offcanvas__overlay"></div>

    {/* <!-- Header Common Adjustment Component --> */}
    <div id="header-sticky" class="header-common-adjustment">
        <a href="index.html" class="logo-v04">
            <img src="src/assets/img/logo/logo-light-clone.png" alt="img"/>
        </a>
        <div class="topheader-mainheader">
            {/* <!-- Header Top Section Start --> */}
            <div class="header-top-section topcmn-style d-lg-block d-none">
                <div class="container">
                    <div class="header-top-wrapper">
                        <ul class="contact-list">
                            <li>
                                <a href="#"><i class="fa-solid fa-envelope p1-clr"></i>
                                    info@example.com</a>
                            </li>
                            <li>
                                <a href="#" class="link"><i class="fa-solid fa-location-dot p1-clr"></i> 9991 Ohio St.
                                    Califirnia,
                                    10299</a>
                            </li>
                        </ul>
                        <div class="social-wrapper d-flex align-items-center">
                            <a href="#" class="white"><i class="white fa-brands fa-pinterest-p"></i></a>
                            <a href="#" class="white"><i class="white fa-brands fa-linkedin-in"></i></a>
                            <a href="#" class="white">
                                <svg width="11" height="12" viewBox="0 0 11 12" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M6.55735 5.16157L10.5183 0.65625H9.57971L6.14039 4.56816L3.39341 0.65625H0.225098L4.37906 6.57174L0.225098 11.2963H1.16378L4.79579 7.16516L7.6968 11.2963H10.8651L6.55712 5.16157H6.55735ZM5.2717 6.62386L4.85082 6.03481L1.502 1.34768H2.94375L5.64629 5.13034L6.06717 5.71939L9.58015 10.6363H8.13839L5.2717 6.62409V6.62386Z"
                                        fill="white" />
                                </svg>
                            </a>
                            <a href="#" class="white"><i class="white fab fa-facebook-f"></i></a>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Header Section Start --> */}
            <header class="header-v4">
                <div class="container">
                    <div class="mega-menu-wrapper">
                        <div class="header-main">
                            <div class="header-left d-xl-none d-block">
                                <div class="logo">
                                    <a href="index.html" class="header-logo">
                                        <img src="src/assets/img/logo/logo-black.png" alt="logo-img"/>
                                    </a>
                                </div>
                            </div>
                            <div class="header-right d-flex justify-content-between w-100 align-items-center">
                                <div class="mean__menu-wrapper">
                                    <div class="main-menu">
                                        <nav id="mobile-menu">
                                            <ul>
                                                <li class="has-dropdown active menu-thumb">
                                                    <a href="index.html">
                                                        Home
                                                        <i class="fas fa-angle-down"></i>
                                                    </a>
                                                    <ul class="submenu has-homemenu">
                                                        <li>
                                                            <div class="homemenu-items">
                                                                <div class="homemenu">
                                                                    <div class="homemenu-thumb">
                                                                        <img src="src/assets/img/header/home-1.jpg"
                                                                            alt="img"/>
                                                                        <div class="demo-button">
                                                                            <a href="index.html"
                                                                                class="theme-btn p5-bg">
                                                                                <span>Home 01</span>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                    <div class="homemenu-content text-center">
                                                                        <h4 class="homemenu-title">
                                                                            Home Version 01
                                                                        </h4>
                                                                    </div>
                                                                </div>
                                                                <div class="homemenu">
                                                                    <div class="homemenu-thumb mb-15">
                                                                        <img src="src/assets/img/header/home-2.jpg"
                                                                            alt="img"/>
                                                                        <div class="demo-button">
                                                                            <a href="index-2.html"
                                                                                class="theme-btn p5-bg">
                                                                                <span>Home 02</span>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                    <div class="homemenu-content text-center">
                                                                        <h4 class="homemenu-title">
                                                                            Home Version 02
                                                                        </h4>
                                                                    </div>
                                                                </div>
                                                                <div class="homemenu">
                                                                    <div class="homemenu-thumb mb-15">
                                                                        <img src="src/assets/img/header/home-3.jpg"
                                                                            alt="img"/>
                                                                        <div class="demo-button">
                                                                            <a href="index-3.html"
                                                                                class="theme-btn p5-bg">
                                                                                <span>Home 03</span>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                    <div class="homemenu-content text-center">
                                                                        <h4 class="homemenu-title">
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
                                                        <i class="fas fa-angle-down"></i>
                                                    </a>
                                                    <ul class="submenu">
                                                        <li><a href="service.html">Services</a></li>
                                                        <li><a href="service-details.html">Services Details</a></li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a href="gallery.html">
                                                        Projects
                                                        <i class="fas fa-angle-down"></i>
                                                    </a>
                                                    <ul class="submenu">
                                                        <li><a href="gallery.html">Gallery</a></li>
                                                        <li><a href="gallery-details.html">Gallery Details</a></li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a href="blog.html">
                                                        Blog
                                                        <i class="fas fa-angle-down"></i>
                                                    </a>
                                                    <ul class="submenu">
                                                        <li><a href="blog.html">Blog</a></li>
                                                        <li><a href="blog-details.html">Blog Details</a></li>
                                                    </ul>
                                                </li>
                                                <li class="has-dropdown">
                                                    <a href="#">
                                                        Pages
                                                        <i class="fas fa-angle-down"></i>
                                                    </a>
                                                    <ul class="submenu">
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
                                <div class="common-adjust-toggle">
                                    <a href="#" class="header-help">
                                        <img src="src/assets/img/icon/chat.svg" alt="img"/>
                                        <span class="d-grid">
                                            <span class="need">
                                                Need help?
                                            </span>
                                            <span class="call">
                                                (307) 555-0133
                                            </span>
                                        </span>
                                    </a>
                                    <div class="header__hamburger my-auto">
                                        <div class="sidebar__toggle d-center">
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
    <div class="search-wrap">
        <div class="search-inner">
            <i class="fas fa-times search-close" id="search-close"></i>
            <div class="search-cell">
                <form method="get">
                    <div class="search-field-holder">
                        <input type="search" class="main-search-input" placeholder="Search..."/>
                    </div>
                </form>
            </div>
        </div>
    </div>

    {/* <!-- Hero Section Start --> */}
    <section class="breadcrumnd-banner overflow-hidden">
        <div class="container">
            <div class="breadcrumnd-wrapp">
                <div class="bread-content">
                    <h1 class="wow fadeInDown" data-wow-delay=".4s">
                        Blog
                    </h1>
                    <ul class="bread-listing">
                        <li>
                            <a href="index.html">
                                Home
                            </a>
                        </li>
                        <li>
                            <i class="fa-solid fa-angle-right"></i>
                        </li>
                        <li>
                            Blog
                        </li>
                    </ul>
                </div>
                <div class="bread-thumb d-sm-block d-none">
                    <img src="src/assets/img/about/tt-slice.png" alt="img"/>
                </div>
            </div>
        </div>
    </section>

    {/* <!-- BLog section --> */}
    <section class="blog-section overflow-hidden section-padding white-bg">
        <div class="container">
            <div class="row g-xl-4 g-4 justify-content-center">
                <div class="col-lg-8">
                    <div class="blog-details-big pe-xl-2">
                        <div class="blog-details-leftitem wow fadeInUp" data-wow-delay=".2s">
                            <div class="thumb position-relative">
                                <img src="src/assets/img/blog/blog-big01.jpg" alt="img"/>
                                <span class="date-badge">
                                    22 jan
                                </span>
                            </div>
                            <div class="content">
                                <ul class="comment-inner">
                                    <li>
                                        <a href="#"><i class="fa-regular fa-comments"></i> Comments (05)</a>
                                    </li>
                                    <li>
                                        <a href="#"><i class="fa-regular fa-user"></i> By admin</a>
                                    </li>
                                </ul>
                                <a href="blog-details.html" class="titles">
                                    Farming for a Better Future
                                </a>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur. Amet lectus mi ultricies dictum facilisis
                                    sem. a Imperdiet massa turpis sit
                                    Lorem ipsum dolor sit amet consectetur. Amet lectus mi the ultricies dictum
                                    facilisis sem. Imperdiet best destination in
                                    the world
                                </p>
                                <a href="blog-details.html" class="cmn-btn primary-border">
                                    Read More
                                    <i class="fa-solid fa-arrow-right p1-clr"></i>
                                </a>
                            </div>
                        </div>
                        <div class="blog-details-leftitem wow fadeInUp" data-wow-delay=".3s">
                            <div class="thumb position-relative">
                                <img src="src/assets/img/blog/blog-big02.jpg" alt="img"/>
                                <span class="date-badge">
                                    22 jan
                                </span>
                            </div>
                            <div class="content">
                                <ul class="comment-inner">
                                    <li>
                                        <a href="#"><i class="fa-regular fa-comments"></i> Comments (05)</a>
                                    </li>
                                    <li>
                                        <a href="#"><i class="fa-regular fa-user"></i> By admin</a>
                                    </li>
                                </ul>
                                <a href="blog-details.html" class="titles">
                                    Cultivate Success with Agriculture
                                </a>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur. Amet lectus mi ultricies dictum facilisis
                                    sem. a Imperdiet massa turpis sit
                                    Lorem ipsum dolor sit amet consectetur. Amet lectus mi the ultricies dictum
                                    facilisis sem. Imperdiet best destination in
                                    the world
                                </p>
                                <a href="blog-details.html" class="cmn-btn primary-border">
                                    Read More
                                    <i class="fa-solid fa-arrow-right p1-clr"></i>
                                </a>
                            </div>
                        </div>
                        <div class="blog-details-leftitem wow fadeInUp" data-wow-delay=".4s">
                            <div class="thumb position-relative">
                                <img src="src/assets/img/blog/blog-big03.jpg" alt="img"/>
                                <span class="date-badge">
                                    22 jan
                                </span>
                            </div>
                            <div class="content">
                                <ul class="comment-inner">
                                    <li>
                                        <a href="#"><i class="fa-regular fa-comments"></i> Comments (05)</a>
                                    </li>
                                    <li>
                                        <a href="#"><i class="fa-regular fa-user"></i> By admin</a>
                                    </li>
                                </ul>
                                <a href="blog-details.html" class="titles">
                                    Sow the Seeds of Prosperity
                                </a>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur. Amet lectus mi ultricies dictum facilisis
                                    sem. a Imperdiet massa turpis sit
                                    Lorem ipsum dolor sit amet consectetur. Amet lectus mi the ultricies dictum
                                    facilisis sem. Imperdiet best destination in
                                    the world
                                </p>
                                <a href="blog-details.html" class="cmn-btn primary-border">
                                    Read More
                                    <i class="fa-solid fa-arrow-right p1-clr"></i>
                                </a>
                            </div>
                        </div>
                        <div class="blog-details-leftitem wow fadeInUp" data-wow-delay=".5s">
                            <div class="thumb position-relative">
                                <img src="src/assets/img/blog/blog-big04.jpg" alt="img"/>
                                <span class="date-badge">
                                    22 jan
                                </span>
                            </div>
                            <div class="content">
                                <ul class="comment-inner">
                                    <li>
                                        <a href="#"><i class="fa-regular fa-comments"></i> Comments (05)</a>
                                    </li>
                                    <li>
                                        <a href="#"><i class="fa-regular fa-user"></i> By admin</a>
                                    </li>
                                </ul>
                                <a href="blog-details.html" class="titles">
                                    From Farm to Table, Agriculture Matters
                                </a>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur. Amet lectus mi ultricies dictum facilisis
                                    sem. a Imperdiet massa turpis sit
                                    Lorem ipsum dolor sit amet consectetur. Amet lectus mi the ultricies dictum
                                    facilisis sem. Imperdiet best destination in
                                    the world
                                </p>
                                <a href="blog-details.html" class="cmn-btn primary-border">
                                    Read More
                                    <i class="fa-solid fa-arrow-right p1-clr"></i>
                                </a>
                            </div>
                        </div>
                        <div class="blog-details-leftitem wow fadeInUp" data-wow-delay=".6s">
                            <div class="thumb position-relative">
                                <img src="src/assets/img/blog/blog-big05.jpg" alt="img"/>
                                <span class="date-badge">
                                    22 jan
                                </span>
                            </div>
                            <div class="content">
                                <ul class="comment-inner">
                                    <li>
                                        <a href="#"><i class="fa-regular fa-comments"></i> Comments (05)</a>
                                    </li>
                                    <li>
                                        <a href="#"><i class="fa-regular fa-user"></i> By admin</a>
                                    </li>
                                </ul>
                                <a href="blog-details.html" class="titles">
                                    Planting the Seeds of Innovation
                                </a>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur. Amet lectus mi ultricies dictum facilisis
                                    sem. a Imperdiet massa turpis sit
                                    Lorem ipsum dolor sit amet consectetur. Amet lectus mi the ultricies dictum
                                    facilisis sem. Imperdiet best destination in
                                    the world
                                </p>
                                <a href="blog-details.html" class="cmn-btn primary-border">
                                    Read More
                                    <i class="fa-solid fa-arrow-right p1-clr"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="blog-right-bar mt-lg-0 mt-4">
                        <div class="box common-style-box wow fadeInUp" data-wow-delay=".2s">
                            <div class="wid-title wow fadeInLeft" data-wow-delay=".3s">
                                <h3>Search</h3>
                            </div>
                            <div class="search-widget" data-aos="zoom-in" data-aos-duration="1400">
                                <form action="#">
                                    <input type="text" placeholder="Search here..."/>
                                    <button type="submit"><i class="fas fa-search"></i></button>
                                </form>
                            </div>
                        </div>
                        <div class="box common-style-box wow fadeInUp" data-wow-delay=".3s">
                            <div class="wid-title wow fadeInLeft" data-wow-delay=".3s">
                                <h3>Search</h3>
                            </div>
                            <div class="category" data-aos="fade-down" data-aos-duration="1600">
                                <ul class="d-grid gap-xxl-3 gap-3">
                                    <li>
                                        <a href="blog-details.html">
                                            <i class="fa-solid fa-minus"></i>Evergreen Lawn Care
                                        </a>
                                    </li>
                                    <li>
                                        <a href="blog-details.html">
                                            <i class="fa-solid fa-minus"></i>Petal Perfect Farming
                                        </a>
                                    </li>
                                    <li>
                                        <a href="blog-details.html">
                                            <i class="fa-solid fa-minus"></i>Blissful Botanicals
                                        </a>
                                    </li>
                                    <li>
                                        <a href="blog-details.html">
                                            <i class="fa-solid fa-minus"></i>The Farm Guru
                                        </a>
                                    </li>
                                    <li>
                                        <a href="blog-details.html">
                                            <i class="fa-solid fa-minus"></i>Serene Scape Design
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="box common-style-box wow fadeInUp" data-wow-delay=".4s">
                            <div class="wid-title wow fadeInLeft" data-wow-delay=".3s">
                                <h3>Latest Blogs</h3>
                            </div>
                            <div class="recent-postwrap">
                                <div class="recent-items">
                                    <div class="recent-thumb">
                                        <img src="src/assets/img/blog/details-small1.png" alt="img"/>
                                    </div>
                                    <div class="recent-content">
                                        <span class="d-flex align-items-center gap-2">
                                            <i class="fa-solid fa-calendar-days"></i> Jan 10,2024
                                        </span>
                                        <a href="blog-details.html">
                                            Planting the Seeds of Innovation
                                        </a>
                                    </div>
                                </div>
                                <div class="recent-items">
                                    <div class="recent-thumb">
                                        <img src="src/assets/img/blog/details-small2.png" alt="img"/>
                                    </div>
                                    <div class="recent-content">
                                        <span class="d-flex align-items-center gap-2">
                                            <i class="fa-solid fa-calendar-days"></i> Jan 10,2024
                                        </span>
                                        <a href="blog-details.html">
                                            Discover the Potential of Agriculture
                                        </a>
                                    </div>
                                </div>
                                <div class="recent-items">
                                    <div class="recent-thumb">
                                        <img src="src/assets/img/blog/details-small13.png" alt="img"/>
                                    </div>
                                    <div class="recent-content">
                                        <span class="d-flex align-items-center gap-2">
                                            <i class="fa-solid fa-calendar-days"></i> Jan 10,2024
                                        </span>
                                        <a href="blog-details.html">
                                            Nourish Your Life with Agriculture
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="box common-style-box wow fadeInUp" data-wow-delay=".5s">
                            <div class="wid-title wow fadeInLeft" data-wow-delay=".3s">
                                <h3>Tags</h3>
                            </div>
                            <div class="tagwrap">
                                <a href="blog-details.html">CropCare Pro</a>
                                <a href="blog-details.html">Blossoms</a>
                                <a href="blog-details.html">Farm</a>
                                <a href="blog-details.html">Harmony</a>
                                <a href="blog-details.html">Nature</a>
                                <a href="blog-details.html">Green</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* <!--<< Subscribe Start >>--> */}
    <div class="subscrbie-section subscrbie-stylev03">
        <div class="container">
            <div class="subscribe-wrapper-v03">
                <div class="container position-relative">
                    <div class="row g-4 align-items-end justify-content-between">
                        <div class="col-lg-6 col-md-6 mb-xl-5 pb-xl-4">
                            <div class="get-element">
                                <img src="src/assets/img/element/get-element.png" alt="img" class="d-md-block d-none"/>
                            </div>
                            <div class="subs-contentv3">
                                <h2>
                                    Get Update <span>Subscribe</span> <br/> to Newsletter
                                </h2>
                                <form action="#" class="subscribe-form03 flex-xl-nowrap flex-wrap">
                                    <input type="text" placeholder="Enter Your Email"/>
                                    <button type="submit" class="cmn-btn text-capitalize">
                                        Subcribe
                                        <i class="fa-solid fa-arrow-right"></i>
                                    </button>
                                </form>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6">
                            <div class="conatact-box common-contact-inner position-relative">
                                <div class="section-title mb-40">
                                    <h5 class="p1-clr wow fadeInLeft" data-wow-delay="0.4s">
                                        Contact
                                    </h5>
                                    <h2>
                                        Get Touch Here
                                    </h2>
                                </div>
                                <form action="#" class="row g-xl-4 g-3">
                                    <div class="col-lg-6">
                                        <input type="text" placeholder="Name"/>
                                    </div>
                                    <div class="col-lg-6">
                                        <input type="email" placeholder="E-mail"/>
                                    </div>
                                    <div class="col-lg-12">
                                        <input type="text" placeholder="Subject"/>
                                    </div>
                                    <div class="col-lg-12">
                                        <textarea name="message" placeholder="Message"></textarea>
                                    </div>
                                    <div class="col-lg-6">
                                        <button type="submit" class="cmn-btn text-capitalize">
                                            Submit Now
                                        </button>
                                    </div>
                                </form>
                                {/* <!-- Element --> */}
                                <img src="src/assets/img/element/sun-element.png" alt="img"
                                    class="sun-element d-xl-block d-none"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    {/* <!--<< Footer Section Start >>--> */}
    <footer class="footer-section overflow-hidden position-relative footer-style3">
        <div class="footer-widgets-wrapper footer-widget-wrapperv03">
            <div class="container">
                <div class="row g-3 g-md-4 g-4 justify-content-between">
                    <div class="col-xl-4 col-lg-3 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay=".3s">
                        <div class="single-footer-widget">
                            <div class="widget-head">
                                <a href="index.html" class="footer-logo">
                                    <img src="src/assets/img/logo/logo-light.png" alt="logo-img"/>
                                </a>
                            </div>
                            <div class="footer-content">
                                <p class="pre-pragraph">
                                    Lorem ipsum dolor amet consectetur <br/> sell adipis elit phase nibh ellentes
                                </p>
                                <div class="social-wrapper social-empact d-flex align-items-center">
                                    <a href="#" class="white-clr"><i class="white-clr fab fa-facebook-f"></i></a>
                                    <a href="#" class="white-clr">
                                        <svg width="11" height="12" viewBox="0 0 11 12" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M6.55735 5.16157L10.5183 0.65625H9.57971L6.14039 4.56816L3.39341 0.65625H0.225098L4.37906 6.57174L0.225098 11.2963H1.16378L4.79579 7.16516L7.6968 11.2963H10.8651L6.55712 5.16157H6.55735ZM5.2717 6.62386L4.85082 6.03481L1.502 1.34768H2.94375L5.64629 5.13034L6.06717 5.71939L9.58015 10.6363H8.13839L5.2717 6.62409V6.62386Z"
                                                fill="white-clr" />
                                        </svg>
                                    </a>
                                    <a href="#" class="white-clr"><i class="white-clr fa-brands fa-linkedin-in"></i></a>
                                    <a href="#" class="white-clr"><i class="white-clr fa-brands fa-pinterest-p"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-2 col-lg-2 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay=".5s">
                        <div class="single-footer-widget">
                            <div class="widget-head">
                                <h3 class="white-clr">Service</h3>
                            </div>
                            <ul class="list-area">
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
                    <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay=".5s">
                        <div class="single-footer-widget">
                            <div class="widget-head">
                                <h3 class="white-clr">Contact</h3>
                            </div>
                            <ul class="list-area list-contact">
                                <li>
                                    <a href="#">
                                        <i class="fa-solid fa-envelope"></i>
                                        debra.holt@example.com
                                    </a>
                                </li>
                                <li>
                                    <a href="info@example.com" class="link">
                                        <i class="fa-solid fa-location-dot"></i>
                                        1901 Thornridge Cir. Shiloh, <br/> Hawaii 81063
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="link">
                                        <i class="fa-solid fa-phone"></i>
                                        (270) 555-0117 <br/>
                                        (270) 555-0118
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay=".5s">
                        <div class="single-footer-widget">
                            <div class="widget-head">
                                <h3 class="white-clr">Newslatter</h3>
                            </div>
                            <div class="latest-thumwrap">
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
        <div class="footer-bottom">
            <div class="container">
                <div
                    class="footer-wrapper footer-wrapperv01 d-md-flex d-grid gap-md-0 gap-2 align-items-center justify-content-md-between justify-content-center text-md-start text-center">
                    <p class="wow fadeInLeft color-2" data-wow-delay=".3s">
                        &copy; Yoursitename 2024| All Rights Reserved
                    </p>
                    <ul class="footer-menu wow fadeInRight" data-wow-delay=".5s">
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