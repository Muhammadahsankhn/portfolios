import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services - DigiCareHouse",
  description: "Your Ultimate Solution for Creative Agency",
};

export default function Page() {
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
                            <a class="main-element wpr-dropdown-main-element" href="/">HOME</a>
                        </li>
                        <li class="menu-item"><a class="main-element" href="/about">ABOUT US</a></li>
                        <li class="menu-item has-dropdown active">
                            <a class="main-element wpr-dropdown-main-element" href="#">SERVICES</a>
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
                            <a class="main-element wpr-dropdown-main-element" href="#">WORKS</a>
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
                            <a class="main-element wpr-dropdown-main-element" href="#">BLOG</a>
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
    <section class="wpr-banner-area breadcrumb">
        <div class="container">
            <div class="banner-content-area">
                <h1 class="section-title text-normal wow scaleIn" data-wow-delay=".7s">
                    We build functional <br> digital experiences.
                </h1>
                <p class="desc"> We turn ideas into meaningful digital experiences through thoughtful strategy and
                    refined design. <br>
                    Our approach blends creativity, technology, and purpose to build brands that last.</p>
                <div class="bg-shape">
                    <img src="/assets/images/banner/shape/bg-shape.svg" alt="">
                </div>
                <div class="banner-shape-area">
                    <img src="/assets/images/banner/shape/shape-01.svg" width="200" alt="" class="one wow fadeInLeft" data-wow-delay=".5s">
                    <img src="/assets/images/banner/shape/shape-02.svg" width="200" alt="" class="two wow fadeInLeft" data-wow-delay=".5s">
                </div>
            </div>
        </div>
    </section>
    <!-- wpr banner area end -->
    <!-- wpr services area start -->
    <section class="wpr-services-area inner mb--16">
        <div class="container">
            <div class="section-inner bg-white border-1">
                <div class="section-top-area">
                    <div class="section-title-area center-style">
                        <p class="sub-title">SERVICES</p>
                        <h2 class="section-title second-font font-semi-bold text-normal wpr-text-anime-style-1">We Build
                            We Create </h2>
                    </div>
                </div>
                <div class="section-bottom-content square-dot">
                    <div class="service-wrapper wow fadeInRight" data-wow-delay=".2s">
                        <div class="image-area">
                            <img src="/assets/images/service/mobile-app.jpg" alt="">
                        </div>
                        <div class="content">
                            <div class="top">
                                <p class="tag">MOBILE APPLICATION</p>
                                <p class="desc">We build high-performance, user-centric mobile applications that deliver
                                    seamless experiences across iOS and Android.</p>
                            </div>
                            <div class="mid">
                                <h2>01</h2>
                            </div>
                            <div class="bottom">
                                <ul>
                                    <li>Native App Development</li>
                                    <li>Cross-Platform Apps</li>
                                    <li>Mobile UI/UX Design</li>
                                    <li>App Store Optimization</li>
                                </ul>
                                <a href="/services/details" class="service-btn-area">
                                    <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.07812 0L0 1.07812L7.71094 8.78906L0 16.5L1.07812 17.5781L9.32812 9.32812L9.84375 8.78906L9.32812 8.25L1.07812 0Z" fill="black" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="service-wrapper wow fadeInRight" data-wow-delay=".4s">
                        <div class="image-area">
                            <img src="/assets/images/service/video-production.jpg" alt="">
                        </div>
                        <div class="content">
                            <div class="top">
                                <p class="tag">VIDEO PRODUCTION</p>
                                <p class="desc">We produce compelling visual stories that captivate your audience, from
                                    concept to final cut, elevating your brand.</p>
                            </div>
                            <div class="mid">
                                <h2>02</h2>
                            </div>
                            <div class="bottom">
                                <ul>
                                    <li>Commercials & Promos</li>
                                    <li>Corporate Videos</li>
                                    <li>Animation & Motion</li>
                                    <li>Post-Production</li>
                                </ul>
                                <a href="/services/details" class="service-btn-area">
                                    <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.07812 0L0 1.07812L7.71094 8.78906L0 16.5L1.07812 17.5781L9.32812 9.32812L9.84375 8.78906L9.32812 8.25L1.07812 0Z" fill="black" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="service-wrapper wow fadeInRight" data-wow-delay=".6s">
                        <div class="image-area">
                            <img src="/assets/images/service/design-branding.png" alt="">
                        </div>
                        <div class="content">
                            <div class="top">
                                <p class="tag">UI/UX DESIGN</p>
                                <p class="desc">We create digital experiences that are visually striking, intuitive, and
                                    conversion-focused.</p>
                            </div>
                            <div class="mid">
                                <h2>03</h2>
                            </div>
                            <div class="bottom">
                                <ul>
                                    <li>User Research</li>
                                    <li>Information Architecture</li>
                                    <li>Wireframes & Prototyping</li>
                                    <li>Usability Testing</li>
                                </ul>
                                <a href="/services/details" class="service-btn-area">
                                    <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.07812 0L0 1.07812L7.71094 8.78906L0 16.5L1.07812 17.5781L9.32812 9.32812L9.84375 8.78906L9.32812 8.25L1.07812 0Z" fill="black" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="service-wrapper wow fadeInRight" data-wow-delay=".8s">
                        <div class="image-area">
                            <img src="/assets/images/service/ecommerce-volt.png" alt="">
                        </div>
                        <div class="content">
                            <div class="top">
                                <p class="tag">CREATIVE DIRECTION</p>
                                <p class="desc">We create digital experiences that are visually striking, intuitive, and
                                    conversion-focused.</p>
                            </div>
                            <div class="mid">
                                <h2>04</h2>
                            </div>
                            <div class="bottom">
                                <ul>
                                    <li>Visual Campaign</li>
                                    <li>Art Direction</li>
                                    <li>Photography Guidance</li>
                                    <li>Brand Tone</li>
                                </ul>
                                <a href="/services/details" class="service-btn-area">
                                    <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.07812 0L0 1.07812L7.71094 8.78906L0 16.5L1.07812 17.5781L9.32812 9.32812L9.84375 8.78906L9.32812 8.25L1.07812 0Z" fill="black" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    <span class="square-shape top-left"></span>
                    <span class="square-shape top-right"></span>
                </div>
                <div class="section-bottom-content square-dot">
                    <div class="service-wrapper wow fadeInRight" data-wow-delay=".2s">
                        <div class="image-area">
                            <img src="/assets/images/service/design-branding.png" alt="">
                        </div>
                        <div class="content">
                            <div class="top">
                                <p class="tag">DIGITAL MARKETING</p>
                                <p class="desc">We drive targeted traffic and boost your brand visibility through data-driven marketing strategies.</p>
                            </div>
                            <div class="mid">
                                <h2>05</h2>
                            </div>
                            <div class="bottom">
                                <ul>
                                    <li>Social Media Marketing</li>
                                    <li>Search Engine Marketing</li>
                                    <li>Content Strategy</li>
                                    <li>Email Campaigns</li>
                                </ul>
                                <a href="/services/details" class="service-btn-area">
                                    <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.07812 0L0 1.07812L7.71094 8.78906L0 16.5L1.07812 17.5781L9.32812 9.32812L9.84375 8.78906L9.32812 8.25L1.07812 0Z" fill="black" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="service-wrapper wow fadeInRight" data-wow-delay=".4s">
                        <div class="image-area">
                            <img src="/assets/images/service/mobile-app.jpg" alt="">
                        </div>
                        <div class="content">
                            <div class="top">
                                <p class="tag">MOBILE APP DESIGN</p>
                                <p class="desc">We design intuitive and engaging mobile apps that deliver seamless user experiences across devices.</p>
                            </div>
                            <div class="mid">
                                <h2>06</h2>
                            </div>
                            <div class="bottom">
                                <ul>
                                    <li>App UI/UX Design</li>
                                    <li>User Flow Mapping</li>
                                    <li>Interactive Prototypes</li>
                                    <li>App Design Systems</li>
                                </ul>
                                <a href="/services/details" class="service-btn-area">
                                    <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.07812 0L0 1.07812L7.71094 8.78906L0 16.5L1.07812 17.5781L9.32812 9.32812L9.84375 8.78906L9.32812 8.25L1.07812 0Z" fill="black" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="service-wrapper wow fadeInRight" data-wow-delay=".6s">
                        <div class="image-area">
                            <img src="/assets/images/service/ecommerce-volt.png" alt="">
                        </div>
                        <div class="content">
                            <div class="top">
                                <p class="tag">E-COMMERCE SOLUTIONS</p>
                                <p class="desc">We build scalable e-commerce platforms that enhance shopping experiences and maximize conversions.</p>
                            </div>
                            <div class="mid">
                                <h2>07</h2>
                            </div>
                            <div class="bottom">
                                <ul>
                                    <li>Online Store Development</li>
                                    <li>Payment Integration</li>
                                    <li>Product UX Optimization</li>
                                    <li>Conversion Tracking</li>
                                </ul>
                                <a href="/services/details" class="service-btn-area">
                                    <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.07812 0L0 1.07812L7.71094 8.78906L0 16.5L1.07812 17.5781L9.32812 9.32812L9.84375 8.78906L9.32812 8.25L1.07812 0Z" fill="black" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="service-wrapper wow fadeInRight" data-wow-delay=".8s">
                        <div class="image-area">
                            <img src="/assets/images/service/video-production.jpg" alt="">
                        </div>
                        <div class="content">
                            <div class="top">
                                <p class="tag">WEB PERFORMANCE</p>
                                <p class="desc">We optimize websites for speed, performance, and SEO to ensure better user engagement and rankings.</p>
                            </div>
                            <div class="mid">
                                <h2>08</h2>
                            </div>
                            <div class="bottom">
                                <ul>
                                    <li>Speed Optimization</li>
                                    <li>Core Web Vitals Fix</li>
                                    <li>Technical SEO</li>
                                    <li>Performance Audits</li>
                                </ul>
                                <a href="/services/details" class="service-btn-area">
                                    <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.07812 0L0 1.07812L7.71094 8.78906L0 16.5L1.07812 17.5781L9.32812 9.32812L9.84375 8.78906L9.32812 8.25L1.07812 0Z" fill="black" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    <span class="square-shape top-left"></span>
                    <span class="square-shape top-right"></span>
                </div>
                <div class="bottom-shape-area square-dot">
                    <img src="/assets/images/about/shape-02.svg" alt="">
                    <span class="square-shape top-left"></span>
                    <span class="square-shape bottom-left"></span>
                    <span class="square-shape top-right"></span>
                    <span class="square-shape bottom-right"></span>
                </div>
            </div>
        </div>
    </section>
    <!-- wpr services area end -->

    <!-- wpr brand area start -->
    <div class="wpr-brand-area mb--16">
        <div class="container">
            <div class="section-inner square-dot">
                <div class="left-text">
                    <p>//WE’VE <br> TRUSTED BY</p>
                </div>
                <div class="right-marquee-area">
                    <div class="brand-inner">
                        <div class="brand-wrapper">
                            <img src="/assets/images/brand/new-brand-1.png" alt="">
                        </div>
                        <div class="brand-wrapper">
                            <img src="/assets/images/brand/new-brand-2.png" alt="">
                        </div>
                        <div class="brand-wrapper">
                            <img src="/assets/images/brand/new-brand-3.png" alt="">
                        </div>
                        <div class="brand-wrapper">
                            <img src="/assets/images/brand/new-brand-4.png" alt="">
                        </div>
                        <div class="brand-wrapper">
                            <img src="/assets/images/brand/new-brand-5.png" alt="">
                        </div>
                        <div class="brand-wrapper">
                            <img src="/assets/images/brand/new-brand-6.png" alt="">
                        </div>
                        <div class="brand-wrapper">
                            <img src="/assets/images/brand/new-brand-7.png" alt="">
                        </div>
                        
                        
                        <div class="brand-wrapper">
                            <img src="/assets/images/brand/new-brand-1.png" alt="">
                        </div>
                        <div class="brand-wrapper">
                            <img src="/assets/images/brand/new-brand-2.png" alt="">
                        </div>
                        <div class="brand-wrapper">
                            <img src="/assets/images/brand/new-brand-3.png" alt="">
                        </div>
                        <div class="brand-wrapper">
                            <img src="/assets/images/brand/new-brand-4.png" alt="">
                        </div>
                        <div class="brand-wrapper">
                            <img src="/assets/images/brand/new-brand-5.png" alt="">
                        </div>
                        <div class="brand-wrapper">
                            <img src="/assets/images/brand/new-brand-6.png" alt="">
                        </div>
                        <div class="brand-wrapper">
                            <img src="/assets/images/brand/new-brand-7.png" alt="">
                        </div>
                        
                        
                    </div>
                </div>
                <span class="square-shape top-left"></span>
                <span class="square-shape bottom-left"></span>
                <span class="square-shape top-right"></span>
                <span class="square-shape bottom-right"></span>
            </div>
        </div>
    </div>
    <!-- wpr brand area end -->

    <!-- wpr working process area start -->
    <section class="wpr-working-process mb--16">
        <div class="container">
            <div class="section-inner bg-white border-1">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="working-process-left">
                            <div class="section-title-area">
                                <p class="sub-title">PROCESS</p>
                                <h2 class="section-title second-font font-semi-bold text-normal quote">Combine
                                    Creativity <br>
                                    With Strategy</h2>
                            </div>
                            <div class="text-area">
                                <p class="desc">Every step designed to deliver clarity, impact, and results.</p>
                                <a href="#" class="wpr-btn btn-primary with-icon">
                                    <div class="inner">
                                        <div class="icon">
                                            <span class="fixed-arrow">
                                                <img src="/assets/images/icon/button-arrow-fixed.svg" alt="">
                                            </span>
                                            <span>
                                                <img src="/assets/images/icon/button-arrow-2.svg" alt="">
                                            </span>
                                            <span>
                                                <img src="/assets/images/icon/button-arrow-2.svg" alt="">
                                            </span>
                                            <span>
                                                <img src="/assets/images/icon/button-arrow-2.svg" alt="">
                                            </span>
                                            <span>
                                                <img src="/assets/images/icon/button-arrow-2.svg" alt="">
                                            </span>
                                        </div>
                                    </div>
                                    Start a Project
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="right-content-area">
                            <div class="working-process-wrapper">
                                <div class="image-area">
                                    <img src="/assets/images/working-process/01.jpg" alt="">
                                </div>
                                <div class="content-area">
                                    <div class="number">//01</div>
                                    <div class="wrapper-content">
                                        <h3 class="title second-font h6">Discover & Define</h3>
                                        <p class="desc">We start by understanding your goals, audience, and challenges.
                                            Through research and workshops, we uncover insights of the project.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="working-process-wrapper">
                                <div class="image-area">
                                    <img src="/assets/images/working-process/02.jpg" alt="">
                                </div>
                                <div class="content-area">
                                    <div class="number">//02</div>
                                    <div class="wrapper-content">
                                        <h3 class="title second-font h6">Concept & Strategy</h3>
                                        <p class="desc">We explore visual styles, narratives, and user flows to define
                                            the strategic and aesthetic direction of your brand or product.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="working-process-wrapper">
                                <div class="image-area">
                                    <img src="/assets/images/working-process/03.jpg" alt="">
                                </div>
                                <div class="content-area">
                                    <div class="number">//03</div>
                                    <div class="wrapper-content">
                                        <h3 class="title second-font h6">Design & Develop</h3>
                                        <p class="desc">Every layout, color, and interaction is thoughtfully crafted to
                                            ensure your brand feels cohesive, functional, and memorable.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="working-process-wrapper">
                                <div class="image-area">
                                    <img src="/assets/images/working-process/04.jpg" alt="">
                                </div>
                                <div class="content-area">
                                    <div class="number">//04</div>
                                    <div class="wrapper-content">
                                        <h3 class="title second-font h6">Launch & Evolve</h3>
                                        <p class="desc">We guide you through launch and beyond - analyzing performance,
                                            gathering feedback, and refining your design.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="bottom-shape-area bg-white square-dot">
                <img src="/assets/images/about/shape-02.svg" alt="">
                <span class="square-shape top-left"></span>
                <span class="square-shape bottom-left"></span>
                <span class="square-shape top-right"></span>
                <span class="square-shape bottom-right"></span>
            </div>
        </div>
    </section>
    <!-- wpr working process area end -->

    <!-- wpr faq area start -->
    <section class="wpr-faq-area mb--16">
        <div class="container">
            <div class="section-inner bg-white border-1">
                <div class="section-content-area">
                    <div class="section-title-area center-style">
                        <p class="sub-title">FAQS</p>
                        <h2 class="section-title second-font font-semi-bold text-normal">FAQs </h2>
                    </div>
                    <div class="accordion-one" id="accordionExample2">

                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingSix">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                    What if I only need one specific service?
                                </button>
                            </h2>
                            <div id="collapseSix" class="accordion-collapse collapse" role="region" aria-labelledby="headingSix" data-bs-parent="#accordionExample2">
                                <div class="accordion-body">
                                    <p class="desc">
                                        Absolutely — you don’t need to book a full package. Whether it’s a brand refresh, a website redesign, or UI/UX for a single product, we tailor our approach to match your exact needs and budget.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingSeven">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                                    How long does a typical project take?
                                </button>
                            </h2>
                            <div id="collapseSeven" class="accordion-collapse collapse" role="region" aria-labelledby="headingSeven" data-bs-parent="#accordionExample2">
                                <div class="accordion-body">
                                    <p class="desc">
                                        Project timelines depend on the scope — most branding projects take 3–4 weeks, while full website or product design projects typically range from 6–8 weeks. We’ll confirm an exact timeline during the discovery phase.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingEight">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="true" aria-controls="collapseEight">
                                    Do you work with clients internationally?
                                </button>
                            </h2>
                            <div id="collapseEight" class="accordion-collapse collapse show" role="region" aria-labelledby="headingEight" data-bs-parent="#accordionExample2">
                                <div class="accordion-body">
                                    <p class="desc">
                                        Yes. We collaborate with clients around the world through remote workshops, video calls, and real-time communication tools — ensuring a smooth process regardless of location.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingNine">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
                                    Can you handle both design and development?
                                </button>
                            </h2>
                            <div id="collapseNine" class="accordion-collapse collapse" role="region" aria-labelledby="headingNine" data-bs-parent="#accordionExample2">
                                <div class="accordion-body">
                                    <p class="desc">
                                        Yes. While our core focus is design, we partner with trusted developers to bring your project to life with high-quality, responsive code — ensuring seamless design-to-development handoff.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingTen">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
                                    How do we start a project with your team?
                                </button>
                            </h2>
                            <div id="collapseTen" class="accordion-collapse collapse" role="region" aria-labelledby="headingTen" data-bs-parent="#accordionExample2">
                                <div class="accordion-body">
                                    <p class="desc">
                                        Simply reach out through our contact form or email. We’ll schedule a short discovery call to learn about your goals, then provide a proposal tailored to your needs.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div class="top-left-shape">
                        <img src="/assets/images/faq/top-left-shape.svg" alt="">
                    </div>
                    <div class="bg-shape">
                        <img src="/assets/images/faq/grid.svg" alt="">
                    </div>
                </div>
                <div class="bottom-shape-area square-dot">
                    <img src="/assets/images/about/shape-02.svg" alt="">
                    <span class="square-shape top-left"></span>
                    <span class="square-shape bottom-left"></span>
                    <span class="square-shape top-right"></span>
                    <span class="square-shape bottom-right"></span>
                </div>
            </div>
        </div>
    </section>
    <!-- wpr faq area end -->

    <!-- wpr cta area start -->
    <section class="wpr-cta-area">
        <div class="container">
            <div class="section-inner border-1">
                <div class="section-title-area">
                    <h2 class="section-title">LET’s start <br> your project</h2>
                    <div class="logo"><img src="/assets/images/logo/header-logo.png" alt=""></div>
                    <div class="arrow-track right">
                        <div class="arrow"><img src="/assets/images/cta/arrow-left.svg" alt=""></div>
                        <div class="arrow"><img src="/assets/images/cta/arrow-left.svg" alt=""></div>
                        <div class="arrow"><img src="/assets/images/cta/arrow-left.svg" alt=""></div>
                    </div>
                    <div class="arrow-track left">
                        <div class="arrow"><img src="/assets/images/cta/arrow-right.svg" alt=""></div>
                        <div class="arrow"><img src="/assets/images/cta/arrow-right.svg" alt=""></div>
                        <div class="arrow"><img src="/assets/images/cta/arrow-right.svg" alt=""></div>
                    </div>
                </div>
                <div class="bg-shape"><img src="/assets/images/cta/grid.svg" alt=""></div>
                <div class="section-bottom-shape">
                    <img src="/assets/images/cta/graphic.svg" alt="">
                    <span class="tag left">IMPACTFUL CREATIVE</span>
                    <span class="tag right">GLOBAL SUPPORT</span>
                </div>
            </div>
        </div>
    </section>
    <!-- wpr cta area end -->

    <!-- wpr contact area start -->
    <section id="contact" class="wpr-contact-area mb--16">
        <div class="container">
            <div class="section-inner">
                <div class="left-content-area">
                    <div class="get-in-touch">
                        <p class="sub-title">CONTACT</p>
                        <ul>
                            <li><a href="#">hello@digicarehouse.com</a></li>
                            <li><a href="#">(+1) 123 456-7890</a></li>
                        </ul>
                    </div>
                    <div class="location-area">
                        <p class="sub-title">OFFFICES</p>
                        <ul>
                            <li>
                                <h2 class="h4">Montréal</h2>
                                <p>4200 Saint Laurent Blvd, Suite 305 <br> Montreal, QC H2W 2R2 <br> Canada</p>
                            </li>
                            <li>
                                <h2 class="h4">Texas</h2>
                                <p>1920 McKinney Avenue, 7th Floor <br> Dallas, TX 75201 <br> United States</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="contact-form-area">
                    <form id="contact-form" action="mailer.php" method="POST" enctype="multipart/form-data">
                        <div class="single-input">
                            <label for="name">/YOUR NAME</label>
                            <input type="text" id="name" name="name" placeholder="Enter your full name">
                        </div>
                        <div class="single-input">
                            <label for="email">/YOUR E-MAIL</label>
                            <input type="email" id="email" name="email" placeholder="Enter your e-mail">
                        </div>
                        <div class="single-input">
                            <label for="message">/MORE ABOUT THE PROJECT</label>
                            <textarea id="message" name="message" placeholder="Leave us message" required></textarea>
                        </div>
                        <div class="single-input last">
                            <label for="upload-attachment">
                                <i class="fa-sharp-duotone fa-light fa-paperclip"></i> Add an Attachment
                                <input type="file" name="file" id="upload-attachment">
                            </label>
                        </div>
                        <div class="form-btn-area">
                            <button type="submit" class="wpr-btn">Submit Message</button>
                        </div>
                        <div id="form-messages"></div>
                    </form>
                </div>
            </div>
        </div>
    </section>
    <!-- wpr contact area end -->


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
                            <li><a href="#">Instagram</a></li>
                            <li><a href="#">Linkedin</a></li>
                            <li><a href="#">Dribbble</a></li>
                            <li><a href="#">Behance</a></li>
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
