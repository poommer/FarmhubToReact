export function Homepage_1() {
  return (
    <>
      {/* <!-- Preloader Start --> */}
      <div id="preloader" className="preloader">
        <div className="box d-grid gap-4">
          <span className="man-pre m-auto">
            <img src="src/assets/img/banner/preloader.png" alt="img" />
          </span>
          <span className="p1-clr fz-40 fw-bold text-center d-block">
            FarmHub
          </span>
        </div>
      </div>

      {/* <!-- Scroll To Top Start--> */}
      <button
        className="scrollToTop d-none d-md-flex d-center"
        aria-label="scroll Bar Button"
      >
        <i className="mat-icon fas fa-angle-double-up"></i>
      </button>
      {/* <!-- Scroll To Top End --> */}

      {/* <!-- Offcanvas Area Start --> */}
      <div className="fix-area">
        <div className="offcanvas__info">
          <div className="offcanvas__wrapper">
            <div className="offcanvas__content">
              <div className="offcanvas__top mb-4 d-flex justify-content-between align-items-center">
                <div className="offcanvas__logo">
                  <a href="index.html">
                    <img src="src/assets/img/logo/favcion.png" alt="logo-img" />
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
                    <i className="fab fa-twitter"></i>
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

      {/* <!-- Hero Section Start --> */}
      <section className="banner-section style-v1 overflow-hidden">
        <div className="container">
          <div className="row g-4 align-items-center position-relative">
            <div className="col-lg-7 col-md-7 col-sm-9">
              <div className="hero-contentv01">
                <h1 className="wow fadeInUp" data-wow-delay="0.4s">
                  Plowing the earth
                  <span className="harves">harvesting hope</span>
                </h1>
                <p className="wow fadeInUp" data-wow-delay="0.6s">
                  Education is the key to studeny Unlock your potential through
                  learning. <br /> Expand your horizons with the most
                </p>
                <ul className="hero-list wow fadeInUp" data-wow-delay="0.8s">
                  <li>
                    <i className="fa-solid fa-angles-right"></i>
                    Crops of opportunity fields of dreams
                  </li>
                  <li>
                    <i className="fa-solid fa-angles-right"></i>
                    Where innovation meets cultivation
                  </li>
                </ul>
                <a
                  href="about.html"
                  className="cmn-btn round100 wow fadeInUp"
                  data-wow-delay="0.9s"
                >
                  View More
                  <i className="fa-solid fa-arrow-right"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-5 col-md-5 col-sm-8">
              <div
                className="hero-thumbv01 position-relative wow fadeInDown"
                data-wow-delay="0.5s"
              >
                <img
                  src="src/assets/img/banner/hero1.png"
                  alt="img"
                  className="mimg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- About Version V01 --> */}
      <section className="about-section style-v01 section-padding white-bg">
        <div className="container">
          <div className="row g-4 align-items-center justify-content-center">
            <div className="col-lg-6 col-md-6 col-sm-8 order-md-0 order-1">
              <div className="about-thumv01 position-relative">
                <img
                  src="src/assets/img/about/choose-man.png"
                  alt="img"
                  className="mimg"
                />
                {/* <!-- Elemennt --> */}
                <img
                  src="src/assets/img/about/f-food.png"
                  alt="img"
                  className="f-food"
                />
                <img
                  src="src/assets/img/about/l-food.png"
                  alt="img"
                  className="l-food wow fadeInLeft"
                  data-wow-delay=".5s"
                />
                <img
                  src="src/assets/img/about/t-food.png"
                  alt="img"
                  className="t-food wow fadeInLeft"
                  data-wow-delay=".7s"
                />
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
                    Agriculture and farming are essential industries that
                    involve the cultivation of crops, raising of livestock, and
                    production
                  </p>
                  <div className="progress_bar d-grid gap-xxl-4 gap-4">
                    <div className="progress_bar_item">
                      <div
                        className="per-title d-flex align-items-center justify-content-between"
                        style={{ width: "70%;" }}
                      >
                        <div className="item_label p900-clr">
                          Pure And Organic
                        </div>
                        <div className="item_value p900-clr">0%</div>
                      </div>
                      <div className="item_bar">
                        <div className="progress" data-progress="70"></div>
                      </div>
                    </div>
                    <div className="progress_bar_item">
                      <div
                        className="per-title d-flex align-items-center justify-content-between"
                        style={{ width: "80%;" }}
                      >
                        <div className="item_label p900-clr">Healthy Food</div>
                        <div className="item_value p900-clr">0%</div>
                      </div>
                      <div className="item_bar">
                        <div className="progress" data-progress="80"></div>
                      </div>
                    </div>
                  </div>
                  <a
                    href="about.html"
                    className="cmn-btn round100 cmn-primary2"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Gallery Section -->> */}
      <section className="gallery-section p100-bg section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xxl-6 col-xl-7 col-md-8 col-sm-11">
              <div className="section-title mb-60 text-center">
                <h5 className="p1-clr wow fadeInLeft" data-wow-delay="0.4s">
                  OUR GALLARY
                </h5>
                <h2 className="wow fadeInDown" data-wow-delay=".3s">
                  Bringing nature's bounty to your plate
                </h2>
              </div>
            </div>
          </div>
          {/* <!-- Body --> */}
          <div className="row g-lg-4 g-3 justify-content-center">
            <div className="col-md-7 col-sm-7">
              <a
                href="assets/img/gallery/gl1.jpg"
                className="gallery-com-thumb first-item img-popup w-100 round20"
              >
                <img
                  src="src/assets/img/gallery/gl1.jpg"
                  alt="img"
                  className="round20"
                />
              </a>
            </div>
            <div className="col-md-5 col-sm-5">
              <a
                href="assets/img/gallery/gl2.jpg"
                className="gallery-com-thumb first-item img-popup w-100 round20"
              >
                <img
                  src="src/assets/img/gallery/gl2.jpg"
                  alt="img"
                  className="round20"
                />
              </a>
            </div>
            <div className="d-flex flex-sm-nowrap flex-wrap justify-content-between gap-lg-4 gap-3">
              <a
                href="assets/img/gallery/gl3.jpg"
                className="gallery-com-thumb secound img-popup w-100 round20"
              >
                <img
                  src="src/assets/img/gallery/gl3.jpg"
                  alt="img"
                  className="round20"
                />
              </a>
              <a
                href="assets/img/gallery/gl4.jpg"
                className="gallery-com-thumb secound img-popup w-100 round20"
              >
                <img
                  src="src/assets/img/gallery/gl4.jpg"
                  alt="img"
                  className="round20"
                />
              </a>
              <div className="d-grid gap-lg-4 gap-3">
                <a
                  href="assets/img/gallery/gl5.jpg"
                  className="gallery-com-thumb thard img-popup w-100 round20"
                >
                  <img
                    src="src/assets/img/gallery/gl5.jpg"
                    alt="img"
                    className="round20"
                  />
                </a>
                <a href="gallery.html" className="cmn-btn d-center">
                  View all Project
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Counter Section --> */}
      <section className="counter-section position-relative">
        <div className="container">
          <div className="counter-version-wrapv1 d-flex align-items-center justify-content-between gap-4">
            <div className="counter-items">
              <h2>
                <span className="count">200</span>+
              </h2>
              <div className="cont-bottom">
                <img src="src/assets/img/icon/count1.svg" alt="img" />
                <p>Team member</p>
              </div>
            </div>
            <div className="counter-items">
              <h2>
                <span className="count">300</span>k+
              </h2>
              <div className="cont-bottom">
                <img src="src/assets/img/icon/count2.svg" alt="img" />
                <p>Winning award</p>
              </div>
            </div>
            <div className="counter-items">
              <h2>
                <span className="count">100</span>k+
              </h2>
              <div className="cont-bottom">
                <img src="src/assets/img/icon/count3.svg" alt="img" />
                <p>Complete project</p>
              </div>
            </div>
            <div className="counter-items">
              <h2>
                <span className="count">900</span>+
              </h2>
              <div className="cont-bottom">
                <img src="src/assets/img/icon/count4.svg" alt="img" />
                <p>Client review</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Service section --> */}
      <section className="service-section white-bg space-top">
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
            <div
              className="col-lg-4 col-md-6 col-sm-6 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="service-itemsv1">
                <img
                  src="src/assets/img/icon/count1.svg"
                  alt="svg"
                  className="icons"
                />
                <div className="content">
                  <a href="service-details.html" className="title">
                    Green Grow
                  </a>
                  <p>Agriculture and farming are essential industries</p>
                  <a href="service-details.html" className="arrows">
                    Read More <i className="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-6 wow fadeInUp"
              data-wow-delay=".5s"
            >
              <div className="service-itemsv1">
                <img
                  src="src/assets/img/icon/wheat-sesh.svg"
                  alt="svg"
                  className="icons"
                />
                <div className="content">
                  <a href="service-details.html" className="title">
                    Agri Consulting
                  </a>
                  <p>Agriculture and farming are essential industries</p>
                  <a href="service-details.html" className="arrows">
                    Read More <i className="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-6 wow fadeInUp"
              data-wow-delay=".7s"
            >
              <div className="service-itemsv1">
                <img
                  src="src/assets/img/icon/smart-flower.svg"
                  alt="svg"
                  className="icons"
                />
                <div className="content">
                  <a href="service-details.html" className="title">
                    Farm Smart
                  </a>
                  <p>Agriculture and farming are essential industries</p>
                  <a href="service-details.html" className="arrows">
                    Read More <i className="fa-solid fa-arrow-right"></i>
                  </a>
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
              <div
                className="testimonial-thumbv1 w-100 wow fadeInDown"
                data-wow-delay=".4s"
              >
                <img
                  src="src/assets/img/testimonial/testimonial.png"
                  alt="img"
                  className="w-100"
                />
              </div>
            </div>
            <div className="col-lg-8 col-md-8">
              <div className="testimonial-common-wrapper position-relative ps-xxl-5 ps-lg-4">
                <div className="swiper testimonial-slidewrap01">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <div className="testimonail-common-items">
                        <div className="ratting d-flex align-items-center justify-content-between">
                          <img
                            src="src/assets/img/icon/quote-left.svg"
                            alt="icon"
                          />
                          <div className="stars">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                          </div>
                        </div>
                        <p>
                          Agriculture and farming are essential industries that
                          involve the cultivation of crops, raising of
                          livestock, and production a of food and other
                          agricultural products Agriculture farming are
                          essential industries involve cultivation
                        </p>
                        <div className="review-man">
                          <img
                            src="src/assets/img/testimonial/re1.png"
                            alt="img"
                          />
                          <div className="cont">
                            <h3>Haney Cooper</h3>
                            <span>Ceo</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="testimonail-common-items">
                        <div className="ratting d-flex align-items-center justify-content-between">
                          <img
                            src="src/assets/img/icon/quote-left.svg"
                            alt="icon"
                          />
                          <div className="stars">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                          </div>
                        </div>
                        <p>
                          Agriculture and farming are essential industries that
                          involve the cultivation of crops, raising of
                          livestock, and production a of food and other
                          agricultural products Agriculture farming are
                          essential industries involve cultivation
                        </p>
                        <div className="review-man">
                          <img
                            src="src/assets/img/testimonial/re1.png"
                            alt="img"
                          />
                          <div className="cont">
                            <h3>Haney Cooper</h3>
                            <span>Ceo</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="testimonail-common-items">
                        <div className="ratting d-flex align-items-center justify-content-between">
                          <img
                            src="src/assets/img/icon/quote-left.svg"
                            alt="icon"
                          />
                          <div className="stars">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                          </div>
                        </div>
                        <p>
                          Agriculture and farming are essential industries that
                          involve the cultivation of crops, raising of
                          livestock, and production a of food and other
                          agricultural products Agriculture farming are
                          essential industries involve cultivation
                        </p>
                        <div className="review-man">
                          <img
                            src="src/assets/img/testimonial/re1.png"
                            alt="img"
                          />
                          <div className="cont">
                            <h3>Haney Cooper</h3>
                            <span>Ceo</span>
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
        {/* <!-- Element --> */}
        <img
          src="src/assets/img/element/flower-badge.png"
          alt="img"
          className="flower-testimonial d-sm-block d-none"
        />
      </section>

      {/* <!-- Service section --> */}
      <section className="service-feature-section white-bg space-bottom">
        <div className="filter-mixtup">
          <div className="container">
            <div className="row g-4 justify-content-between align-items-end mb-60">
              <div className="col-xxl-5 col-xl-7">
                <div className="section-title">
                  <h5 className="p1-clr wow fadeInLeft" data-wow-delay="0.4s">
                    Our Future
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
                  <img
                    src="src/assets/img/gallery/feature1.jpg"
                    alt="img"
                    className="f-thumb"
                  />
                  <div className="content">
                    <a href="product-details.html" className="title">
                      Tomato
                    </a>
                    <p>Agriculture farming are the essential</p>
                    <h5>$120</h5>
                    <a href="product-details.html" className="add-tocart">
                      Add To Chart
                    </a>
                  </div>
                </div>
              </div>
              <div className="mix category-b" data-order="2">
                <div className="feature-itemsv1">
                  <img
                    src="src/assets/img/gallery/feature2.jpg"
                    alt="img"
                    className="f-thumb"
                  />
                  <div className="content">
                    <a href="product-details.html" className="title">
                      Meat
                    </a>
                    <p> Agriculture farming are the essential</p>
                    <h5>$80</h5>
                    <a href="product-details.html" className="add-tocart">
                      Add To Chart
                    </a>
                  </div>
                </div>
              </div>
              <div className="mix category-c" data-order="3">
                <div className="feature-itemsv1">
                  <img
                    src="src/assets/img/gallery/feature3.jpg"
                    alt="img"
                    className="f-thumb"
                  />
                  <div className="content">
                    <a href="product-details.html" className="title">
                      Blossomed
                    </a>
                    <p>Agriculture farming are the essential</p>
                    <h5>$45</h5>
                    <a href="product-details.html" className="add-tocart">
                      Add To Chart
                    </a>
                  </div>
                </div>
              </div>
              <div className="mix category-a" data-order="4">
                <div className="feature-itemsv1">
                  <img
                    src="src/assets/img/gallery/feature4.jpg"
                    alt="img"
                    className="f-thumb"
                  />
                  <div className="content">
                    <a href="product-details.html" className="title">
                      Egg
                    </a>
                    <p>Agriculture farming are the essential</p>
                    <h5>$44</h5>
                    <a href="product-details.html" className="add-tocart">
                      Add To Chart
                    </a>
                  </div>
                </div>
              </div>
              <div className="mix category-a category-c" data-order="5">
                <div className="feature-itemsv1">
                  <img
                    src="src/assets/img/gallery/feature5.jpg"
                    alt="img"
                    className="f-thumb"
                  />
                  <div className="content">
                    <a href="product-details.html" className="title">
                      Corning
                    </a>
                    <p>Agriculture farming are the essential</p>
                    <h5>$80</h5>
                    <a href="product-details.html" className="add-tocart">
                      Add To Chart
                    </a>
                  </div>
                </div>
              </div>
              <div className="mix category-b" data-order="6">
                <div className="feature-itemsv1">
                  <img
                    src="src/assets/img/gallery/feature6.jpg"
                    alt="img"
                    className="f-thumb"
                  />
                  <div className="content">
                    <a href="product-details.html" className="title">
                      Kales
                    </a>
                    <p>Agriculture farming are the essential</p>
                    <h5>$45</h5>
                    <a href="product-details.html" className="add-tocart">
                      Add To Chart
                    </a>
                  </div>
                </div>
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
                <h2
                  className="wow fadeInDown white-clr mb-24"
                  data-wow-delay=".3s"
                >
                  Nourishing world from seed to table
                </h2>
                <p className="white-clr wow fadeInDown" data-wow-delay=".4s">
                  Agriculture and farming are essential industries that involve
                  the cultivation of crops,raising of livestock, and production
                  of food.
                </p>
              </div>
              <div className="row g-xl-6 g-4">
                <div className="col-sm-6 wow fadeInDown" data-wow-delay=".4s">
                  <div className="who-box">
                    <div className="icon d-center">
                      <img
                        src="src/assets/img/icon/hand-planp900.svg"
                        alt="icon"
                      />
                    </div>
                    <a href="about.html" className="title">
                      Growing stron <br /> a feeding
                    </a>
                  </div>
                </div>
                <div className="col-sm-6 wow fadeInDown" data-wow-delay=".6s">
                  <div className="who-box">
                    <div className="icon d-center">
                      <img
                        src="src/assets/img/icon/wheath-p900.svg"
                        alt="icon"
                      />
                    </div>
                    <a href="about.html" className="title">
                      Taking care of <br /> the Earth
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="who-contact-wrap">
                <h3 className="white-clr">Leave message</h3>
                <form action="#" className="row g-xl-4 g-3">
                  <div className="col-lg-6">
                    <input type="text" placeholder="Name" />
                  </div>
                  <div className="col-lg-6">
                    <input type="email" placeholder="E-mail" />
                  </div>
                  <div className="col-lg-6">
                    <input type="number" placeholder="Your Number" />
                  </div>
                  <div className="col-lg-6">
                    <select name="select">
                      <option value="1">Your Area</option>
                      <option value="1">Us</option>
                      <option value="1">Uk</option>
                      <option value="1">Turky</option>
                    </select>
                  </div>
                  <div className="col-lg-12">
                    <textarea
                      name="message"
                      rows="4"
                      placeholder="Message"
                    ></textarea>
                  </div>
                  <div className="col-lg-12">
                    <button
                      type="submit"
                      className="cmn-btn cmn-primary2 text-capitalize"
                    >
                      Submit Now
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Element --> */}
        <img
          src="src/assets/img/element/who-element.png"
          alt="img"
          className="who-element"
        />
      </section>

      {/* <!-- Feature-video --> */}
      <div className="feature-video">
        <div className="container">
          <div className="feature-video-wrap w-100">
            <img
              src="src/assets/img/about/feature-vid.jpg"
              alt="img"
              className="w-100"
            />
            <a
              href="https://www.youtube.com/watch?v=ZP1XyLYraAA"
              className="video-cmn d-center video-popup"
            >
              <i className="fa-solid fa-play"></i>
            </a>
          </div>
        </div>
      </div>

      {/* <!-- Blog section --> */}
      <section className="blog-section overflow-hidden blog-stylev1 white-bg space-top">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xxl-6 col-xl-7 col-md-8 col-sm-11">
              <div className="section-title mb-60 text-center">
                <h5 className="p1-clr wow fadeInLeft" data-wow-delay="0.4s">
                  OUR BLOGS
                </h5>
                <h2 className="wow fadeInDown" data-wow-delay=".3s">
                  Cultivating a sustainable future for all
                </h2>
              </div>
            </div>
          </div>
          {/* <!-- Body --> */}
          <div className="row g-xl-4 g-3 justify-content-center">
            <div
              className="col-lg-4 col-md-6 col-sm-11 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="blog-itemsv1">
                <div className="thumb w-100">
                  <img
                    src="src/assets/img/blog/blog1.jpg"
                    alt="img"
                    className="w-100"
                  />
                  <div className="dates">22 jan</div>
                </div>
                <div className="content">
                  <ul className="comment-inner">
                    <li>
                      <a href="#">
                        <i className="fa-regular fa-comments"></i> Comments (05)
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-regular fa-user"></i> By admin
                      </a>
                    </li>
                  </ul>
                  <a href="blog-details.html" className="title">
                    From Farm to Table an Agriculture
                  </a>
                  <p>
                    Agriculture and farming are essential industries that
                    involve
                  </p>
                  <a href="blog-details.html" className="arrows">
                    Read More <i className="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-11 wow fadeInUp"
              data-wow-delay=".5s"
            >
              <div className="blog-itemsv1">
                <div className="thumb w-100">
                  <img
                    src="src/assets/img/blog/blog2.jpg"
                    alt="img"
                    className="w-100"
                  />
                  <div className="dates">22 jan</div>
                </div>
                <div className="content">
                  <ul className="comment-inner">
                    <li>
                      <a href="#">
                        <i className="fa-regular fa-comments"></i> Comments (05)
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-regular fa-user"></i> By admin
                      </a>
                    </li>
                  </ul>
                  <a href="blog-details.html" className="title">
                    Farm fresh goodness for alle
                  </a>
                  <p>
                    Agriculture and farming are essential industries that
                    involve
                  </p>
                  <a href="blog-details.html" className="arrows">
                    Read More <i className="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-11 wow fadeInUp"
              data-wow-delay=".7s"
            >
              <div className="blog-itemsv1">
                <div className="thumb w-100">
                  <img
                    src="src/assets/img/blog/blog3.jpg"
                    alt="img"
                    className="w-100"
                  />
                  <div className="dates">22 jan</div>
                </div>
                <div className="content">
                  <ul className="comment-inner">
                    <li>
                      <a href="#">
                        <i className="fa-regular fa-comments"></i> Comments (05)
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-regular fa-user"></i> By admin
                      </a>
                    </li>
                  </ul>
                  <a href="blog-details.html" className="title">
                    Discover Potential of Agriculture
                  </a>
                  <p>
                    Agriculture and farming are essential industries that
                    involve
                  </p>
                  <a href="blog-details.html" className="arrows">
                    Read More <i className="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Element --> */}
        <img
          src="src/assets/img/element/carrort-elemet-line.png"
          alt="img"
          className="carrot-left"
        />
        <img
          src="src/assets/img/element/carrot-element-cricle.png"
          alt="img"
          className="carrot-right d-md-block d-none"
        />
      </section>

      {/* <!--<< Sponsor Branding Start >>--> */}
      <section className="sponsor-branding-section space-top">
        <div className="container">
          <div className="swiper brand-slider">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="brand-image">
                  <img src="src/assets/img/sponsor/sp1.png" alt="img" />
                </div>
              </div>
              <div className="swiper-slide">
                <div className="brand-image">
                  <img src="src/assets/img/sponsor/sp2.png" alt="img" />
                </div>
              </div>
              <div className="swiper-slide">
                <div className="brand-image">
                  <img src="src/assets/img/sponsor/sp3.png" alt="img" />
                </div>
              </div>
              <div className="swiper-slide">
                <div className="brand-image">
                  <img src="src/assets/img/sponsor/sp4.png" alt="img" />
                </div>
              </div>
              <div className="swiper-slide">
                <div className="brand-image">
                  <img src="src/assets/img/sponsor/sp5.png" alt="img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!--<< Subscribe Start >>--> */}
      <div className="subscrbie-section">
        <div className="container">
          <div className="subscribe-wrapper-v01">
            <div className="container">
              <div className="row g-4 justify-content-lg-start justify-content-between align-items-end">
                <div className="col-lg-5 col-md-5">
                  <div className="subscribe-thumb">
                    <img
                      src="src/assets/img/footer/subscribe.png"
                      alt="img"
                      className="w-100"
                    />
                  </div>
                </div>
                <div className="col-lg-1 d-lg-block d-none"></div>
                <div className="col-lg-5 col-md-6">
                  <div className="subscribe-content">
                    <h2>Subscribe to our newsletter</h2>
                    <p>
                      It is a long established fact that a reader will be
                      distracted
                    </p>
                    <form action="#" className="subscribe-form">
                      <input type="text" placeholder="Enter Your Email" />
                      <button type="submit" className="d-center">
                        <svg
                          width="18"
                          height="17"
                          viewBox="0 0 18 17"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M16.9688 2.15625L14.9688 15.125C14.9375 15.4375 14.75 15.7188 14.4688 15.875C14.3125 15.9375 14.1562 16 13.9688 16C13.8438 16 13.7188 15.9688 13.5938 15.9062L9.78125 14.3125L8.1875 16.6875C8.0625 16.9062 7.84375 17 7.625 17C7.28125 17 7 16.7188 7 16.375V13.375C7 13.125 7.0625 12.9062 7.1875 12.75L14 4L4.8125 12.2812L1.59375 10.9375C1.25 10.7812 1 10.4688 1 10.0625C0.96875 9.625 1.15625 9.3125 1.5 9.125L15.5 1.15625C15.8125 0.96875 16.25 0.96875 16.5625 1.1875C16.875 1.40625 17.0312 1.78125 16.9688 2.15625Z"
                            fill="#1F4E3D"
                          />
                        </svg>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!--<< Footer Section Start >>--> */}
      <footer className="footer-section overflow-hidden position-relative footer-style1">
        <div className="footer-widgets-wrapper footer-widget-wrapperv01">
          <div className="container">
            <div className="row g-md-4 g-4 justify-content-between">
              <div
                className="col-xl-4 col-lg-3 col-md-6 col-sm-6 wow fadeInUp"
                data-wow-delay=".3s"
              >
                <div className="single-footer-widget">
                  <div className="widget-head">
                    <a href="index.html" className="footer-logo">
                      <img
                        src="src/assets/img/logo/logo-light.png"
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
                className="col-xl-3 col-lg-3 col-md-6 col-sm-6 wow fadeInUp"
                data-wow-delay=".5s"
              >
                <div className="single-footer-widget">
                  <div className="widget-head">
                    <h3 className="white-clr">Service</h3>
                  </div>
                  <ul className="list-area">
                    <li>
                      <a href="#">
                        <i className="fa-solid fa-angle-right"></i>
                        Success Steps Education
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-solid fa-angle-right"></i>
                        Pathway to Progress
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-solid fa-angle-right"></i>
                        Skill Builders Academy
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-solid fa-angle-right"></i>
                        Academic Achievers
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="col-xl-2 col-lg-3 col-md-6 col-sm-6 wow fadeInUp"
                data-wow-delay=".5s"
              >
                <div className="single-footer-widget">
                  <div className="widget-head">
                    <h3 className="white-clr">Link</h3>
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
        {/* <!-- Element --> */}
        <img
          src="src/assets/img/footer/footer-wheat.png"
          alt="img"
          className="footer-wheat position-absolute"
        />
        {/* <!-- Element --> */}
      </footer>
    </>
  );
}

export function Homepage_2() {
  return (
    <>
      <div id="preloader" className="preloader">
        <div className="box d-grid gap-4">
          <span className="man-pre m-auto">
            <img src="src/assets/img/banner/preloader.png" alt="img" />
          </span>
          <span className="p1-clr fz-40 fw-bold text-center d-block">
            FarmHub
          </span>
        </div>
      </div>

      <button
        className="scrollToTop d-none d-md-flex d-center"
        aria-label="scroll Bar Button"
      >
        <i className="mat-icon fas fa-angle-double-up"></i>
      </button>

      <div className="fix-area">
        <div className="offcanvas__info">
          <div className="offcanvas__wrapper">
            <div className="offcanvas__content">
              <div className="offcanvas__top mb-4 d-flex justify-content-between align-items-center">
                <div className="offcanvas__logo">
                  <a href="index.html">
                    <img src="src/assets/img/logo/favcion.png" alt="logo-img" />
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
                    <i className="fab fa-twitter"></i>
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

      <div className="header-top-section style-v01 d-lg-block d-none">
        <div className="container">
          <div className="header-top-wrapper">
            <a href="#" className="location-area">
              <i className="fa-solid fa-location-dot"></i>
              2464 Royal Ln. Mesa, New Jersey 45463
            </a>
            <ul className="contact-list">
              <li>
                <a href="#">
                  <i className="fa-solid fa-phone"></i>
                  (629) 555-0129
                </a>
              </li>
              <li>
                <a href="debbie.baker@example.com" className="link">
                  <i className="fa-solid fa-envelope"></i>
                  debbie.baker@example.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <header id="header-sticky" className="header-2">
        <div className="container">
          <div className="mega-menu-wrapper">
            <div className="header-main">
              <div className="header-left">
                <div className="logo">
                  <a href="index.html" className="header-logo">
                    <img
                      src="src/assets/img/logo/logo-black.png"
                      alt="logo-img"
                    />
                  </a>
                </div>
              </div>
              <div className="header-right d-flex justify-content-end align-items-center">
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
                                    <img
                                      src="src/assets/img/header/home-1.jpg"
                                      alt="img"
                                    />
                                    <div className="demo-button">
                                      <a
                                        href="index.html"
                                        className="theme-btn p5-bg"
                                      >
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
                                    <img
                                      src="src/assets/img/header/home-2.jpg"
                                      alt="img"
                                    />
                                    <div className="demo-button">
                                      <a
                                        href="index-2.html"
                                        className="theme-btn p5-bg"
                                      >
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
                                    <img
                                      src="src/assets/img/header/home-3.jpg"
                                      alt="img"
                                    />
                                    <div className="demo-button">
                                      <a
                                        href="index-3.html"
                                        className="theme-btn p5-bg"
                                      >
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
                            <li>
                              <a href="service.html">Services</a>
                            </li>
                            <li>
                              <a href="service-details.html">
                                Services Details
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="gallery.html">
                            Projects
                            <i className="fas fa-angle-down"></i>
                          </a>
                          <ul className="submenu">
                            <li>
                              <a href="gallery.html">Gallery</a>
                            </li>
                            <li>
                              <a href="gallery-details.html">Gallery Details</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="blog.html">
                            Blog
                            <i className="fas fa-angle-down"></i>
                          </a>
                          <ul className="submenu">
                            <li>
                              <a href="blog.html">Blog</a>
                            </li>
                            <li>
                              <a href="blog-details.html">Blog Details</a>
                            </li>
                          </ul>
                        </li>
                        <li className="has-dropdown">
                          <a href="#">
                            Pages
                            <i className="fas fa-angle-down"></i>
                          </a>
                          <ul className="submenu">
                            <li>
                              <a href="about.html">About Us</a>
                            </li>
                            <li>
                              <a href="product-list.html">Product</a>
                            </li>
                            <li>
                              <a href="product-details.html">Product Details</a>
                            </li>
                            <li>
                              <a href="faq.html">Faq's</a>
                            </li>
                            <li>
                              <a href="contact.html">Contact</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="contact.html">Contact</a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
                <div className="search-adjust">
                  <a href="#0" className="search-trigger d-center">
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </a>
                  <div className="header-button d-sm-block d-none">
                    <a href="contact.html" className="cmn-btn round100">
                      Get A Quote
                      <i className="fa-solid fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
                <div className="header__hamburger d-xl-none my-auto">
                  <div className="sidebar__toggle">
                    <i className="fas fa-bars"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

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

      <section className="banner-section position-relative style-v2 overflow-hidden">
        <div className="container">
          <div className="banner-wrapperv2 position-relative">
            <div className="row g-4 align-items-center">
              <div className="col-lg-7 col-md-9">
                <div className="banner-contentv02">
                  <h5 className="wow fadeInUp" data-wow-delay="0.2s">
                    Farming for tomorrow
                  </h5>
                  <h1 className="wow fadeInUp" data-wow-delay="0.5s">
                    Farming is ours heritage{" "}
                    <span>
                      future <br /> our harvest
                    </span>
                  </h1>
                  <p className="wow fadeInUp" data-wow-delay="0.7s">
                    We have been operating for over a decade, providing
                    top-notch services to our clients and building a strong
                    track record in the industry.
                  </p>
                  <div
                    className="banner-buttonv2 wow fadeInUp"
                    data-wow-delay="1s"
                  >
                    <a
                      href="about.html"
                      className="cmn-btn round100 primary-border"
                    >
                      Read More
                      <i className="fa-solid fa-angle-right"></i>
                    </a>
                    <a href="#" className="header-help">
                      <span className="icon d-center">
                        <i className="fa-solid fa-phone"></i>
                      </span>
                      <span className="d-grid">
                        <span className="need">Need help?</span>
                        <span className="call">(808) 555-0111</span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <img
          src="src/assets/img/banner/hero-v2.png"
          alt="img"
          className="hero-v02-thumb"
        />
      </section>

      <section className="about-section style-v01 space-top pb-60 mb-3 white-bg">
        <div className="container">
          <div className="row g-4 align-items-lg-center justify-content-center">
            <div className="col-lg-6 col-md-6 col-sm-8 order-md-0 order-1">
              <div
                className="about-thumv02 position-relative w-100 wow fadeInDown"
                data-wow-delay=".3s"
              >
                <img
                  src="src/assets/img/about/choose-thumb2.png"
                  alt="img"
                  className="w-100"
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="about-contentv1">
                <div className="section-title mb-40">
                  <h5 className="p1-clr wow fadeInLeft" data-wow-delay="0.4s">
                    Why Chose Us
                  </h5>
                  <h2 className="wow fadeInDown" data-wow-delay=".3s">
                    Farming with passion the feeding purpose
                  </h2>
                  <p className="wow fadeInUp mb-lg-4 mb-3" data-wow-delay=".4s">
                    Lorem ipsum dolor sit amet consectetur. Amet lectus mi
                    ultricies dictum se facilisis sem. Imperdiet massa turpis
                    sit Lorem ipsum dolor sit amet consectetur. Amet lectus mi
                    ultricies dictum facilisis sem. Imperdiet
                  </p>
                  <ul className="about-list2">
                    <li>
                      <i className="fa-solid fa-circle-check"></i> Agriculture
                      and farming are essential industries that involve
                    </li>
                    <li>
                      <i className="fa-solid fa-circle-check"></i> Agriculture
                      and farming are essential industries that involve
                    </li>
                  </ul>
                  <a href="about.html" className="cmn-btn primary-border">
                    Read More
                    <i className="fa-solid fa-arrow-right p1-clr"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="servicev2-section overflow-hidden white-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xxl-6 col-xl-7 col-md-8 col-sm-11">
              <div className="section-title mb-60 text-center">
                <h5
                  className="p1-clr wow fadeInLeft text-uppercase"
                  data-wow-delay="0.4s"
                >
                  Our Services
                </h5>
                <h2 className="wow fadeInDown" data-wow-delay=".3s">
                  Nourishing the world from seed to table
                </h2>
              </div>
            </div>
          </div>

          <div className="row g-xl-4 g-3 justify-content-center">
            <div
              className="col-xl-4 col-lg-4 col-md-6 col-sm-6 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="service-itemsv02">
                <div className="thumb w-100">
                  <img
                    src="src/assets/img/service/service1.jpg"
                    alt="img"
                    className="w-100 mimg"
                  />
                </div>
                <div className="content">
                  <div className="iocns-box d-center">
                    <img src="src/assets/img/icon/desert.svg" alt="svg" />
                  </div>
                  <a href="service-details.html" className="title">
                    Green Grow Solutions
                  </a>
                  <p>
                    Amet lectus mi ultricies dictum facilisis sem. Imperdiet
                    massa turpis
                  </p>
                  <a href="service-details.html" className="arrows">
                    Read More <i className="fa-solid fa-angle-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-4 col-md-6 col-sm-6 wow fadeInUp"
              data-wow-delay=".5s"
            >
              <div className="service-itemsv02">
                <div className="thumb w-100">
                  <img
                    src="src/assets/img/service/service2.jpg"
                    alt="img"
                    className="w-100 mimg"
                  />
                </div>
                <div className="content">
                  <div className="iocns-box d-center">
                    <img src="src/assets/img/icon/fence.svg" alt="svg" />
                  </div>
                  <a href="service-details.html" className="title">
                    Farm Services
                  </a>
                  <p>
                    Amet lectus mi ultricies dictum facilisis sem. Imperdiet
                    massa turpis
                  </p>
                  <a href="service-details.html" className="arrows">
                    Read More <i className="fa-solid fa-angle-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-4 col-md-6 col-sm-6 wow fadeInUp"
              data-wow-delay=".7s"
            >
              <div className="service-itemsv02">
                <div className="thumb w-100">
                  <img
                    src="src/assets/img/service/service3.jpg"
                    alt="img"
                    className="w-100 mimg"
                  />
                </div>
                <div className="content">
                  <div className="iocns-box d-center">
                    <img src="src/assets/img/icon/tree.svg" alt="svg" />
                  </div>
                  <a href="service-details.html" className="title">
                    AgriPro Consulting
                  </a>
                  <p>
                    Amet lectus mi ultricies dictum facilisis sem. Imperdiet
                    massa turpis
                  </p>
                  <a href="service-details.html" className="arrows">
                    Read More <i className="fa-solid fa-angle-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="Working-section section-padding p900-bg">
        <div className="container">
          <div className="working-common-head">
            <div className="section-title">
              <h5
                className="p1-clr wow fadeInLeft text-uppercase"
                data-wow-delay="0.4s"
              >
                Work Process
              </h5>
              <h2 className="wow fadeInDown" data-wow-delay=".3s">
                Shape your garden <br /> into a work of art
              </h2>
            </div>
            <p className="working-pra wow fadeInLeft" data-wow-delay=".3s">
              Lorem ipsum dolor sit amet consectetur. Amet lectus mi ultr dictum
              se facilisis sem. Imperdiet massa turpis sit Lorem ipsu dolor sit
              am consectetur. Amet lectus mi ultricies
            </p>
          </div>
          <div className="row g-xl-4 g-3 justify-content-center position-relative mb-60">
            <div
              className="col-lg-3 col-md-6 col-sm-6 wow fadeInDown"
              data-wow-delay=".3s"
            >
              <div className="working-proces-items01">
                <h3 className="white-clr">
                  Prepare <br /> the soil
                </h3>
                <img
                  src="src/assets/img/element/step-shape.png"
                  alt="img"
                  className="step-working"
                />
                <span className="step-text">01</span>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 col-sm-6 wow fadeInDown"
              data-wow-delay=".5s"
            >
              <div className="working-proces-items01">
                <h3 className="white-clr">
                  Farm the <br /> seeds
                </h3>
                <img
                  src="src/assets/img/element/step-shape.png"
                  alt="img"
                  className="step-working"
                />
                <span className="step-text">02</span>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 col-sm-6 wow fadeInDown"
              data-wow-delay=".7s"
            >
              <div className="working-proces-items01">
                <h3 className="white-clr">
                  Water the <br /> plants
                </h3>
                <img
                  src="src/assets/img/element/step-shape.png"
                  alt="img"
                  className="step-working"
                />
                <span className="step-text">03</span>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 col-sm-6 wow fadeInDown"
              data-wow-delay=".8s"
            >
              <div className="working-proces-items01">
                <h3 className="white-clr">
                  Fertilize <br /> the Farm
                </h3>
                <img
                  src="src/assets/img/element/step-shape.png"
                  alt="img"
                  className="step-working"
                />
                <span className="step-text">04</span>
              </div>
            </div>

            <img
              src="src/assets/img/element/arro-round-top.png"
              alt="img"
              className="working-arrows-one"
            />
            <img
              src="src/assets/img/element/arro-round-bottom.png"
              alt="img"
              className="working-arrows-two d-lg-block d-none"
            />
            <img
              src="src/assets/img/element/arro-round-bottom.png"
              alt="img"
              className="working-arrows-three d-lg-block d-none"
            />
          </div>
          <p className="processs-text">
            Process depends on projects
            <a href="contact.html">
              Learn More
              <svg
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.8145 7.27931L12.75 5.21484L8.22656 9.73828C7.44531 10.5195 6.67772 11.0195 5.89844 10.2383C5.11719 9.45703 5.61719 8.69141 6.39844 7.91016L10.9219 3.38672L8.88866 1.35253C8.44528 0.909156 8.82616 0.167969 9.48241 0.167969H14.8144C15.4688 0.167969 16 0.69825 16 1.35253V6.68653C16 7.34081 15.2598 7.72363 14.8145 7.27931ZM2 14.168H12V8.28712L14 10.2871V14.168C14 15.2734 13.1055 16.168 12 16.168H2C0.894531 16.168 0 15.2734 0 14.168V4.16797C0 3.06347 0.894531 2.16797 2 2.16797H5.88088L7.88088 4.16797H2V14.168Z"
                  fill="#2AB939"
                />
              </svg>
            </a>
          </p>
        </div>

        <img
          src="src/assets/img/element/sylli.png"
          alt="img"
          className="working-slilli"
        />
        <img
          src="src/assets/img/element/green-area.png"
          alt="img"
          className="working-green"
        />
      </section>

      <section className="recent-project-section fix section-padding white-bg">
        <div className="container">
          <div className="recent-project-head d-md-flex d-grid gap-4 justify-content-between align-items-end mb-60">
            <div className="section-title">
              <h5
                className="p1-clr wow fadeInLeft text-uppercase"
                data-wow-delay="0.4s"
              >
                Recent projects
              </h5>
              <h2 className="wow fadeInDown" data-wow-delay=".3s">
                Bringing nature bounty <br /> to your plate
              </h2>
            </div>
            <div className="common-slidebtn d-flex align-items-center gap-xl-3 gap-2">
              <button className="cmn-prev1 cust-swiper">
                <i className="fa-solid fa-arrow-left"></i>
              </button>
              <button className="cmn-next1 cust-swiper active">
                <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="swiper recent-project-wrap">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="recent-project-item position-relative overflow-hidden">
                <img src="src/assets/img/blog/rp1.jpg" alt="img" />
                <a href="gallery-details.html" className="arrow">
                  <i className="fa-solid fa-angle-right"></i>
                </a>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="recent-project-item position-relative overflow-hidden">
                <img src="src/assets/img/blog/rp2.jpg" alt="img" />
                <a href="gallery-details.html" className="arrow">
                  <i className="fa-solid fa-angle-right"></i>
                </a>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="recent-project-item position-relative overflow-hidden">
                <img src="src/assets/img/blog/rp3.jpg" alt="img" />
                <a href="gallery-details.html" className="arrow">
                  <i className="fa-solid fa-angle-right"></i>
                </a>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="recent-project-item position-relative overflow-hidden">
                <img src="src/assets/img/blog/rp4.jpg" alt="img" />
                <a href="gallery-details.html" className="arrow">
                  <i className="fa-solid fa-angle-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonial-section stylev02 overflow-hidden space-top p100-bg">
        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="col-lg-6 col-md-6">
              <div className="testimonial-common-wrapper testimonial-wrapperv02 position-relative mb-40">
                <div className="section-title mb-50">
                  <h5 className="p1-clr wow fadeInLeft" data-wow-delay="0.4s">
                    Testimonial
                  </h5>
                  <h2 className="wow fadeInDown" data-wow-delay=".3s">
                    Growing strong feeding farming futures
                  </h2>
                </div>
                <div className="swiper testimonial-slidewrap01">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <div className="testimonail-common-items">
                        <div className="d-flex justify-content-between">
                          <div className="review-man">
                            <img
                              src="src/assets/img/testimonial/re2.png"
                              alt="img"
                            />
                            <div className="cont">
                              <h3>Leslie Alexander</h3>
                              <span>Nursing Assistant</span>
                            </div>
                          </div>
                          <img
                            src="src/assets/img/icon/quote-leftp2.svg"
                            alt="icon"
                            className="qute"
                          />
                        </div>
                        <div className="stars">
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                        </div>
                        <p>
                          Financial planners help people to knowledge in about
                          how to invest and save their moneye the most efficient
                          way in to eve.planners Financial planners help people
                          to my destin knowledge in about design
                        </p>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="testimonail-common-items">
                        <div className="d-flex justify-content-between">
                          <div className="review-man">
                            <img
                              src="src/assets/img/testimonial/re2.png"
                              alt="img"
                            />
                            <div className="cont">
                              <h3>Leslie Alexander</h3>
                              <span>Nursing Assistant</span>
                            </div>
                          </div>
                          <img
                            src="src/assets/img/icon/quote-leftp2.svg"
                            alt="icon"
                            className="qute"
                          />
                        </div>
                        <div className="stars">
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                        </div>
                        <p>
                          Financial planners help people to knowledge in about
                          how to invest and save their moneye the most efficient
                          way in to eve.planners Financial planners help people
                          to my destin knowledge in about design
                        </p>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="testimonail-common-items">
                        <div className="d-flex justify-content-between">
                          <div className="review-man">
                            <img
                              src="src/assets/img/testimonial/re2.png"
                              alt="img"
                            />
                            <div className="cont">
                              <h3>Leslie Alexander</h3>
                              <span>Nursing Assistant</span>
                            </div>
                          </div>
                          <img
                            src="src/assets/img/icon/quote-leftp2.svg"
                            alt="icon"
                            className="qute"
                          />
                        </div>
                        <div className="stars">
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                        </div>
                        <p>
                          Financial planners help people to knowledge in about
                          how to invest and save their moneye the most efficient
                          way in to eve.planners Financial planners help people
                          to my destin knowledge in about design
                        </p>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="testimonail-common-items">
                        <div className="d-flex justify-content-between">
                          <div className="review-man">
                            <img
                              src="src/assets/img/testimonial/re2.png"
                              alt="img"
                            />
                            <div className="cont">
                              <h3>Leslie Alexander</h3>
                              <span>Nursing Assistant</span>
                            </div>
                          </div>
                          <img
                            src="src/assets/img/icon/quote-leftp2.svg"
                            alt="icon"
                            className="qute"
                          />
                        </div>
                        <div className="stars">
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                        </div>
                        <p>
                          Financial planners help people to knowledge in about
                          how to invest and save their moneye the most efficient
                          way in to eve.planners Financial planners help people
                          to my destin knowledge in about design
                        </p>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="testimonail-common-items">
                        <div className="d-flex justify-content-between">
                          <div className="review-man">
                            <img
                              src="src/assets/img/testimonial/re2.png"
                              alt="img"
                            />
                            <div className="cont">
                              <h3>Leslie Alexander</h3>
                              <span>Nursing Assistant</span>
                            </div>
                          </div>
                          <img
                            src="src/assets/img/icon/quote-leftp2.svg"
                            alt="icon"
                            className="qute"
                          />
                        </div>
                        <div className="stars">
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                        </div>
                        <p>
                          Financial planners help people to knowledge in about
                          how to invest and save their moneye the most efficient
                          way in to eve.planners Financial planners help people
                          to my destin knowledge in about design
                        </p>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="testimonail-common-items">
                        <div className="d-flex justify-content-between">
                          <div className="review-man">
                            <img
                              src="src/assets/img/testimonial/re2.png"
                              alt="img"
                            />
                            <div className="cont">
                              <h3>Leslie Alexander</h3>
                              <span>Nursing Assistant</span>
                            </div>
                          </div>
                          <img
                            src="src/assets/img/icon/quote-leftp2.svg"
                            alt="icon"
                            className="qute"
                          />
                        </div>
                        <div className="stars">
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                        </div>
                        <p>
                          Financial planners help people to knowledge in about
                          how to invest and save their moneye the most efficient
                          way in to eve.planners Financial planners help people
                          to my destin knowledge in about design
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="common-slidebtn d-inline-flex align-items-center justify-content-center gap-xl-3 gap-2">
                  <button className="cmn-prev1 cust-swiper2">
                    <i className="fa-solid fa-angle-left"></i>
                  </button>
                  <div className="dot-cmn"></div>
                  <button className="cmn-next1 cust-swiper2 active">
                    <i className="fa-solid fa-angle-right"></i>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div
                className="testimonial-thumbv2 w-100 wow fadeInDown"
                data-wow-delay=".4s"
              >
                <img
                  src="src/assets/img/testimonial/testimonial-thumb2.png"
                  alt="img"
                  className="w-100"
                />
                <div className="testimonial-count">
                  <img src="src/assets/img/icon/apple-count.png" alt="img" />
                  <div className="cont">
                    <h3>
                      <span className="count">4</span>k+
                    </h3>
                    <p>Happy Customer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sponsor-branding-section section-padding p100-bg">
        <div className="container">
          <div className="swiper brand-slider">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="brand-image">
                  <img src="src/assets/img/sponsor/sp1.png" alt="img" />
                </div>
              </div>
              <div className="swiper-slide">
                <div className="brand-image">
                  <img src="src/assets/img/sponsor/sp2.png" alt="img" />
                </div>
              </div>
              <div className="swiper-slide">
                <div className="brand-image">
                  <img src="src/assets/img/sponsor/sp3.png" alt="img" />
                </div>
              </div>
              <div className="swiper-slide">
                <div className="brand-image">
                  <img src="src/assets/img/sponsor/sp4.png" alt="img" />
                </div>
              </div>
              <div className="swiper-slide">
                <div className="brand-image">
                  <img src="src/assets/img/sponsor/sp5.png" alt="img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="team-section overflow-hidden white-bg section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xxl-6 col-xl-7 col-md-8 col-sm-11">
              <div className="section-title mb-60 text-center">
                <h5
                  className="p1-clr wow fadeInLeft text-uppercase"
                  data-wow-delay="0.4s"
                >
                  Our Team
                </h5>
                <h2 className="wow fadeInDown" data-wow-delay=".3s">
                  Harvesting dreams, one crop at a time
                </h2>
              </div>
            </div>
          </div>

          <div className="row g-xl-4 g-3 justify-content-center">
            <div
              className="col-xl-4 col-lg-4 col-md-6 col-sm-6 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="team-itemsv01">
                <img
                  src="src/assets/img/testimonial/team1.png"
                  alt="img"
                  className="mimg"
                />
                <div className="contents">
                  <a href="#" className="title">
                    Dianne Russell
                  </a>
                  <span>Marketing Coordinator</span>
                  <div className="social-sahre">
                    <div className="share-icon">
                      <div className="social-wrapper social-empact">
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
                      <svg
                        width="13"
                        height="13"
                        viewBox="0 0 13 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.25 3.25C12.25 4.69922 11.0742 5.875 9.625 5.875C8.91406 5.875 8.25781 5.60156 7.79297 5.16406L5.22266 6.44922C5.22266 6.53125 5.22266 6.64062 5.22266 6.75C5.22266 6.85938 5.22266 6.96875 5.22266 7.07812L7.79297 8.36328C8.25781 7.92578 8.91406 7.625 9.625 7.625C11.0742 7.625 12.25 8.80078 12.25 10.25C12.25 11.6992 11.0742 12.875 9.625 12.875C8.14844 12.875 7 11.6992 7 10.25C7 10.1406 7 10.0312 7 9.94922L4.42969 8.66406C3.96484 9.10156 3.30859 9.375 2.625 9.375C1.14844 9.375 0 8.19922 0 6.75C0 5.30078 1.14844 4.125 2.625 4.125C3.30859 4.125 3.96484 4.42578 4.42969 4.86328L7 3.57812C7 3.46875 7 3.35938 7 3.25C7 1.80078 8.14844 0.625 9.625 0.625C11.0742 0.625 12.25 1.80078 12.25 3.25ZM2.59766 7.625C3.08984 7.625 3.47266 7.24219 3.47266 6.75C3.47266 6.28516 3.08984 5.875 2.59766 5.875C2.13281 5.875 1.72266 6.28516 1.72266 6.75C1.72266 7.24219 2.13281 7.625 2.59766 7.625ZM9.625 2.375C9.13281 2.375 8.75 2.78516 8.75 3.25C8.75 3.74219 9.13281 4.125 9.625 4.125C10.0898 4.125 10.5 3.74219 10.5 3.25C10.5 2.78516 10.0898 2.375 9.625 2.375ZM9.625 11.125C10.0898 11.125 10.5 10.7422 10.5 10.25C10.5 9.78516 10.0898 9.375 9.625 9.375C9.13281 9.375 8.75 9.78516 8.75 10.25C8.75 10.7422 9.13281 11.125 9.625 11.125Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-4 col-md-6 col-sm-6 wow fadeInUp"
              data-wow-delay=".5s"
            >
              <div className="team-itemsv01">
                <img
                  src="src/assets/img/testimonial/team2.png"
                  alt="img"
                  className="mimg"
                />
                <div className="contents">
                  <a href="#" className="title">
                    Devon Lane
                  </a>
                  <span>Garden Lover</span>
                  <div className="social-sahre">
                    <div className="share-icon">
                      <div className="social-wrapper social-empact">
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
                      <svg
                        width="13"
                        height="13"
                        viewBox="0 0 13 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.25 3.25C12.25 4.69922 11.0742 5.875 9.625 5.875C8.91406 5.875 8.25781 5.60156 7.79297 5.16406L5.22266 6.44922C5.22266 6.53125 5.22266 6.64062 5.22266 6.75C5.22266 6.85938 5.22266 6.96875 5.22266 7.07812L7.79297 8.36328C8.25781 7.92578 8.91406 7.625 9.625 7.625C11.0742 7.625 12.25 8.80078 12.25 10.25C12.25 11.6992 11.0742 12.875 9.625 12.875C8.14844 12.875 7 11.6992 7 10.25C7 10.1406 7 10.0312 7 9.94922L4.42969 8.66406C3.96484 9.10156 3.30859 9.375 2.625 9.375C1.14844 9.375 0 8.19922 0 6.75C0 5.30078 1.14844 4.125 2.625 4.125C3.30859 4.125 3.96484 4.42578 4.42969 4.86328L7 3.57812C7 3.46875 7 3.35938 7 3.25C7 1.80078 8.14844 0.625 9.625 0.625C11.0742 0.625 12.25 1.80078 12.25 3.25ZM2.59766 7.625C3.08984 7.625 3.47266 7.24219 3.47266 6.75C3.47266 6.28516 3.08984 5.875 2.59766 5.875C2.13281 5.875 1.72266 6.28516 1.72266 6.75C1.72266 7.24219 2.13281 7.625 2.59766 7.625ZM9.625 2.375C9.13281 2.375 8.75 2.78516 8.75 3.25C8.75 3.74219 9.13281 4.125 9.625 4.125C10.0898 4.125 10.5 3.74219 10.5 3.25C10.5 2.78516 10.0898 2.375 9.625 2.375ZM9.625 11.125C10.0898 11.125 10.5 10.7422 10.5 10.25C10.5 9.78516 10.0898 9.375 9.625 9.375C9.13281 9.375 8.75 9.78516 8.75 10.25C8.75 10.7422 9.13281 11.125 9.625 11.125Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-4 col-md-6 col-sm-6 wow fadeInUp"
              data-wow-delay=".7s"
            >
              <div className="team-itemsv01">
                <img
                  src="src/assets/img/testimonial/team3.png"
                  alt="img"
                  className="mimg"
                />
                <div className="contents">
                  <a href="#" className="title">
                    Jane Cooper
                  </a>
                  <span>Garden Cleaner</span>
                  <div className="social-sahre">
                    <div className="share-icon">
                      <div className="social-wrapper social-empact">
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
                      <svg
                        width="13"
                        height="13"
                        viewBox="0 0 13 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.25 3.25C12.25 4.69922 11.0742 5.875 9.625 5.875C8.91406 5.875 8.25781 5.60156 7.79297 5.16406L5.22266 6.44922C5.22266 6.53125 5.22266 6.64062 5.22266 6.75C5.22266 6.85938 5.22266 6.96875 5.22266 7.07812L7.79297 8.36328C8.25781 7.92578 8.91406 7.625 9.625 7.625C11.0742 7.625 12.25 8.80078 12.25 10.25C12.25 11.6992 11.0742 12.875 9.625 12.875C8.14844 12.875 7 11.6992 7 10.25C7 10.1406 7 10.0312 7 9.94922L4.42969 8.66406C3.96484 9.10156 3.30859 9.375 2.625 9.375C1.14844 9.375 0 8.19922 0 6.75C0 5.30078 1.14844 4.125 2.625 4.125C3.30859 4.125 3.96484 4.42578 4.42969 4.86328L7 3.57812C7 3.46875 7 3.35938 7 3.25C7 1.80078 8.14844 0.625 9.625 0.625C11.0742 0.625 12.25 1.80078 12.25 3.25ZM2.59766 7.625C3.08984 7.625 3.47266 7.24219 3.47266 6.75C3.47266 6.28516 3.08984 5.875 2.59766 5.875C2.13281 5.875 1.72266 6.28516 1.72266 6.75C1.72266 7.24219 2.13281 7.625 2.59766 7.625ZM9.625 2.375C9.13281 2.375 8.75 2.78516 8.75 3.25C8.75 3.74219 9.13281 4.125 9.625 4.125C10.0898 4.125 10.5 3.74219 10.5 3.25C10.5 2.78516 10.0898 2.375 9.625 2.375ZM9.625 11.125C10.0898 11.125 10.5 10.7422 10.5 10.25C10.5 9.78516 10.0898 9.375 9.625 9.375C9.13281 9.375 8.75 9.78516 8.75 10.25C8.75 10.7422 9.13281 11.125 9.625 11.125Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="counter-section02 position-relative">
        <div className="container">
          <div className="counter-version-wrapv1 d-flex align-items-center justify-content-between gap-4">
            <div className="counter-items style02">
              <div className="cont-bottom">
                <img src="src/assets/img/icon/count1.svg" alt="img" />
              </div>
              <div className="con-box">
                <h2>
                  <span className="count">200</span>+
                </h2>
                <p>Team member</p>
              </div>
            </div>
            <div className="counter-items style02">
              <div className="cont-bottom">
                <img src="src/assets/img/icon/count2.svg" alt="img" />
              </div>
              <div className="con-box">
                <h2>
                  <span className="count">20</span>+
                </h2>
                <p>Winning award</p>
              </div>
            </div>
            <div className="counter-items style02">
              <div className="cont-bottom">
                <img src="src/assets/img/icon/count3.svg" alt="img" />
              </div>
              <div className="con-box">
                <h2>
                  <span className="count">10</span>k+
                </h2>
                <p>Complete project</p>
              </div>
            </div>
            <div className="counter-items style02">
              <div className="cont-bottom">
                <img src="src/assets/img/icon/count4.svg" alt="img" />
              </div>
              <div className="con-box">
                <h2>
                  <span className="count">900</span>+
                </h2>
                <p>Client review</p>
              </div>
            </div>

            <img
              src="src/assets/img/element/count-flower-left.png"
              alt="img"
              className="cout-flower-left"
            />
            <img
              src="src/assets/img/element/count-flower-right.png"
              alt="img"
              className="cout-flower-right"
            />
          </div>
        </div>
      </section>

      <div className="feature-videov02">
        <div className="container">
          <div className="feature-video-wrap d-center w-100">
            <a
              href="https://www.youtube.com/watch?v=ZP1XyLYraAA"
              className="video-cmn d-center video-popup"
            >
              <i className="fa-solid fa-play"></i>
            </a>
          </div>
        </div>
      </div>

      <section className="talking-section overflow-hidden space-top">
        <div className="container">
          <div className="row g-4 align-items-xl-center flex-row-reverse justify-content-between">
            <div className="col-md-6">
              <div className="talking-contact-box">
                <div className="conatact-box common-contact-inner position-relative">
                  <div className="section-title mb-40">
                    <h5 className="p1-clr wow fadeInLeft" data-wow-delay="0.4s">
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
                      <textarea name="message" placeholder="Message"></textarea>
                    </div>
                    <div className="col-lg-6">
                      <button type="submit" className="cmn-btn text-capitalize">
                        Submit Now
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div
                className="taklking-cotnact-thumb w-100 wow fadeInRight"
                data-wow-delay=".4s"
              >
                <img
                  src="src/assets/img/contact/talking-contact.png"
                  alt="img"
                  className="w-100"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="blog-section overflow-hidden white-bg section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xxl-6 col-xl-7 col-md-8 col-sm-11">
              <div className="section-title mb-60 text-center">
                <h5
                  className="p1-clr wow fadeInLeft text-uppercase"
                  data-wow-delay="0.4s"
                >
                  oUR BLOGS
                </h5>
                <h2 className="wow fadeInDown" data-wow-delay=".3s">
                  Taking care of the Earth one field at a time
                </h2>
              </div>
            </div>
          </div>

          <div className="row g-xl-4 g-3 justify-content-center">
            <div
              className="col-xl-6 col-lg-5 col-md-10 col-sm-11 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="blog-itemsv1 blog-itemsv2">
                <div className="thumb w-100">
                  <img
                    src="src/assets/img/blog/blogv2-1.jpg"
                    alt="img"
                    className="w-100"
                  />
                </div>
                <ul className="comment-inner">
                  <li>
                    <a href="#">
                      <i className="fa-solid fa-calendar-days"></i> October 19,
                      2024
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-regular fa-user"></i> By admin
                    </a>
                  </li>
                </ul>
                <div className="content">
                  <a href="blog-details.html" className="title">
                    Nourishing the world from seed to the best table
                  </a>
                  <a href="blog-details.html" className="arrows">
                    Read More <i className="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-3 col-md-6 col-sm-6 wow fadeInUp"
              data-wow-delay=".5s"
            >
              <div className="blog-itemsv1 blog-itemsv2">
                <div className="thumb w-100">
                  <img
                    src="src/assets/img/blog/blogv2-2.jpg"
                    alt="img"
                    className="w-100"
                  />
                </div>
                <ul className="comment-inner">
                  <li>
                    <a href="#">
                      <i className="fa-solid fa-calendar-days"></i> October 19,
                      2024
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-regular fa-user"></i> By admin
                    </a>
                  </li>
                </ul>
                <div className="content">
                  <a href="blog-details.html" className="title">
                    Sow harvest to the repeat
                  </a>
                  <a href="blog-details.html" className="arrows">
                    Read More <i className="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 col-sm-6 wow fadeInUp"
              data-wow-delay=".7s"
            >
              <div className="blog-itemsv1 blog-itemsv2">
                <div className="thumb w-100">
                  <img
                    src="src/assets/img/blog/blogv2-13.jpg"
                    alt="img"
                    className="w-100"
                  />
                </div>
                <ul className="comment-inner">
                  <li>
                    <a href="#">
                      <i className="fa-solid fa-calendar-days"></i> October 19,
                      2024
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-regular fa-user"></i> By admin
                    </a>
                  </li>
                </ul>
                <div className="content">
                  <a href="blog-details.html" className="title">
                    Discover the Pot of Agriculture
                  </a>
                  <a href="blog-details.html" className="arrows">
                    Read More <i className="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="subscrbie-section">
        <div className="container">
          <div className="subscribe-wrapper-v02">
            <div className="container">
              <div className="row g-4 align-items-center justify-content-between">
                <div className="col-lg-6 col-md-5">
                  <div className="subs-contentv2">
                    <h5>Subscribe our newsletter</h5>
                    <h2>
                      <span>Subscribe</span> for any information
                    </h2>
                  </div>
                </div>
                <div className="col-lg-6 col-md-7">
                  <form
                    action="#"
                    className="subscribe-form02 flex-sm-nowrap flex-wrap"
                  >
                    <input type="text" placeholder="Enter Your Email" />
                    <button className="cmn-btn cmn-white p900-clr round100 text-capitalize">
                      Subcribe
                    </button>
                  </form>
                </div>
              </div>
            </div>

            <img
              src="src/assets/img/footer/subscribe-shapev2.png"
              alt="img"
              className="subscribe-shapev2"
            />
          </div>
        </div>
      </div>

      <footer className="footer-section overflow-hidden position-relative footer-style2">
        <div className="footer-widgets-wrapper footer-widget-wrapperv02">
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
                        src="src/assets/img/logo/logo-light.png"
                        alt="logo-img"
                      />
                    </a>
                  </div>
                  <div className="footer-content">
                    <p className="pre-pragraph">
                      Lorem ipsum dolor amet consectetur <br /> sell adipis elit
                      phase nibh ellentes
                    </p>
                    <h5 className="white-clr fw-normal mb-3">Follow Us</h5>
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
                  <p className="letter-pragraph">
                    Lorem Ipsum is simply is the a <br /> dumiomy is text
                  </p>
                  <form action="#" className="letter-form">
                    <input type="text" placeholder="Your e-mail" />
                    <button className="letter-btn d-center" type="submit">
                      <i className="fa-solid fa-arrow-right"></i>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="footer-wrapper footer-wrapperv02 d-md-flex d-grid gap-md-0 gap-2 align-items-center justify-content-md-between justify-content-center text-md-start text-center">
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

        <img
          src="src/assets/img/footer/footer-shape2.png"
          alt="img"
          className="footer-wheat position-absolute w-100"
        />
      </footer>
    </>
  );
}

export function Homepage_3() {
  return (
    <>
      {/* <!-- Preloader Start --> */}
      <div id="preloader" class="preloader">
        <div class="box d-grid gap-4">
          <span class="man-pre m-auto">
            <img src="src/assets/img/banner/preloader.png" alt="img" />
          </span>
          <span class="p1-clr fz-40 fw-bold text-center d-block">FarmHub</span>
        </div>
      </div>

      {/* <!-- Scroll To Top Start--> */}
      <button
        class="scrollToTop d-none d-md-flex d-center"
        aria-label="scroll Bar Button"
      >
        <i class="mat-icon fas fa-angle-double-up"></i>
      </button>
      {/* <!-- Scroll To Top End --> */}

      {/* <!-- Offcanvas Area Start --> */}
      <div class="fix-area">
        <div class="offcanvas__info">
          <div class="offcanvas__wrapper">
            <div class="offcanvas__content">
              <div class="offcanvas__top mb-4 d-flex justify-content-between align-items-center">
                <div class="offcanvas__logo">
                  <a href="index.html">
                    <img src="src/assets/img/logo/favcion.png" alt="logo-img" />
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
                <h4>Contact Info</h4>
                <ul>
                  <li class="d-flex align-items-center">
                    <div class="offcanvas__contact-icon">
                      <i class="fal fa-map-marker-alt"></i>
                    </div>
                    <div class="offcanvas__contact-text">
                      <a target="_blank" href="#">
                        Us 1216, road 45 house of street
                      </a>
                    </div>
                  </li>
                  <li class="d-flex align-items-center">
                    <div class="offcanvas__contact-icon mr-15">
                      <i class="fal fa-envelope"></i>
                    </div>
                    <div class="offcanvas__contact-text">
                      <a href="mailto:demo23yourmail.com">
                        <span class="mailto:demo23yourmail.com">
                          demo23yourmail.com
                        </span>
                      </a>
                    </div>
                  </li>
                  <li class="d-flex align-items-center">
                    <div class="offcanvas__contact-icon mr-15">
                      <i class="fal fa-clock"></i>
                    </div>
                    <div class="offcanvas__contact-text">
                      <a target="_blank" href="#">
                        Mod-friday, 06am -02pm
                      </a>
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
                  <a href="#">
                    <i class="fab fa-facebook-f"></i>
                  </a>
                  <a href="#">
                    <i class="fab fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i class="fab fa-youtube"></i>
                  </a>
                  <a href="#">
                    <i class="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="offcanvas__overlay"></div>

      {/* <!-- Header Section Start --> */}
      <header id="header-sticky" class="header-1">
        <div class="container">
          <div class="mega-menu-wrapper">
            <div class="header-main">
              <div class="header-left">
                <div class="logo">
                  <a href="index.html" class="header-logo">
                    <img src="src/assets/img/logo/logo.png" alt="logo-img" />
                  </a>
                </div>
              </div>
              <div class="header-right d-flex justify-content-end align-items-center">
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
                                    <img
                                      src="src/assets/img/header/home-1.jpg"
                                      alt="img"
                                    />
                                    <div class="demo-button">
                                      <a
                                        href="index.html"
                                        class="theme-btn p5-bg"
                                      >
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
                                    <img
                                      src="src/assets/img/header/home-2.jpg"
                                      alt="img"
                                    />
                                    <div class="demo-button">
                                      <a
                                        href="index-2.html"
                                        class="theme-btn p5-bg"
                                      >
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
                                    <img
                                      src="src/assets/img/header/home-3.jpg"
                                      alt="img"
                                    />
                                    <div class="demo-button">
                                      <a
                                        href="index-3.html"
                                        class="theme-btn p5-bg"
                                      >
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
                            <li>
                              <a href="service.html">Services</a>
                            </li>
                            <li>
                              <a href="service-details.html">
                                Services Details
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="gallery.html">
                            Projects
                            <i class="fas fa-angle-down"></i>
                          </a>
                          <ul class="submenu">
                            <li>
                              <a href="gallery.html">Gallery</a>
                            </li>
                            <li>
                              <a href="gallery-details.html">Gallery Details</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="blog.html">
                            Blog
                            <i class="fas fa-angle-down"></i>
                          </a>
                          <ul class="submenu">
                            <li>
                              <a href="blog.html">Blog</a>
                            </li>
                            <li>
                              <a href="blog-details.html">Blog Details</a>
                            </li>
                          </ul>
                        </li>
                        <li class="has-dropdown">
                          <a href="#">
                            Pages
                            <i class="fas fa-angle-down"></i>
                          </a>
                          <ul class="submenu">
                            <li>
                              <a href="about.html">About Us</a>
                            </li>
                            <li>
                              <a href="product-list.html">Product</a>
                            </li>
                            <li>
                              <a href="product-details.html">Product Details</a>
                            </li>
                            <li>
                              <a href="faq.html">Faq's</a>
                            </li>
                            <li>
                              <a href="contact.html">Contact</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="contact.html">Contact</a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
                <div class="shop-adjust">
                  <div class="shop-bar">
                    <div class="cart position-relative">
                      <img src="src/assets/img/icon/shop-cart.svg" alt="icon" />
                      <span class="serial-count d-center">0</span>
                    </div>
                    Total <br />
                    $0.00
                  </div>
                  <div class="header-button d-sm-block d-none">
                    <a
                      href="contact.html"
                      class="cmn-btn d-center round100 cmn-white-clr"
                    >
                      Get A Quote
                      <i class="fa-solid fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
                <div class="header__hamburger d-xl-none my-auto">
                  <div class="sidebar__toggle">
                    <i class="fas fa-bars"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* <!-- Hero Section Start --> */}
      <section class="banner-section style-v1 overflow-hidden">
        <div class="container">
          <div class="row g-4 align-items-center position-relative">
            <div class="col-lg-7 col-md-7 col-sm-9">
              <div class="hero-contentv01">
                <h1 class="wow fadeInUp" data-wow-delay="0.4s">
                  Plowing the earth
                  <span class="harves">harvesting hope</span>
                </h1>
                <p class="wow fadeInUp" data-wow-delay="0.6s">
                  Education is the key to studeny Unlock your potential through
                  learning. <br /> Expand your horizons with the most
                </p>
                <ul class="hero-list wow fadeInUp" data-wow-delay="0.8s">
                  <li>
                    <i class="fa-solid fa-angles-right"></i>
                    Crops of opportunity fields of dreams
                  </li>
                  <li>
                    <i class="fa-solid fa-angles-right"></i>
                    Where innovation meets cultivation
                  </li>
                </ul>
                <a
                  href="about.html"
                  class="cmn-btn round100 wow fadeInUp"
                  data-wow-delay="0.9s"
                >
                  View More
                  <i class="fa-solid fa-arrow-right"></i>
                </a>
              </div>
            </div>
            <div class="col-lg-5 col-md-5 col-sm-8">
              <div
                class="hero-thumbv01 position-relative wow fadeInDown"
                data-wow-delay="0.5s"
              >
                <img
                  src="src/assets/img/banner/hero1.png"
                  alt="img"
                  class="mimg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- About Version V01 --> */}
      <section class="about-section style-v01 section-padding white-bg">
        <div class="container">
          <div class="row g-4 align-items-center justify-content-center">
            <div class="col-lg-6 col-md-6 col-sm-8 order-md-0 order-1">
              <div class="about-thumv01 position-relative">
                <img
                  src="src/assets/img/about/choose-man.png"
                  alt="img"
                  class="mimg"
                />
                {/* <!-- Elemennt --> */}
                <img
                  src="src/assets/img/about/f-food.png"
                  alt="img"
                  class="f-food"
                />
                <img
                  src="src/assets/img/about/l-food.png"
                  alt="img"
                  class="l-food wow fadeInLeft"
                  data-wow-delay=".5s"
                />
                <img
                  src="src/assets/img/about/t-food.png"
                  alt="img"
                  class="t-food wow fadeInLeft"
                  data-wow-delay=".7s"
                />
              </div>
            </div>
            <div class="col-lg-6 col-md-6">
              <div class="about-contentv1">
                <div class="section-title mb-40">
                  <h5 class="p1-clr wow fadeInLeft" data-wow-delay="0.4s">
                    Why Chose Us
                  </h5>
                  <h2 class="wow fadeInDown" data-wow-delay=".3s">
                    Bringing nature's bounty to your plate
                  </h2>
                  <p class="wow fadeInUp" data-wow-delay=".4s">
                    Agriculture and farming are essential industries that
                    involve the cultivation of crops, raising of livestock, and
                    production
                  </p>
                  <div class="progress_bar d-grid gap-xxl-4 gap-4">
                    <div class="progress_bar_item">
                      <div
                        class="per-title d-flex align-items-center justify-content-between"
                        style={{ width: "70%;" }}
                      >
                        <div class="item_label p900-clr">Pure And Organic</div>
                        <div class="item_value p900-clr">0%</div>
                      </div>
                      <div class="item_bar">
                        <div class="progress" data-progress="70"></div>
                      </div>
                    </div>
                    <div class="progress_bar_item">
                      <div
                        class="per-title d-flex align-items-center justify-content-between"
                        style={{ width: "80%;" }}
                      >
                        <div class="item_label p900-clr">Healthy Food</div>
                        <div class="item_value p900-clr">0%</div>
                      </div>
                      <div class="item_bar">
                        <div class="progress" data-progress="80"></div>
                      </div>
                    </div>
                  </div>
                  <a href="about.html" class="cmn-btn round100 cmn-primary2">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Gallery Section -->> */}
      <section class="gallery-section p100-bg section-padding">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-xxl-6 col-xl-7 col-md-8 col-sm-11">
              <div class="section-title mb-60 text-center">
                <h5 class="p1-clr wow fadeInLeft" data-wow-delay="0.4s">
                  OUR GALLARY
                </h5>
                <h2 class="wow fadeInDown" data-wow-delay=".3s">
                  Bringing nature's bounty to your plate
                </h2>
              </div>
            </div>
          </div>
          {/* <!-- Body --> */}
          <div class="row g-lg-4 g-3 justify-content-center">
            <div class="col-md-7 col-sm-7">
              <a
                href="assets/img/gallery/gl1.jpg"
                class="gallery-com-thumb first-item img-popup w-100 round20"
              >
                <img
                  src="src/assets/img/gallery/gl1.jpg"
                  alt="img"
                  class="round20"
                />
              </a>
            </div>
            <div class="col-md-5 col-sm-5">
              <a
                href="assets/img/gallery/gl2.jpg"
                class="gallery-com-thumb first-item img-popup w-100 round20"
              >
                <img
                  src="src/assets/img/gallery/gl2.jpg"
                  alt="img"
                  class="round20"
                />
              </a>
            </div>
            <div class="d-flex flex-sm-nowrap flex-wrap justify-content-between gap-lg-4 gap-3">
              <a
                href="assets/img/gallery/gl3.jpg"
                class="gallery-com-thumb secound img-popup w-100 round20"
              >
                <img
                  src="src/assets/img/gallery/gl3.jpg"
                  alt="img"
                  class="round20"
                />
              </a>
              <a
                href="assets/img/gallery/gl4.jpg"
                class="gallery-com-thumb secound img-popup w-100 round20"
              >
                <img
                  src="src/assets/img/gallery/gl4.jpg"
                  alt="img"
                  class="round20"
                />
              </a>
              <div class="d-grid gap-lg-4 gap-3">
                <a
                  href="assets/img/gallery/gl5.jpg"
                  class="gallery-com-thumb thard img-popup w-100 round20"
                >
                  <img
                    src="src/assets/img/gallery/gl5.jpg"
                    alt="img"
                    class="round20"
                  />
                </a>
                <a href="gallery.html" class="cmn-btn d-center">
                  View all Project
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Counter Section --> */}
      <section class="counter-section position-relative">
        <div class="container">
          <div class="counter-version-wrapv1 d-flex align-items-center justify-content-between gap-4">
            <div class="counter-items">
              <h2>
                <span class="count">200</span>+
              </h2>
              <div class="cont-bottom">
                <img src="src/assets/img/icon/count1.svg" alt="img" />
                <p>Team member</p>
              </div>
            </div>
            <div class="counter-items">
              <h2>
                <span class="count">300</span>k+
              </h2>
              <div class="cont-bottom">
                <img src="src/assets/img/icon/count2.svg" alt="img" />
                <p>Winning award</p>
              </div>
            </div>
            <div class="counter-items">
              <h2>
                <span class="count">100</span>k+
              </h2>
              <div class="cont-bottom">
                <img src="src/assets/img/icon/count3.svg" alt="img" />
                <p>Complete project</p>
              </div>
            </div>
            <div class="counter-items">
              <h2>
                <span class="count">900</span>+
              </h2>
              <div class="cont-bottom">
                <img src="src/assets/img/icon/count4.svg" alt="img" />
                <p>Client review</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Service section --> */}
      <section class="service-section white-bg space-top">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-xxl-6 col-xl-7 col-md-8 col-sm-11">
              <div class="section-title mb-60 text-center">
                <h5 class="p1-clr wow fadeInLeft" data-wow-delay="0.4s">
                  Our Latest Service
                </h5>
                <h2 class="wow fadeInDown" data-wow-delay=".3s">
                  Harvesting dreams one crop at a time
                </h2>
              </div>
            </div>
          </div>
          {/* <!-- Body --> */}
          <div class="row g-xl-4 g-3 justify-content-center">
            <div
              class="col-lg-4 col-md-6 col-sm-6 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div class="service-itemsv1">
                <img
                  src="src/assets/img/icon/count1.svg"
                  alt="svg"
                  class="icons"
                />
                <div class="content">
                  <a href="service-details.html" class="title">
                    Green Grow
                  </a>
                  <p>Agriculture and farming are essential industries</p>
                  <a href="service-details.html" class="arrows">
                    Read More <i class="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div
              class="col-lg-4 col-md-6 col-sm-6 wow fadeInUp"
              data-wow-delay=".5s"
            >
              <div class="service-itemsv1">
                <img
                  src="src/assets/img/icon/wheat-sesh.svg"
                  alt="svg"
                  class="icons"
                />
                <div class="content">
                  <a href="service-details.html" class="title">
                    Agri Consulting
                  </a>
                  <p>Agriculture and farming are essential industries</p>
                  <a href="service-details.html" class="arrows">
                    Read More <i class="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div
              class="col-lg-4 col-md-6 col-sm-6 wow fadeInUp"
              data-wow-delay=".7s"
            >
              <div class="service-itemsv1">
                <img
                  src="src/assets/img/icon/smart-flower.svg"
                  alt="svg"
                  class="icons"
                />
                <div class="content">
                  <a href="service-details.html" class="title">
                    Farm Smart
                  </a>
                  <p>Agriculture and farming are essential industries</p>
                  <a href="service-details.html" class="arrows">
                    Read More <i class="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Section Testimonial Version One --> */}
      <section class="testimonial-section testimonial-style1 section-padding">
        <div class="container">
          <div class="row g-6 align-items-center">
            <div class="col-lg-4 col-md-4">
              <div
                class="testimonial-thumbv1 w-100 wow fadeInDown"
                data-wow-delay=".4s"
              >
                <img
                  src="src/assets/img/testimonial/testimonial.png"
                  alt="img"
                  class="w-100"
                />
              </div>
            </div>
            <div class="col-lg-8 col-md-8">
              <div class="testimonial-common-wrapper position-relative ps-xxl-5 ps-lg-4">
                <div class="swiper testimonial-slidewrap01">
                  <div class="swiper-wrapper">
                    <div class="swiper-slide">
                      <div class="testimonail-common-items">
                        <div class="ratting d-flex align-items-center justify-content-between">
                          <img
                            src="src/assets/img/icon/quote-left.svg"
                            alt="icon"
                          />
                          <div class="stars">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                          </div>
                        </div>
                        <p>
                          Agriculture and farming are essential industries that
                          involve the cultivation of crops, raising of
                          livestock, and production a of food and other
                          agricultural products Agriculture farming are
                          essential industries involve cultivation
                        </p>
                        <div class="review-man">
                          <img
                            src="src/assets/img/testimonial/re1.png"
                            alt="img"
                          />
                          <div class="cont">
                            <h3>Haney Cooper</h3>
                            <span>Ceo</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="swiper-slide">
                      <div class="testimonail-common-items">
                        <div class="ratting d-flex align-items-center justify-content-between">
                          <img
                            src="src/assets/img/icon/quote-left.svg"
                            alt="icon"
                          />
                          <div class="stars">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                          </div>
                        </div>
                        <p>
                          Agriculture and farming are essential industries that
                          involve the cultivation of crops, raising of
                          livestock, and production a of food and other
                          agricultural products Agriculture farming are
                          essential industries involve cultivation
                        </p>
                        <div class="review-man">
                          <img
                            src="src/assets/img/testimonial/re1.png"
                            alt="img"
                          />
                          <div class="cont">
                            <h3>Haney Cooper</h3>
                            <span>Ceo</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="swiper-slide">
                      <div class="testimonail-common-items">
                        <div class="ratting d-flex align-items-center justify-content-between">
                          <img
                            src="src/assets/img/icon/quote-left.svg"
                            alt="icon"
                          />
                          <div class="stars">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                          </div>
                        </div>
                        <p>
                          Agriculture and farming are essential industries that
                          involve the cultivation of crops, raising of
                          livestock, and production a of food and other
                          agricultural products Agriculture farming are
                          essential industries involve cultivation
                        </p>
                        <div class="review-man">
                          <img
                            src="src/assets/img/testimonial/re1.png"
                            alt="img"
                          />
                          <div class="cont">
                            <h3>Haney Cooper</h3>
                            <span>Ceo</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="dot-cmn"></div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Element --> */}
        <img
          src="src/assets/img/element/flower-badge.png"
          alt="img"
          class="flower-testimonial d-sm-block d-none"
        />
      </section>

      {/* <!-- Service section --> */}
      <section class="service-feature-section white-bg space-bottom">
        <div class="filter-mixtup">
          <div class="container">
            <div class="row g-4 justify-content-between align-items-end mb-60">
              <div class="col-xxl-5 col-xl-7">
                <div class="section-title">
                  <h5 class="p1-clr wow fadeInLeft" data-wow-delay="0.4s">
                    Our Future
                  </h5>
                  <h2 class="wow fadeInDown" data-wow-delay=".3s">
                    Nourishing the world from seed to table
                  </h2>
                </div>
              </div>
              <div class="col-xxl-5 col-xl-5">
                <div class="mixtup-filtering d-flex justify-content-end">
                  <div class="filter-btns">
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
            <div class="all-catagorys">
              <div class="mix category-a" data-order="1">
                <div class="feature-itemsv1">
                  <img
                    src="src/assets/img/gallery/feature1.jpg"
                    alt="img"
                    class="f-thumb"
                  />
                  <div class="content">
                    <a href="product-details.html" class="title">
                      Tomato
                    </a>
                    <p>Agriculture farming are the essential</p>
                    <h5>$120</h5>
                    <a href="product-details.html" class="add-tocart">
                      Add To Chart
                    </a>
                  </div>
                </div>
              </div>
              <div class="mix category-b" data-order="2">
                <div class="feature-itemsv1">
                  <img
                    src="src/assets/img/gallery/feature2.jpg"
                    alt="img"
                    class="f-thumb"
                  />
                  <div class="content">
                    <a href="product-details.html" class="title">
                      Meat
                    </a>
                    <p> Agriculture farming are the essential</p>
                    <h5>$80</h5>
                    <a href="product-details.html" class="add-tocart">
                      Add To Chart
                    </a>
                  </div>
                </div>
              </div>
              <div class="mix category-c" data-order="3">
                <div class="feature-itemsv1">
                  <img
                    src="src/assets/img/gallery/feature3.jpg"
                    alt="img"
                    class="f-thumb"
                  />
                  <div class="content">
                    <a href="product-details.html" class="title">
                      Blossomed
                    </a>
                    <p>Agriculture farming are the essential</p>
                    <h5>$45</h5>
                    <a href="product-details.html" class="add-tocart">
                      Add To Chart
                    </a>
                  </div>
                </div>
              </div>
              <div class="mix category-a" data-order="4">
                <div class="feature-itemsv1">
                  <img
                    src="src/assets/img/gallery/feature4.jpg"
                    alt="img"
                    class="f-thumb"
                  />
                  <div class="content">
                    <a href="product-details.html" class="title">
                      Egg
                    </a>
                    <p>Agriculture farming are the essential</p>
                    <h5>$44</h5>
                    <a href="product-details.html" class="add-tocart">
                      Add To Chart
                    </a>
                  </div>
                </div>
              </div>
              <div class="mix category-a category-c" data-order="5">
                <div class="feature-itemsv1">
                  <img
                    src="src/assets/img/gallery/feature5.jpg"
                    alt="img"
                    class="f-thumb"
                  />
                  <div class="content">
                    <a href="product-details.html" class="title">
                      Corning
                    </a>
                    <p>Agriculture farming are the essential</p>
                    <h5>$80</h5>
                    <a href="product-details.html" class="add-tocart">
                      Add To Chart
                    </a>
                  </div>
                </div>
              </div>
              <div class="mix category-b" data-order="6">
                <div class="feature-itemsv1">
                  <img
                    src="src/assets/img/gallery/feature6.jpg"
                    alt="img"
                    class="f-thumb"
                  />
                  <div class="content">
                    <a href="product-details.html" class="title">
                      Kales
                    </a>
                    <p>Agriculture farming are the essential</p>
                    <h5>$45</h5>
                    <a href="product-details.html" class="add-tocart">
                      Add To Chart
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Who We Are section --> */}
      <section class="who-section overflow-hidden p900-bg section-padding">
        <div class="container">
          <div class="row g-4 justify-content-between align-items-end">
            <div class="col-lg-6">
              <div class="section-title mb-40">
                <h5 class="p1-clr wow fadeInLeft" data-wow-delay="0.4s">
                  Who we are
                </h5>
                <h2 class="wow fadeInDown white-clr mb-24" data-wow-delay=".3s">
                  Nourishing world from seed to table
                </h2>
                <p class="white-clr wow fadeInDown" data-wow-delay=".4s">
                  Agriculture and farming are essential industries that involve
                  the cultivation of crops,raising of livestock, and production
                  of food.
                </p>
              </div>
              <div class="row g-xl-6 g-4">
                <div class="col-sm-6 wow fadeInDown" data-wow-delay=".4s">
                  <div class="who-box">
                    <div class="icon d-center">
                      <img
                        src="src/assets/img/icon/hand-planp900.svg"
                        alt="icon"
                      />
                    </div>
                    <a href="about.html" class="title">
                      Growing stron <br /> a feeding
                    </a>
                  </div>
                </div>
                <div class="col-sm-6 wow fadeInDown" data-wow-delay=".6s">
                  <div class="who-box">
                    <div class="icon d-center">
                      <img
                        src="src/assets/img/icon/wheath-p900.svg"
                        alt="icon"
                      />
                    </div>
                    <a href="about.html" class="title">
                      Taking care of <br /> the Earth
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="who-contact-wrap">
                <h3 class="white-clr">Leave message</h3>
                <form action="#" class="row g-xl-4 g-3">
                  <div class="col-lg-6">
                    <input type="text" placeholder="Name" />
                  </div>
                  <div class="col-lg-6">
                    <input type="email" placeholder="E-mail" />
                  </div>
                  <div class="col-lg-6">
                    <input type="number" placeholder="Your Number" />
                  </div>
                  <div class="col-lg-6">
                    <select name="select">
                      <option value="1">Your Area</option>
                      <option value="1">Us</option>
                      <option value="1">Uk</option>
                      <option value="1">Turky</option>
                    </select>
                  </div>
                  <div class="col-lg-12">
                    <textarea
                      name="message"
                      rows="4"
                      placeholder="Message"
                    ></textarea>
                  </div>
                  <div class="col-lg-12">
                    <button
                      type="submit"
                      class="cmn-btn cmn-primary2 text-capitalize"
                    >
                      Submit Now
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Element --> */}
        <img
          src="src/assets/img/element/who-element.png"
          alt="img"
          class="who-element"
        />
      </section>

      {/* <!-- Feature-video --> */}
      <div class="feature-video">
        <div class="container">
          <div class="feature-video-wrap w-100">
            <img
              src="src/assets/img/about/feature-vid.jpg"
              alt="img"
              class="w-100"
            />
            <a
              href="https://www.youtube.com/watch?v=ZP1XyLYraAA"
              class="video-cmn d-center video-popup"
            >
              <i class="fa-solid fa-play"></i>
            </a>
          </div>
        </div>
      </div>

      {/* <!-- Blog section --> */}
      <section class="blog-section overflow-hidden blog-stylev1 white-bg space-top">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-xxl-6 col-xl-7 col-md-8 col-sm-11">
              <div class="section-title mb-60 text-center">
                <h5 class="p1-clr wow fadeInLeft" data-wow-delay="0.4s">
                  OUR BLOGS
                </h5>
                <h2 class="wow fadeInDown" data-wow-delay=".3s">
                  Cultivating a sustainable future for all
                </h2>
              </div>
            </div>
          </div>
          {/* <!-- Body --> */}
          <div class="row g-xl-4 g-3 justify-content-center">
            <div
              class="col-lg-4 col-md-6 col-sm-11 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div class="blog-itemsv1">
                <div class="thumb w-100">
                  <img
                    src="src/assets/img/blog/blog1.jpg"
                    alt="img"
                    class="w-100"
                  />
                  <div class="dates">22 jan</div>
                </div>
                <div class="content">
                  <ul class="comment-inner">
                    <li>
                      <a href="#">
                        <i class="fa-regular fa-comments"></i> Comments (05)
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa-regular fa-user"></i> By admin
                      </a>
                    </li>
                  </ul>
                  <a href="blog-details.html" class="title">
                    From Farm to Table an Agriculture
                  </a>
                  <p>
                    Agriculture and farming are essential industries that
                    involve
                  </p>
                  <a href="blog-details.html" class="arrows">
                    Read More <i class="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div
              class="col-lg-4 col-md-6 col-sm-11 wow fadeInUp"
              data-wow-delay=".5s"
            >
              <div class="blog-itemsv1">
                <div class="thumb w-100">
                  <img
                    src="src/assets/img/blog/blog2.jpg"
                    alt="img"
                    class="w-100"
                  />
                  <div class="dates">22 jan</div>
                </div>
                <div class="content">
                  <ul class="comment-inner">
                    <li>
                      <a href="#">
                        <i class="fa-regular fa-comments"></i> Comments (05)
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa-regular fa-user"></i> By admin
                      </a>
                    </li>
                  </ul>
                  <a href="blog-details.html" class="title">
                    Farm fresh goodness for alle
                  </a>
                  <p>
                    Agriculture and farming are essential industries that
                    involve
                  </p>
                  <a href="blog-details.html" class="arrows">
                    Read More <i class="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div
              class="col-lg-4 col-md-6 col-sm-11 wow fadeInUp"
              data-wow-delay=".7s"
            >
              <div class="blog-itemsv1">
                <div class="thumb w-100">
                  <img
                    src="src/assets/img/blog/blog3.jpg"
                    alt="img"
                    class="w-100"
                  />
                  <div class="dates">22 jan</div>
                </div>
                <div class="content">
                  <ul class="comment-inner">
                    <li>
                      <a href="#">
                        <i class="fa-regular fa-comments"></i> Comments (05)
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa-regular fa-user"></i> By admin
                      </a>
                    </li>
                  </ul>
                  <a href="blog-details.html" class="title">
                    Discover Potential of Agriculture
                  </a>
                  <p>
                    Agriculture and farming are essential industries that
                    involve
                  </p>
                  <a href="blog-details.html" class="arrows">
                    Read More <i class="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Element --> */}
        <img
          src="src/assets/img/element/carrort-elemet-line.png"
          alt="img"
          class="carrot-left"
        />
        <img
          src="src/assets/img/element/carrot-element-cricle.png"
          alt="img"
          class="carrot-right d-md-block d-none"
        />
      </section>

      {/* <!--<< Sponsor Branding Start >>--> */}
      <section class="sponsor-branding-section space-top">
        <div class="container">
          <div class="swiper brand-slider">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <div class="brand-image">
                  <img src="src/assets/img/sponsor/sp1.png" alt="img" />
                </div>
              </div>
              <div class="swiper-slide">
                <div class="brand-image">
                  <img src="src/assets/img/sponsor/sp2.png" alt="img" />
                </div>
              </div>
              <div class="swiper-slide">
                <div class="brand-image">
                  <img src="src/assets/img/sponsor/sp3.png" alt="img" />
                </div>
              </div>
              <div class="swiper-slide">
                <div class="brand-image">
                  <img src="src/assets/img/sponsor/sp4.png" alt="img" />
                </div>
              </div>
              <div class="swiper-slide">
                <div class="brand-image">
                  <img src="src/assets/img/sponsor/sp5.png" alt="img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!--<< Subscribe Start >>--> */}
      <div class="subscrbie-section">
        <div class="container">
          <div class="subscribe-wrapper-v01">
            <div class="container">
              <div class="row g-4 justify-content-lg-start justify-content-between align-items-end">
                <div class="col-lg-5 col-md-5">
                  <div class="subscribe-thumb">
                    <img
                      src="src/assets/img/footer/subscribe.png"
                      alt="img"
                      class="w-100"
                    />
                  </div>
                </div>
                <div class="col-lg-1 d-lg-block d-none"></div>
                <div class="col-lg-5 col-md-6">
                  <div class="subscribe-content">
                    <h2>Subscribe to our newsletter</h2>
                    <p>
                      It is a long established fact that a reader will be
                      distracted
                    </p>
                    <form action="#" class="subscribe-form">
                      <input type="text" placeholder="Enter Your Email" />
                      <button type="submit" class="d-center">
                        <svg
                          width="18"
                          height="17"
                          viewBox="0 0 18 17"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M16.9688 2.15625L14.9688 15.125C14.9375 15.4375 14.75 15.7188 14.4688 15.875C14.3125 15.9375 14.1562 16 13.9688 16C13.8438 16 13.7188 15.9688 13.5938 15.9062L9.78125 14.3125L8.1875 16.6875C8.0625 16.9062 7.84375 17 7.625 17C7.28125 17 7 16.7188 7 16.375V13.375C7 13.125 7.0625 12.9062 7.1875 12.75L14 4L4.8125 12.2812L1.59375 10.9375C1.25 10.7812 1 10.4688 1 10.0625C0.96875 9.625 1.15625 9.3125 1.5 9.125L15.5 1.15625C15.8125 0.96875 16.25 0.96875 16.5625 1.1875C16.875 1.40625 17.0312 1.78125 16.9688 2.15625Z"
                            fill="#1F4E3D"
                          />
                        </svg>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!--<< Footer Section Start >>--> */}
      <footer class="footer-section overflow-hidden position-relative footer-style1">
        <div class="footer-widgets-wrapper footer-widget-wrapperv01">
          <div class="container">
            <div class="row g-md-4 g-4 justify-content-between">
              <div
                class="col-xl-4 col-lg-3 col-md-6 col-sm-6 wow fadeInUp"
                data-wow-delay=".3s"
              >
                <div class="single-footer-widget">
                  <div class="widget-head">
                    <a href="index.html" class="footer-logo">
                      <img
                        src="src/assets/img/logo/logo-light.png"
                        alt="logo-img"
                      />
                    </a>
                  </div>
                  <div class="footer-content">
                    <p class="pre-pragraph">
                      Lorem ipsum dolor amet consectetur <br /> sell adipis elit
                      phase nibh ellentes
                    </p>
                    <div class="social-wrapper social-empact d-flex align-items-center">
                      <a href="#" class="white-clr">
                        <i class="white-clr fab fa-facebook-f"></i>
                      </a>
                      <a href="#" class="white-clr">
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
                      <a href="#" class="white-clr">
                        <i class="white-clr fa-brands fa-linkedin-in"></i>
                      </a>
                      <a href="#" class="white-clr">
                        <i class="white-clr fa-brands fa-pinterest-p"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="col-xl-3 col-lg-3 col-md-6 col-sm-6 wow fadeInUp"
                data-wow-delay=".5s"
              >
                <div class="single-footer-widget">
                  <div class="widget-head">
                    <h3 class="white-clr">Service</h3>
                  </div>
                  <ul class="list-area">
                    <li>
                      <a href="#">
                        <i class="fa-solid fa-angle-right"></i>
                        Success Steps Education
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa-solid fa-angle-right"></i>
                        Pathway to Progress
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa-solid fa-angle-right"></i>
                        Skill Builders Academy
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa-solid fa-angle-right"></i>
                        Academic Achievers
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                class="col-xl-2 col-lg-3 col-md-6 col-sm-6 wow fadeInUp"
                data-wow-delay=".5s"
              >
                <div class="single-footer-widget">
                  <div class="widget-head">
                    <h3 class="white-clr">Link</h3>
                  </div>
                  <ul class="list-area">
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
                class="col-xl-3 col-lg-3 col-md-6 col-sm-6 wow fadeInUp"
                data-wow-delay=".5s"
              >
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
                        1901 Thornridge Cir. Shiloh, <br /> Hawaii 81063
                      </a>
                    </li>
                    <li>
                      <a href="#" class="link">
                        <i class="fa-solid fa-phone"></i>
                        (270) 555-0117 <br />
                        (270) 555-0118
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <div class="container">
            <div class="footer-wrapper footer-wrapperv01 d-md-flex d-grid gap-md-0 gap-2 align-items-center justify-content-md-between justify-content-center text-md-start text-center">
              <p class="wow fadeInLeft color-2" data-wow-delay=".3s">
                &copy; theme_ocean 2024. All Rights Reserved
              </p>
              <ul class="footer-menu wow fadeInRight" data-wow-delay=".5s">
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
        {/* <!-- Element --> */}
        <img
          src="src/assets/img/footer/footer-wheat.png"
          alt="img"
          class="footer-wheat position-absolute"
        />
        {/* <!-- Element --> */}
      </footer>
    </>
  );
}
