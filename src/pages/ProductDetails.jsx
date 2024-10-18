export default function ProductDetails() {
    return(
        <>
        {/* <!-- Preloader Start --> */}
    <div id="preloader" className="preloader">
        <div className="box d-grid gap-4">
            <span className="man-pre m-auto">
                <img src="../src/assets/img/banner/preloader.png" alt="img"/>
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
                                <img src="../src/assets/img/logo/favcion.png" alt="logo-img"/>
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
            <img src="../src/assets/img/logo/logo-light-clone.png" alt="img"/>
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
                                        <img src="../src/assets/img/logo/logo-black.png" alt="logo-img"/>
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
                                                                        <img src="../src/assets/img/header/home-1.jpg"
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
                                                                        <img src="../src/assets/img/header/home-2.jpg"
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
                                                                        <img src="../src/assets/img/header/home-3.jpg"
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
                                        <img src="../src/assets/img/icon/chat.svg" alt="img"/>
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
                        Product Details
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
                            Product Details
                        </li>
                    </ul>
                </div>
                <div className="bread-thumb d-sm-block d-none">
                    <img src="../src/assets/img/about/tt-slice.png" alt="img"/>
                </div>
            </div>
        </div>
    </section>

    {/* <!-- Product List section --> */}
    <section className="product-details-section overflow-hidden section-padding white-bg">
        <div className="container">
            <div className="row g-xl-4 g-3 justify-content-center">
                <div className="col-lg-3 col-md-5 pe-xl-4">
                    <div className="product-details-leftbar mb-60">
                        <div className="product-categori-select">
                            <i className="fa-solid fa-list"></i>
                            <select name="cate">
                                <option value="1">
                                    Shop By Ctagory
                                </option>
                                <option value="2">
                                    Fresh Meat
                                </option>
                                <option value="3">
                                    Beef Meat
                                </option>
                                <option value="4">
                                    Potatoes
                                </option>
                                <option value="5">
                                    Soybean
                                </option>
                            </select>
                        </div>
                        <div className="tab-faq faq wow fadeInUp" data-wow-delay=".3s">
                            <div className="accordion-section d-grid gap-xxl-3 gap-lg-3 gap-2">
                                <div className="accordion-single">
                                    <h5 className="header-area">
                                        <button
                                            className="accordion-btn d-flex align-items-center d-flex position-relative w-100"
                                            type="button">
                                            <img src="../src/assets/img/icon/mc1.svg" alt="icon"/>
                                            Meat
                                        </button>
                                    </h5>
                                    <div className="content-area">
                                        <ul className="content-body">
                                            <li>
                                                <a href="product-details.html">
                                                    <i className="fa-solid fa-angle-right"></i>Fresh Meat
                                                </a>
                                            </li>
                                            <li>
                                                <a href="product-details.html">
                                                    <i className="fa-solid fa-angle-right"></i>Beef Meat
                                                </a>
                                            </li>
                                            <li>
                                                <a href="product-details.html">
                                                    <i className="fa-solid fa-angle-right"></i>Potatoes
                                                </a>
                                            </li>
                                            <li>
                                                <a href="product-details.html">
                                                    <i className="fa-solid fa-angle-right"></i>Rice
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="accordion-single">
                                    <h5 className="header-area">
                                        <button
                                            className="accordion-btn d-flex align-items-center d-flex position-relative w-100"
                                            type="button">
                                            <img src="../src/assets/img/icon/mc2.svg" alt="icon"/>
                                            Sugar Cane
                                        </button>
                                    </h5>
                                    <div className="content-area">
                                        <ul className="content-body">
                                            <li>
                                                <a href="product-details.html">
                                                    <i className="fa-solid fa-angle-right"></i>Fresh Meat
                                                </a>
                                            </li>
                                            <li>
                                                <a href="product-details.html">
                                                    <i className="fa-solid fa-angle-right"></i>Beef Meat
                                                </a>
                                            </li>
                                            <li>
                                                <a href="product-details.html">
                                                    <i className="fa-solid fa-angle-right"></i>Potatoes
                                                </a>
                                            </li>
                                            <li>
                                                <a href="product-details.html">
                                                    <i className="fa-solid fa-angle-right"></i>Rice
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="accordion-single">
                                    <h5 className="header-area">
                                        <button
                                            className="accordion-btn d-flex align-items-center d-flex position-relative w-100"
                                            type="button">
                                            <img src="../src/assets/img/icon/mc3.svg" alt="icon"/>
                                            Potatoes
                                        </button>
                                    </h5>
                                    <div className="content-area">
                                        <ul className="content-body">
                                            <li>
                                                <a href="product-details.html">
                                                    <i className="fa-solid fa-angle-right"></i>Fresh Meat
                                                </a>
                                            </li>
                                            <li>
                                                <a href="product-details.html">
                                                    <i className="fa-solid fa-angle-right"></i>Beef Meat
                                                </a>
                                            </li>
                                            <li>
                                                <a href="product-details.html">
                                                    <i className="fa-solid fa-angle-right"></i>Potatoes
                                                </a>
                                            </li>
                                            <li>
                                                <a href="product-details.html">
                                                    <i className="fa-solid fa-angle-right"></i>Rice
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="accordion-single">
                                    <h5 className="header-area">
                                        <button
                                            className="accordion-btn d-flex align-items-center d-flex position-relative w-100"
                                            type="button">
                                            <img src="../src/assets/img/icon/mc4.svg" alt="icon"/>
                                            Rice
                                        </button>
                                    </h5>
                                    <div className="content-area">
                                        <ul className="content-body">
                                            <li>
                                                <a href="product-details.html">
                                                    <i className="fa-solid fa-angle-right"></i>Fresh Meat
                                                </a>
                                            </li>
                                            <li>
                                                <a href="product-details.html">
                                                    <i className="fa-solid fa-angle-right"></i>Beef Meat
                                                </a>
                                            </li>
                                            <li>
                                                <a href="product-details.html">
                                                    <i className="fa-solid fa-angle-right"></i>Potatoes
                                                </a>
                                            </li>
                                            <li>
                                                <a href="product-details.html">
                                                    <i className="fa-solid fa-angle-right"></i>Rice
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="accordion-single">
                                    <h5 className="header-area">
                                        <button
                                            className="accordion-btn d-flex align-items-center d-flex position-relative w-100"
                                            type="button">
                                            <img src="../src/assets/img/icon/mc5.svg" alt="icon"/>
                                            Tractor
                                        </button>
                                    </h5>
                                    <div className="content-area">
                                        <ul className="content-body">
                                            <li>
                                                <a href="product-details.html">
                                                    <i className="fa-solid fa-angle-right"></i>Fresh Meat
                                                </a>
                                            </li>
                                            <li>
                                                <a href="product-details.html">
                                                    <i className="fa-solid fa-angle-right"></i>Beef Meat
                                                </a>
                                            </li>
                                            <li>
                                                <a href="product-details.html">
                                                    <i className="fa-solid fa-angle-right"></i>Potatoes
                                                </a>
                                            </li>
                                            <li>
                                                <a href="product-details.html">
                                                    <i className="fa-solid fa-angle-right"></i>Rice
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="accordion-single">
                                    <h5 className="header-area">
                                        <button
                                            className="accordion-btn d-flex align-items-center d-flex position-relative w-100"
                                            type="button">
                                            <img src="../src/assets/img/icon/mc6.svg" alt="icon"/>
                                            Mower
                                        </button>
                                    </h5>
                                    <div className="content-area">
                                        <ul className="content-body">
                                            <li>
                                                <a href="product-details.html">
                                                    <i className="fa-solid fa-angle-right"></i>Fresh Meat
                                                </a>
                                            </li>
                                            <li>
                                                <a href="product-details.html">
                                                    <i className="fa-solid fa-angle-right"></i>Beef Meat
                                                </a>
                                            </li>
                                            <li>
                                                <a href="product-details.html">
                                                    <i className="fa-solid fa-angle-right"></i>Potatoes
                                                </a>
                                            </li>
                                            <li>
                                                <a href="product-details.html">
                                                    <i className="fa-solid fa-angle-right"></i>Rice
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="accordion-single">
                                    <h5 className="header-area">
                                        <button
                                            className="accordion-btn d-flex align-items-center d-flex position-relative w-100"
                                            type="button">
                                            <img src="../src/assets/img/icon/mc7.svg" alt="icon"/>
                                            Plow
                                        </button>
                                    </h5>
                                    <div className="content-area">
                                        <ul className="content-body">
                                            <li>
                                                <a href="product-details.html">
                                                    <i className="fa-solid fa-angle-right"></i>Fresh Meat
                                                </a>
                                            </li>
                                            <li>
                                                <a href="product-details.html">
                                                    <i className="fa-solid fa-angle-right"></i>Beef Meat
                                                </a>
                                            </li>
                                            <li>
                                                <a href="product-details.html">
                                                    <i className="fa-solid fa-angle-right"></i>Potatoes
                                                </a>
                                            </li>
                                            <li>
                                                <a href="product-details.html">
                                                    <i className="fa-solid fa-angle-right"></i>Rice
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="accordion-single">
                                    <h5 className="header-area">
                                        <button
                                            className="accordion-btn d-flex align-items-center d-flex position-relative w-100"
                                            type="button">
                                            <img src="../src/assets/img/icon/mc8.svg" alt="icon"/>
                                            Rake
                                        </button>
                                    </h5>
                                    <div className="content-area">
                                        <ul className="content-body">
                                            <li>
                                                <a href="product-details.html">
                                                    <i className="fa-solid fa-angle-right"></i>Fresh Meat
                                                </a>
                                            </li>
                                            <li>
                                                <a href="product-details.html">
                                                    <i className="fa-solid fa-angle-right"></i>Beef Meat
                                                </a>
                                            </li>
                                            <li>
                                                <a href="product-details.html">
                                                    <i className="fa-solid fa-angle-right"></i>Potatoes
                                                </a>
                                            </li>
                                            <li>
                                                <a href="product-details.html">
                                                    <i className="fa-solid fa-angle-right"></i>Rice
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="latest-project-wrap">
                        <h5 className="mb-24">
                            Latest Project
                        </h5>
                        <div className="recent-postwrap">
                            <div className="recent-items">
                                <div className="recent-thumb">
                                    <img src="../src/assets/img/blog/details-small1.png" alt="img"/>
                                </div>
                                <div className="recent-content">
                                    <a href="product-details.html">
                                        Nourishing world from table
                                    </a>
                                    <span>
                                        $123.00
                                    </span>
                                </div>
                            </div>
                            <div className="recent-items">
                                <div className="recent-thumb">
                                    <img src="../src/assets/img/blog/product-recente1.jpg" alt="img"/>
                                </div>
                                <div className="recent-content">
                                    <a href="product-details.html">
                                        Farm goodness fresh for all
                                    </a>
                                    <p>
                                        $120.00 <span>100$</span>
                                    </p>
                                </div>
                            </div>
                            <div className="recent-items">
                                <div className="recent-thumb">
                                    <img src="../src/assets/img/blog/product-recente2.jpg" alt="img"/>
                                </div>
                                <div className="recent-content">
                                    <a href="product-details.html">
                                        Farming passion feeding purpose
                                    </a>
                                    <span>
                                        100.00
                                    </span>
                                </div>
                            </div>
                            <div className="recent-items">
                                <div className="recent-thumb">
                                    <img src="../src/assets/img/blog/product-recente3.jpg" alt="img"/>
                                </div>
                                <div className="recent-content">
                                    <a href="product-details.html">
                                        Growing strong a feeding futures
                                    </a>
                                    <span>
                                        50.00
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-9 col-md-7">
                    <div className="row g-4 mb-60">
                        <div className="col-xl-5 col-lg-6">
                            <div className="shop-details-wrap">
                                <div className="swiper mySwiper2">
                                    <div className="swiper-wrapper">
                                      <div className="swiper-slide">
                                        <div className="shop-details-bigthumb">
                                            <img src="../src/assets/img/service/product-small6.jpg" alt="img"/>
                                        </div>
                                      </div>
                                      <div className="swiper-slide">
                                        <div className="shop-details-bigthumb">
                                            <img src="../src/assets/img/service/product-small6.jpg" alt="img"/>
                                        </div>
                                      </div>
                                      <div className="swiper-slide">
                                        <div className="shop-details-bigthumb">
                                            <img src="../src/assets/img/service/product-small6.jpg" alt="img"/>
                                        </div>
                                      </div>
                                      <div className="swiper-slide">
                                        <div className="shop-details-bigthumb">
                                            <img src="../src/assets/img/service/product-small6.jpg" alt="img"/>
                                        </div>
                                      </div>
                                      <div className="swiper-slide">
                                        <div className="shop-details-bigthumb">
                                            <img src="../src/assets/img/service/product-small6.jpg" alt="img"/>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="swiper-button-next"></div>
                                    <div className="swiper-button-prev"></div>
                                  </div>
                                  <div className="swiper mySwiper">
                                    <div className="swiper-wrapper">
                                      <div className="swiper-slide">
                                        <div className="shop-details-samll d-center">
                                            <img src="../src/assets/img/service/product-small1.png" alt="img"/>
                                        </div>
                                      </div>
                                      <div className="swiper-slide">
                                        <div className="shop-details-samll d-center">
                                            <img src="../src/assets/img/service/product-small2.png" alt="img"/>
                                        </div>
                                      </div>
                                      <div className="swiper-slide">
                                        <div className="shop-details-samll d-center">
                                            <img src="../src/assets/img/service/product-small3.png" alt="img"/>
                                        </div>
                                      </div>
                                      <div className="swiper-slide">
                                        <div className="shop-details-samll d-center">
                                            <img src="../src/assets/img/service/product-small4.png" alt="img"/>
                                        </div>
                                      </div>
                                      <div className="swiper-slide">
                                        <div className="shop-details-samll d-center">
                                            <img src="../src/assets/img/service/product-small5.png" alt="img"/>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                            </div>
                        </div>
                        <div className="col-xl-7 col-lg-6">
                            <div className="product-infowrap">
                                <h3 className="title">
                                    Beef Meat
                                </h3>
                                <p>
                                    Web designing in a powerful way of just not an only professi however, in a pass
                                    Company a to a tendency
                                </p>
                                <div className="ratting">
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                </div>
                                <span className="creview">
                                    1 Customer Review
                                </span>
                                <h3 className="prices">
                                    32.00 <span>$25.00</span>
                                </h3>
                                <span className="d-block">Bonless Meat</span>
                                <span className="d-block">Fresh Meat</span>
                                <div className="quantity-wrap">
                                    <div className="counter">
                                        <span className="down" onClick='decreaseCount(event, this)'>-</span>
                                        <input type="text" value="1"/>
                                        <span className="up" onClick='increaseCount(event, this)'>+</span>
                                    </div>
                                </div>
                                <a href="contact.html" className="cmn-btn d-inline-flex">
                                    Add To Cart
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="review-description">
                        <div className="singletab">
                            <ul className="tablinks">
                                <li className="nav-links">
                                    <button className="tablink">Accesories</button>
                                </li>
                                <li className="nav-links">
                                    <button className="tablink">Description</button>
                                </li>
                                <li className="nav-links">
                                    <button className="tablink">Specificaton</button>
                                </li>
                                <li className="nav-links active">
                                    <button className="tablink">Reviews</button>
                                </li>
                            </ul>
                            <div className="tabcontents">
                                <div className="tabitem">
                                    <p className="dess">
                                        Contrary to popular belief Lorem Ipsum is not simply random text It has roots in a piece of classNameical  the a  literature from 45 BC making it over 2000 years old. Richard McClintock a Latin professor at Hampden-a Sydney College Virgini the looked up one of the more obscure
                                        Ipsum is not simply random text It has roots in a piece of classNameical  the a  literature from 45 BC making it over 2000 years old. Richard McClintock a Latin professor at Hampden-a Sydney College Virgini the looked up one of the more obscure
                                    </p>
                                </div>
                                <div className="tabitem">
                                    <p className="dess">
                                        Contrary to popular belief Lorem Ipsum is not simply random text It has roots in a piece of classNameical  the a  literature from 45 BC making it over 2000 years old. Richard McClintock a Latin professor at Hampden-a Sydney College Virgini the looked up one of the more obscure
                                        Ipsum is not simply random text It has roots in a piece of classNameical  the a  literature from 45 BC making it over 2000 years old. Richard McClintock a Latin professor at Hampden-a Sydney College Virgini the looked up one of the more obscure
                                    </p>
                                </div>
                                <div className="tabitem">
                                    <p className="dess">
                                        Contrary to popular belief Lorem Ipsum is not simply random text It has roots in a piece of classNameical  the a  literature from 45 BC making it over 2000 years old. Richard McClintock a Latin professor at Hampden-a Sydney College Virgini the looked up one of the more obscure
                                        Ipsum is not simply random text It has roots in a piece of classNameical  the a  literature from 45 BC making it over 2000 years old. Richard McClintock a Latin professor at Hampden-a Sydney College Virgini the looked up one of the more obscure
                                    </p>
                                </div>
                                <div className="tabitem active">
                                    <div className="review-main-body mb-40">
                                        <div className="left-review">
                                            <h3 className="p900-clr fw-normal mb-2">
                                                Besed In 2 Comment
                                            </h3>
                                            <div className="d-flex align-items-center gap-2 mb-30">
                                                <h3 className="p900-clr fw-normal">
                                                    4.5
                                                </h3>
                                                <div className="ratting mt-3 d-flex align-items-center gap-2 mb-20">
                                                    <i className="fa-solid fa-star p2-clr"></i>
                                                    <i className="fa-solid fa-star p2-clr"></i>
                                                    <i className="fa-solid fa-star p2-clr"></i>
                                                    <i className="fa-solid fa-star p2-clr"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                </div>
                                            </div>
                                            <div className="review-start-inner">
                                               <div className="review-star-item">
                                                    <div className="ratting d-flex align-items-center gap-2">
                                                        <i className="fa-solid fa-star p2-clr"></i>
                                                        <i className="fa-solid fa-star p2-clr"></i>
                                                        <i className="fa-solid fa-star p2-clr"></i>
                                                        <i className="fa-solid fa-star p2-clr"></i>
                                                        <i className="fa-solid fa-star p2-clr"></i>
                                                    </div>
                                                    <div className="progress_bar">
                                                        <div className="progress_bar_item">
                                                            <div className="item_bar">
                                                                <div className="progress" data-progress="50"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <span className="p800-clr">
                                                        01
                                                    </span>
                                               </div>
                                               <div className="review-star-item">
                                                    <div className="ratting d-flex align-items-center gap-2">
                                                        <i className="fa-solid fa-star p2-clr"></i>
                                                        <i className="fa-solid fa-star p2-clr"></i>
                                                        <i className="fa-solid fa-star p2-clr"></i>
                                                        <i className="fa-solid fa-star p2-clr"></i>
                                                        <i className="fa-solid fa-star"></i>
                                                    </div>
                                                    <div className="progress_bar">
                                                        <div className="progress_bar_item">
                                                            <div className="item_bar">
                                                                <div className="progress" data-progress="40"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <span className="p800-clr">
                                                        01
                                                    </span>
                                                </div>
                                                <div className="review-star-item">
                                                    <div className="ratting d-flex align-items-center gap-2">
                                                        <i className="fa-solid fa-star p2-clr"></i>
                                                        <i className="fa-solid fa-star p2-clr"></i>
                                                        <i className="fa-solid fa-star p2-clr"></i>
                                                        <i className="fa-solid fa-star"></i>
                                                        <i className="fa-solid fa-star"></i>
                                                    </div>
                                                    <div className="progress_bar">
                                                        <div className="progress_bar_item">
                                                            <div className="item_bar">
                                                                <div className="progress" data-progress="30"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <span className="p800-clr">
                                                        01
                                                    </span>
                                                </div>
                                                <div className="review-star-item">
                                                    <div className="ratting d-flex align-items-center gap-2">
                                                        <i className="fa-solid fa-star p2-clr"></i>
                                                        <i className="fa-solid fa-star p2-clr"></i>
                                                        <i className="fa-solid fa-star"></i>
                                                        <i className="fa-solid fa-star"></i>
                                                        <i className="fa-solid fa-star"></i>
                                                    </div>
                                                    <div className="progress_bar">
                                                        <div className="progress_bar_item">
                                                            <div className="item_bar">
                                                                <div className="progress" data-progress="20"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <span className="p800-clr">
                                                        01
                                                    </span>
                                                </div>
                                                <div className="review-star-item">
                                                    <div className="ratting d-flex align-items-center gap-2">
                                                        <i className="fa-solid fa-star p2-clr"></i>
                                                        <i className="fa-solid fa-star"></i>
                                                        <i className="fa-solid fa-star"></i>
                                                        <i className="fa-solid fa-star"></i>
                                                        <i className="fa-solid fa-star"></i>
                                                    </div>
                                                    <div className="progress_bar">
                                                        <div className="progress_bar_item">
                                                            <div className="item_bar">
                                                                <div className="progress" data-progress="10"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <span className="p800-clr">
                                                        01
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="left-review">
                                            <h3 className="p900-clr fw-normal mb-2">
                                                Add Your Comment
                                            </h3>
                                            <form action="#">
                                                <div className="d-flex align-items-center gap-3">
                                                    <span className="cmn-name p900-clr fw-medium">
                                                        Ratting
                                                    </span>
                                                    <div className="ratting mt-3 d-flex align-items-center gap-2">
                                                        <i className="fa-solid fa-star p2-clr"></i>
                                                        <i className="fa-solid fa-star p2-clr"></i>
                                                        <i className="fa-solid fa-star p2-clr"></i>
                                                        <i className="fa-solid fa-star p2-clr"></i>
                                                        <i className="fa-solid fa-star"></i>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center gap-3">
                                                    <span className="cmn-name p900-clr fw-medium">
                                                        Name
                                                    </span>
                                                    <input type="text" placeholder="Your Name"/>
                                                </div>
                                                <div className="d-flex align-items-center gap-3">
                                                    <span className="cmn-name p900-clr fw-medium">
                                                        Address
                                                    </span>
                                                    <input type="text" placeholder="Your Address"/>
                                                </div>
                                                <div className="d-flex align-items-center gap-3">
                                                    <span className="cmn-name p900-clr fw-medium">
                                                        Review
                                                    </span>
                                                    <textarea name="comment" placeholder="Message"></textarea>
                                                </div>
                                                <div className="d-flex align-items-center gap-3">
                                                    <span className="cmn-name p900-clr fw-medium">
                                                        
                                                    </span>
                                                    <button type="button" className="cmn-btn round100">
                                                        Add Review
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                        <form action="#" className=""></form>
                                    </div>
                                    <div className="ratting d-flex align-items-center gap-2 mb-20">
                                        <i className="fa-solid fa-star p2-clr"></i>
                                        <i className="fa-solid fa-star p2-clr"></i>
                                        <i className="fa-solid fa-star p2-clr"></i>
                                        <i className="fa-solid fa-star p2-clr"></i>
                                        <i className="fa-solid fa-star p2-clr"></i>
                                    </div>
                                    <p className="p800-clr">
                                        Ecommerce is the buying and selling of goods and services over the internet. It revolutionizes the way businesses operate, providing convenience and access to a global market. Ecommerce platforms 
                                    </p>
                                </div>
                            </div>
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
                                <img src="../src/assets/img/element/get-element.png" alt="img" className="d-md-block d-none"/>
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
                                <img src="../src/assets/img/element/sun-element.png" alt="img"
                                    className="sun-element d-xl-block d-none"/>
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
                                    <img src="../src/assets/img/logo/logo-light.png" alt="logo-img"/>
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
                                <img src="../src/assets/img/footer/ln1.png" alt="img"/>
                                <img src="../src/assets/img/footer/ln2.png" alt="img"/>
                                <img src="../src/assets/img/footer/ln3.png" alt="img"/>
                                <img src="../src/assets/img/footer/ln4.png" alt="img"/>
                                <img src="../src/assets/img/footer/ln5.png" alt="img"/>
                                <img src="../src/assets/img/footer/ln6.png" alt="img"/>
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
                        &copy; theme_ocean 2024. All Rights Reserved
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
)}