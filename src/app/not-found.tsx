export default function NotFound() {
  return (
    <div dangerouslySetInnerHTML={{ __html: `<!-- Preload -->
    <div class="preloader overflow-hidden">
        <div class="site-name"><span>DIGICAREHOUSE</span></div>
        <div class="preloader-gutters">
            <div class="bar">
                <div class="inner-bar"></div>
            </div>
            <div class="bar">
                <div class="inner-bar"></div>
            </div>
            <div class="bar">
                <div class="inner-bar"></div>
            </div>
            <div class="bar">
                <div class="inner-bar"></div>
            </div>
            <div class="bar">
                <div class="inner-bar"></div>
            </div>
            <div class="bar">
                <div class="inner-bar"></div>
            </div>
            <div class="bar">
                <div class="inner-bar"></div>
            </div>
            <div class="bar">
                <div class="inner-bar"></div>
            </div>
        </div>
    </div>
    <!-- /Preload -->
    <!-- header area start -->
    <div class="header-top">
            <div class="header-top-inner">
                <div class="left-icon"><img src="/assets/images/icon/green-left.svg" alt=""></div>
                <p class="text">WE ARE AVAILABLE FOR <span>DECEMBER PROJECTS</span></p>
                <div class="right-icon"><img src="/assets/images/icon/green-right.svg" alt=""></div>
            </div>
    <header class="header-style-one header--sticky">
        </div>
        <div class="container">
            <div class="header-style-one-wrapper">
                <div class="left-area square-dot">
                    <div class="logo-area">
                        <a href="/" class="logo">
                            <img src="/assets/images/logo/header-logo.png" alt="logo">
                        </a>
                    </div>
                    <span class="square-shape top-left"></span>
                    <span class="square-shape bottom-left"></span>
                    <span class="square-shape top-right"></span>
                    <span class="square-shape bottom-right"></span>
                </div>
                <nav class="main-nav-area">
                    <ul class="list-unstyled wpr-desktop-menu">
                        <li class="menu-item">
                            <a class="main-element wpr-dropdown-main-element active" href="/">HOME</a>
                        </li>
                        <li class="menu-item"><a class="main-element" href="/about">ABOUT US</a></li>
                        <li class="menu-item has-dropdown">
                            <a class="main-element wpr-dropdown-main-element" href="/services">SERVICES</a>
                            <ul class="sub-menu">
                                <li class="sub-menu-item">
                                    <a href="/services" class="item-link link1">SERVICE</a>
                                </li>
                                <li class="sub-menu-item">
                                    <a href="/services/details" class="item-link link1">SERVICES SINGLE</a>
                                </li>
                            </ul>
                        </li>
                        <li class="menu-item has-dropdown">
                            <a class="main-element wpr-dropdown-main-element" href="/works">WORKS</a>
                            <ul class="sub-menu">
                                <li class="sub-menu-item">
                                    <a href="/works" class="item-link link1">WORKS</a>
                                </li>
                                <li class="sub-menu-item">
                                    <a href="/works/details" class="item-link link1">WORK SINGLE</a>
                                </li>
                            </ul>
                        </li>
                        <li class="menu-item has-dropdown">
                            <a class="main-element wpr-dropdown-main-element" href="/works">BLOG</a>
                            <ul class="sub-menu">
                                <li class="sub-menu-item">
                                    <a href="/blog" class="item-link link1">BLOG STANDARD</a>
                                </li>
                                <li class="sub-menu-item">
                                    <a href="/blog/two-columns" class="item-link link1">BLOG GRID 2</a>
                                </li>
                                <li class="sub-menu-item">
                                    <a href="/blog/three-columns" class="item-link link1">BLOG GRID 3</a>
                                </li>
                                <li class="sub-menu-item">
                                    <a href="/blog/single" class="item-link link1">BLOG SINGLE</a>
                                </li>
                            </ul>
                        </li>
                        <li class="menu-item"><a class="main-element wpr-dropdown-main-element" href="/contact">CONTACT</a></li>
                    </ul>
                </nav>
                <div class="button-area-start square-dot">
                    <a href="#contact" class="wpr-btn btn-primary">
                        Start a Project
                    </a>
                    <div class="menu-btn d-flex d-lg-none d-md-flex d-sm-flex" id="menu-btn">
                        <span class="line one"></span>
                        <span class="line two"></span>
                    </div>
                    <span class="square-shape top-left"></span>
                    <span class="square-shape bottom-left"></span>
                    <span class="square-shape top-right"></span>
                    <span class="square-shape bottom-right"></span>
                </div>
                <div id="side-bar" class="side-bar">
                    <div class="sidebar-inner">
                        <!-- mobile menu area start -->
                        <div class="mobile-menu-main">
                            <nav class="nav-main mainmenu-nav">
                                <ul class="list-unstyled wpr-desktop-menu" id="mobile-menu">

                                    <!-- HOME -->
                                    <li class="menu-item">
                                        <a class="main-element" href="/">HOME</a>
                                    </li>

                                    <!-- ABOUT -->
                                    <li class="menu-item">
                                        <a class="main-element" href="/about">ABOUT US</a>
                                    </li>

                                    <!-- SERVICES -->
                                    <li class="menu-item">
                                        <button class="main-element collapsed w-100 text-start bg-transparent border-0" data-bs-toggle="collapse" data-bs-target="#serviceMenu" aria-expanded="false" aria-controls="serviceMenu">
                                            SERVICES
                                        </button>

                                        <ul id="serviceMenu" class="collapse list-unstyled ps-3" data-bs-parent="#mobile-menu">

                                            <li><a href="/services" class="sub-menu">Services</a></li>
                                            <li><a href="/services/details" class="sub-menu">Service Details</a></li>
                                        </ul>
                                    </li>

                                    <!-- PROJECTS -->
                                    <li class="menu-item">
                                        <button class="main-element collapsed w-100 text-start bg-transparent border-0" data-bs-toggle="collapse" data-bs-target="#workMenu" aria-expanded="false" aria-controls="workMenu">
                                            WORKS
                                        </button>

                                        <ul id="workMenu" class="collapse list-unstyled ps-3" data-bs-parent="#mobile-menu">

                                            <li><a href="/works" class="sub-menu">WORKS</a></li>
                                            <li><a href="/works/details" class="sub-menu">WORK SINGLE</a></li>
                                        </ul>
                                    </li>

                                    <!-- PROJECTS -->
                                    <li class="menu-item">
                                        <button class="main-element collapsed w-100 text-start bg-transparent border-0" data-bs-toggle="collapse" data-bs-target="#blogMenu" aria-expanded="false" aria-controls="blogMenu">
                                            BLOG
                                        </button>

                                        <ul id="blogMenu" class="collapse list-unstyled ps-3" data-bs-parent="#mobile-menu">
                                            <li><a href="/blog" class="sub-menu">BLOG STANDARD</a></li>
                                            <li><a href="/blog/two-columns" class="sub-menu">BLOG GRID 2</a></li>
                                            <li><a href="/blog/three-columns" class="sub-menu">BLOG GRID 3</a></li>
                                            <li><a href="/blog/single" class="sub-menu">BLOG SINGLE</a></li>
                                        </ul>
                                    </li>

                                    <!-- CONTACT -->
                                    <li class="menu-item">
                                        <a class="main-element" href="/contact">CONTACT</a>
                                    </li>

                                </ul>
                            </nav>
                        </div>
                        <!-- mobile menu area end -->
                        <div class="button-area">
                            <a href="/contact" class="wpr-btn btn-primary">
                                Contact
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <!-- header area end -->

    <!-- wpr banner area start -->
    <section class="wpr-banner-area breadcrumb error-page">
        <div class="container">
            <div class="banner-content-area">
                <h1 class="section-title text-normal wow scaleIn" data-wow-delay=".7s">
                    404 Page Not Found
                </h1>
                <p class="desc"> Sorry, we couldn't find the page you where looking for. <br>
                    We suggest that you return to homepage.</p>
                <div class="button-area">
                    <a href="#services" class="wpr-btn btn-primary with-icon">
                        <div class="inner">
                            <div class="icon">
                                <span>
                                        <img src="/assets/images/icon/button-arrow.svg" alt="">
                                    </span>
                                <span>
                                        <img src="/assets/images/icon/button-arrow.svg" alt="">
                                    </span>
                                <span>
                                        <img src="/assets/images/icon/button-arrow.svg" alt="">
                                    </span>
                                <span>
                                        <img src="/assets/images/icon/button-arrow.svg" alt="">
                                    </span>
                                <span>
                                        <img src="/assets/images/icon/button-arrow.svg" alt="">
                                    </span>
                                <span>
                                        <img src="/assets/images/icon/button-arrow.svg" alt="">
                                    </span>
                            </div>
                        </div>
                        Back To Home
                    </a>
                </div>
                <div class="bg-shape">
                    <img src="/assets/images/banner/shape/bg-shape.svg" alt="">
                </div>
                <div class="banner-shape-area">
                    <img src="/assets/images/banner/shape/shape-01.svg" width="200" alt="" class="one wow fadeInLeft" data-wow-delay=".5s">
                    <img src="/assets/images/banner/shape/shape-02.svg" width="220" alt="" class="two wow fadeInRight" data-wow-delay=".5s">
                </div>
            </div>
        </div>
    </section>
    <!-- wpr banner area end -->

    <!-- wpr footer area start -->
    <div class="wpr-footer-area">
        <div class="container">
            <div class="section-inner border-1">
                <div class="footer-top">
                    <ul>
                        <li><a href="/about">About Us</a></li>
                        <li class="square-dot"></li>
                        <li><a href="/services">Services</a></li>
                        <li class="square-dot"></li>
                        <li><a href="/works">Projects</a></li>
                        <li class="square-dot"></li>
                        <li><a href="#">Pricing Plan</a></li>
                    </ul>
                </div>
                <div class="footer-logo-area square-dot">
                    <a href="/"><img src="/assets/images/logo/footer-logo-new.png" alt=""></a>
                    <div class="shape one"><img src="/assets/images/logo/shape-01.svg" alt=""></div>
                    <div class="shape two"><img src="/assets/images/logo/shape-02.svg" alt=""></div>
                    <span class="square-shape top-left"></span>
                    <span class="square-shape top-right"></span>
                    <span class="square-shape bottom-left"></span>
                    <span class="square-shape bottom-right"></span>
                </div>
                <div class="copyright-area">
                    <div class="left-social-area">
                        <ul>
                            <li><a href="https://www.facebook.com/digicarehouseagency">Facebook</a></li>
                            <li><a href="https://www.youtube.com/@digicarehouseagency">Youtube</a></li>
                            <li><a href="http://linkedin.com/company/digicarehouseagency">LinkedIn</a></li>
                            <li><a href="https://www.instagram.com/digicarehouseagency/">Instagram</a></li>
                        </ul>
                    </div>
                    <p class="copyright">
                        ©
                         DigiCareHouse. All Rights Reserved
                    </p>
                    <button class="scroll-top-btn">
                        Back to Top
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 3.29688L7.64062 3.64062L1.39062 9.89062L2.10938 10.6094L8 4.71875L13.8906 10.6094L14.6094 9.89062L8.35938 3.64062L8 3.29688Z" fill="black" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </div>
    <!-- wpr footer area end -->

    <!-- offcanvase search -->
    <div class="search-input-area">
        <div class="container">
            <div class="search-input-inner">
                <div class="input-div">
                    <input class="search-input autocomplete" type="text" placeholder="Search by keyword or #">
                    <button><i class="far fa-search"></i></button>
                </div>
            </div>
        </div>
        <div id="close" class="search-close-icon"><i class="far fa-times"></i></div>
    </div>


    <!-- side bar area  -->

    <!-- side abr area end -->

    <button id="goTop" class="show">
        <span class="border-progress" style="--progress-angle: 360deg;"></span>
        <span class="ic-wrap">
        <span class="icon icon-long-arrow-alt-up-solid"><i class="fa-sharp fa-regular fa-arrow-up-long"></i></span>
        </span>
    </button>


    <!-- jquery js -->
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    <!-- contact form js -->` }} />
  );
}
