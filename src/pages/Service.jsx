export default function Service() {
  return (
    <>
      {/* <!-- Preloader Start --> */}
      <div id="preloader" className="preloader">
        <div className="box d-grid gap-4">
          <span className="man-pre m-auto">
            <img src="../src/assets/img/banner/preloader.png" alt="img" />
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
                    <img
                      src="../src/assets/img/logo/favcion.png"
                      alt="logo-img"
                    />
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
                  Financial planners help people to knowledge in about how to
                  invest and save their moneye the mos efficient way in to
                  eve.planners Financial planners help people to my destin
                  knowledge in about
                </p>
                <h4>Contact Info</h4>
                <ul>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon">
                      <i className="fal fa-map-marker-alt"></i>
                    </div>
                    <div className="offcanvas__contact-text">
                      <a target="_blank" href="#">
                        Us 1216, road 45 house of street
                      </a>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="fal fa-envelope"></i>
                    </div>
                    <div className="offcanvas__contact-text">
                      <a href="mailto:demo23yourmail.com">
                        <span className="mailto:demo23yourmail.com">
                          demo23yourmail.com
                        </span>
                      </a>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="fal fa-clock"></i>
                    </div>
                    <div className="offcanvas__contact-text">
                      <a target="_blank" href="#">
                        Mod-friday, 06am -02pm
                      </a>
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
                  <a href="#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#">
                    <i className="fa-solid fa-x"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-youtube"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="offcanvas__overlay"></div>

      {/* <!-- Header Common Adjustment Component --> */}

      {/* <!-- Search Area Start --> */}
      <div className="search-wrap">
        <div className="search-inner">
          <i className="fas fa-times search-close" id="search-close"></i>
          <div className="search-cell">
            <form method="get">
              <div className="search-field-holder">
                <input
                  type="search"
                  className="main-search-input"
                  placeholder="Search..."
                />
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
                Services
              </h1>
              <ul className="bread-listing">
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li>
                  <i className="fa-solid fa-angle-right"></i>
                </li>
                <li>Services</li>
              </ul>
            </div>
            <div className="bread-thumb d-sm-block d-none">
              <img src="../src/assets/img/about/tt-slice.png" alt="img" />
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Servicev section --> */}
      <section className="servicevm-section overflow-hidden section-padding white-bg">
        <div className="container">
          <div className="row g-xl-4 g-3 justify-content-center">
            <div
              className="col-xl-4 col-lg-4 col-md-6 col-sm-6 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="service-itemsv02 service-style03">
                <div className="thumb w-100">
                  <img
                    src="../src/assets/img/service/srp1.jpg"
                    alt="img"
                    className="w-100 mimg"
                  />
                </div>
                <div className="content">
                  <a href="service-details.html" className="title">
                    Green Grow Solutions
                  </a>
                  <img src="../src/assets/img/icon/sr1.svg" alt="icon" />
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-4 col-md-6 col-sm-6 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="service-itemsv02 service-style03">
                <div className="thumb w-100">
                  <img
                    src="../src/assets/img/service/srp2.jpg"
                    alt="img"
                    className="w-100 mimg"
                  />
                </div>
                <div className="content">
                  <a href="service-details.html" className="title">
                    Harvest Tech to Farm Service
                  </a>
                  <img src="../src/assets/img/icon/sr2.svg" alt="icon" />
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-4 col-md-6 col-sm-6 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="service-itemsv02 service-style03">
                <div className="thumb w-100">
                  <img
                    src="../src/assets/img/service/srp3.jpg"
                    alt="img"
                    className="w-100 mimg"
                  />
                </div>
                <div className="content">
                  <a href="service-details.html" className="title">
                    AgriPro is the Consulting
                  </a>
                  <img src="../src/assets/img/icon/sr3.svg" alt="icon" />
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-4 col-md-6 col-sm-6 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="service-itemsv02 service-style03">
                <div className="thumb w-100">
                  <img
                    src="../src/assets/img/service/srp4.jpg"
                    alt="img"
                    className="w-100 mimg"
                  />
                </div>
                <div className="content">
                  <a href="service-details.html" className="title">
                    HarvestTech the best farm
                  </a>
                  <img src="../src/assets/img/icon/sr4.svg" alt="icon" />
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-4 col-md-6 col-sm-6 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="service-itemsv02 service-style03">
                <div className="thumb w-100">
                  <img
                    src="../src/assets/img/service/srp5.jpg"
                    alt="img"
                    className="w-100 mimg"
                  />
                </div>
                <div className="content">
                  <a href="service-details.html" className="title">
                    AgriTech to the a Innovations
                  </a>
                  <img src="../src/assets/img/icon/sr5.svg" alt="icon" />
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-4 col-md-6 col-sm-6 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="service-itemsv02 service-style03">
                <div className="thumb w-100">
                  <img
                    src="../src/assets/img/service/srp6.jpg"
                    alt="img"
                    className="w-100 mimg"
                  />
                </div>
                <div className="content">
                  <a href="service-details.html" className="title">
                    Crop Agriculture Solutions
                  </a>
                  <img src="../src/assets/img/icon/sr6.svg" alt="icon" />
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
                    <img
                      src="../src/assets/img/element/get-element.png"
                      alt="img"
                      className="d-md-block d-none"
                    />
                  </div>
                  <div className="subs-contentv3">
                    <h2>
                      Get Update <span>Subscribe</span> <br /> to Newsletter
                    </h2>
                    <form
                      action="#"
                      className="subscribe-form03 flex-xl-nowrap flex-wrap"
                    >
                      <input type="text" placeholder="Enter Your Email" />
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
                      <h5
                        className="p1-clr wow fadeInLeft"
                        data-wow-delay="0.4s"
                      >
                        Contact
                      </h5>
                      <h2>Get Touch Here</h2>
                    </div>
                    <form action="#" className="row g-xl-4 g-3">
                      <div className="col-lg-6">
                        <input type="text" placeholder="Name" />
                      </div>
                      <div className="col-lg-6">
                        <input type="email" placeholder="E-mail" />
                      </div>
                      <div className="col-lg-12">
                        <input type="text" placeholder="Subject" />
                      </div>
                      <div className="col-lg-12">
                        <textarea
                          name="message"
                          placeholder="Message"
                        ></textarea>
                      </div>
                      <div className="col-lg-6">
                        <button
                          type="submit"
                          className="cmn-btn text-capitalize"
                        >
                          Submit Now
                        </button>
                      </div>
                    </form>
                    {/* <!-- Element --> */}
                    <img
                      src="../src/assets/img/element/sun-element.png"
                      alt="img"
                      className="sun-element d-xl-block d-none"
                    />
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
              <div
                className="col-xl-4 col-lg-3 col-md-6 col-sm-6 wow fadeInUp"
                data-wow-delay=".3s"
              >
                <div className="single-footer-widget">
                  <div className="widget-head">
                    <a href="index.html" className="footer-logo">
                      <img
                        src="../src/assets/img/logo/logo-light.png"
                        alt="logo-img"
                      />
                    </a>
                  </div>
                  <div className="footer-content">
                    <p className="pre-pragraph">
                      Lorem ipsum dolor amet consectetur <br /> sell adipis elit
                      phase nibh ellentes
                    </p>
                    <div className="social-wrapper social-empact d-flex align-items-center">
                      <a href="#" className="white-clr">
                        <i className="white-clr fab fa-facebook-f"></i>
                      </a>
                      <a href="#" className="white-clr">
                        <svg
                          width="11"
                          height="12"
                          viewBox="0 0 11 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6.55735 5.16157L10.5183 0.65625H9.57971L6.14039 4.56816L3.39341 0.65625H0.225098L4.37906 6.57174L0.225098 11.2963H1.16378L4.79579 7.16516L7.6968 11.2963H10.8651L6.55712 5.16157H6.55735ZM5.2717 6.62386L4.85082 6.03481L1.502 1.34768H2.94375L5.64629 5.13034L6.06717 5.71939L9.58015 10.6363H8.13839L5.2717 6.62409V6.62386Z"
                            fill="white-clr"
                          />
                        </svg>
                      </a>
                      <a href="#" className="white-clr">
                        <i className="white-clr fa-brands fa-linkedin-in"></i>
                      </a>
                      <a href="#" className="white-clr">
                        <i className="white-clr fa-brands fa-pinterest-p"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-2 col-lg-2 col-md-6 col-sm-6 wow fadeInUp"
                data-wow-delay=".5s"
              >
                <div className="single-footer-widget">
                  <div className="widget-head">
                    <h3 className="white-clr">Service</h3>
                  </div>
                  <ul className="list-area">
                    <li>
                      <a href="about.html">About Us</a>
                    </li>
                    <li>
                      <a href="service.html">Service</a>
                    </li>
                    <li>
                      <a href="faq.html">FAQ</a>
                    </li>
                    <li>
                      <a href="blog.html">Blog Ang News</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="col-xl-3 col-lg-3 col-md-6 col-sm-6 wow fadeInUp"
                data-wow-delay=".5s"
              >
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
                        1901 Thornridge Cir. Shiloh, <br /> Hawaii 81063
                      </a>
                    </li>
                    <li>
                      <a href="#" className="link">
                        <i className="fa-solid fa-phone"></i>
                        (270) 555-0117 <br />
                        (270) 555-0118
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="col-xl-3 col-lg-3 col-md-6 col-sm-6 wow fadeInUp"
                data-wow-delay=".5s"
              >
                <div className="single-footer-widget">
                  <div className="widget-head">
                    <h3 className="white-clr">Newslatter</h3>
                  </div>
                  <div className="latest-thumwrap">
                    <img src="../src/assets/img/footer/ln1.png" alt="img" />
                    <img src="../src/assets/img/footer/ln2.png" alt="img" />
                    <img src="../src/assets/img/footer/ln3.png" alt="img" />
                    <img src="../src/assets/img/footer/ln4.png" alt="img" />
                    <img src="../src/assets/img/footer/ln5.png" alt="img" />
                    <img src="../src/assets/img/footer/ln6.png" alt="img" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="footer-wrapper footer-wrapperv01 d-md-flex d-grid gap-md-0 gap-2 align-items-center justify-content-md-between justify-content-center text-md-start text-center">
              <p className="wow fadeInLeft color-2" data-wow-delay=".3s">
                &copy; theme_ocean 2024. All Rights Reserved
              </p>
              <ul className="footer-menu wow fadeInRight" data-wow-delay=".5s">
                <li>
                  <a href="contact.html">Trams & Condition</a>
                </li>
                <li>
                  <a href="contact.html">Privacy Policy</a>
                </li>
                <li>
                  <a href="contact.html">Contact Us</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
