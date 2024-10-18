export default function Topbar() {
  return (
    <div>
      {/* <!-- Header Section Start --> */}
      <header id="header-sticky" className="header-1">
        <div className="container">
          <div className="mega-menu-wrapper">
            <div className="header-main">
              <div className="header-left">
                <div className="logo">
                  <a href="index.html" className="header-logo">
                    <img src="src/assets/img/logo/logo.png" alt="logo-img" />
                  </a>
                </div>
              </div>
              <div className="header-right d-flex justify-content-end align-items-center">
                <div className="mean__menu-wrapper">
                  <div className="main-menu">
                    <nav id="mobile-menu">
                      <ul>
                        <li className="has-dropdown active menu-thumb">
                          <a href="/">
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
                                      <a href="/" className="theme-btn p5-bg">
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
                                        href="/homepage2"
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
                                        href="/homepage3"
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
                          <a href="/aboutUs">About Us</a>
                        </li>
                        <li>
                          <a href="/services">
                            Services
                            <i className="fas fa-angle-down"></i>
                          </a>
                          <ul className="submenu">
                            <li>
                              <a href="/services">Services</a>
                            </li>
                            <li>
                              <a href="/services/Details">Services Details</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="/Gallery">
                            Projects
                            <i className="fas fa-angle-down"></i>
                          </a>
                          <ul className="submenu">
                            <li>
                              <a href="/Gallery">Gallery</a>
                            </li>
                            <li>
                              <a href="/Gallery/Details">Gallery Details</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="/Blog">
                            Blog
                            <i className="fas fa-angle-down"></i>
                          </a>
                          <ul className="submenu">
                            <li>
                              <a href="/Blog">Blog</a>
                            </li>
                            <li>
                              <a href="/Blog/Details">Blog Details</a>
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
                              <a href="/aboutUs">About Us</a>
                            </li>
                            <li>
                              <a href="/Products">Product</a>
                            </li>
                            <li>
                              <a href="/Product/Details">Product Details</a>
                            </li>
                            <li>
                              <a href="/Faq">Faq's</a>
                            </li>
                            <li>
                              <a href="/contact">Contact</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="/contact">Contact</a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
                <div className="shop-adjust">
                  <div className="shop-bar">
                    <div className="cart position-relative">
                      <img src="src/assets/img/icon/shop-cart.svg" alt="icon" />
                      <span className="serial-count d-center">0</span>
                    </div>
                    Total <br />
                    $0.00
                  </div>
                  <div className="header-button d-sm-block d-none">
                    <a
                      href="Contact"
                      className="cmn-btn d-center round100 cmn-white-clr"
                    >
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
    </div>
  );
}
