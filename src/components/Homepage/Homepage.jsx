import React from 'react';

function Homepage() {
  return (
    <div>
  <header className="header-area sticky">
    <div className="container">
      <div className="row">
        <div className="col-xl-5 col-lg-3">
          <div className="row">
            <div className="col-xl-3 col-lg-3">
              <div className="header-logo">
                <div>LOGO</div>
              </div>
            </div>
            {/* <div className="col-xl-7 d-none d-xl-block">
              <div className="header-search-box">
                <form action="#">
                  <i className="pe-7s-search" />
                  <input placeholder="Search items, collections, accounts" type="search" />
                </form>
              </div>
            </div> */}
          </div>
        </div>
        <div className="col-xl-7 col-lg-9">
          <div className="row">
            <div className="col-xl-7 col-lg-8">
              <div className="mobile-menu">
                <nav id="mobile-menu">
                  <div className="header-menu">
                    <ul>
                      <li><a href="/app"> Explore </a> 
                      </li>
                      <li><a href="#"> Pages </a>
                      </li>
                      <li><a href="#"> Blogs </a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
            <div className="col-xl-5 col-lg-4 d-none d-lg-block">
              <div className="header-right-btn">
                <div className="header-main-btn">
                  <a href="#" className="btn">Create</a>
                </div>
                <div className="header-icon">
                  <ul>
                    <li><span className="text-white cursor-pointer" onclick="userMenuWrapperActive()"> <i className="fa-solid fa-user" /> </span>
                      <ul id="use_deshboad_menu" className="profile-dropdown-wrap">
                        <li><a href="#">
                            <h3>Jonathon Doe</h3>
                          </a></li>
                        <li>
                          <div className="user-balance clearfix">
                            <div className="user-b-img-left f-left"><img src="/assets/img//balance.png" alt /></div>
                            <div className="user-b-wrap-right f-right">
                              <span>Balance</span>
                              <h4>133.25 ETH</h4>
                            </div>
                          </div>
                        </li>
                        <li>  <a href="my-profile.html"> <img src="/assets/img//user2.png" alt /> My Profile</a> </li>
                        <li>  <a href="#"> <img src="/assets/img//dollar-sign2.png" alt /> Manage Funds</a> </li>
                        <li>  <a href="https://quomodosoft.com/collection-activity.html"> <img src="/assets/img//columns.png" alt /> My Collections</a> </li>
                        <li> <a href="#"> <img src="/assets/img//heart.png" alt /> Favorites</a> </li>
                        <li> <a href="#"> <img src="/assets/img//settings.png" alt /> Settings</a> </li>
                        <li>  <a href="#"> <img src="/assets/img//log-out.png" alt /> Log Out</a> </li>
                      </ul>
                    </li>
                    <li className="menu-ml"><a href="#"> <i className="fa-brands fa-gitlab" /> </a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  {/* header-area end */}
  {/* hero-area start */}
  <section className="hero-area pb-120">
    <div className="container">
      <div className="row">
        <div className="col-xl-6 col-lg-6 col-md-12">
          <div className="hero-left-content">
            <h2>Explore, Collect, and Sell NFTs</h2>
            <p>On the world's Best &amp; largest NFT marketplace</p>
            <div className="hero-btn">
              <a href="/app" className="btn">Explore</a>
              <a href="/app" className="btn hero-sec-btn">Create</a>
            </div>
          </div>
        </div>
        <div className="col-xl-6 col-lg-6 con-md-6">
          <div className="row mt-50">
            <div className="col-xl-6 col-lg-6 col-md-6 mb-30">
              <div className="hero-right-area wow fadeInUp" data-wow-delay=".3s">
                <div className="hero-right-img">
                  <a href="#"> <img src="/assets/img/home-01/10.jpg" alt /></a>
                </div>
                <div className="single-hero-meta">
                  <img src="/assets/img/home-01/avatar.png" alt />
                  <div className="hero-meta-text">
                    <a href="#"><h4>User centered</h4></a>
                    <span>$180,583</span>
                  </div>
                </div>
              </div>
            </div>  
            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="hero-right-area wow fadeInRight" data-wow-delay=".3s">
                <div className="hero-right-img">
                  <a href="#"><img src="/assets/img/home-01/11.png" alt /></a>
                </div>
                <div className="single-hero-meta">
                  <a href="#"><img src="/assets/img/home-01/Image-6.png" alt /></a>
                  <div className="hero-meta-text">
                    <a href="#"><h4>User centered</h4></a>
                    <span>$180,583</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* hero-area end */}
  {/* carousel-area start */}
  <section className="artist-carousel-area pt-100 pb-130">
    <div className="container">
      <div className="row">
        <div className="col-xl-12 col-lg-12 col-md-12">
          <div className="section-title pb-40">
            <h2> Live auctions </h2>
          </div>
        </div>
      </div>
      <div className="row artist-carousel-active wow fadeInUp" data-wow-delay=".3s">
        <div className="col-xl-3 col-lg-3 col-md-12">
          <div className="artist-single-carousel">
            <div className="carousel-img">
              <img src="/assets/img/home-01/1.png" alt />
              <a href="#" className="carousel-shap-btn"> Art </a>
            </div>
            <div className="artist-single-text-wrap clearfix">
              <div className="user-artist f-left">
                <img src="/assets/img/24_MyProfile/Profile_Image.png" alt />
                <div className="user-artits-name">
                  <a href="#"> User Artists </a>
                </div>
              </div>
              <div className="user-artist-right-text f-right">
                <h5>12 Days 7hrs <span>Left</span></h5>
              </div>                          
            </div>
            <div className="user-artitst-meta">
              <a href="product-details.html"><h3> The Rusty Robots </h3></a>
              <h4>Highest bid</h4>
              <ul className="clearfix">
                <li className="f-left"><span>1.05 ETH</span></li>
                <li className="f-right"> <a href="#"><i className="fa-solid fa-heart" /> <h5>40</h5> </a> </li>
              </ul>
            </div>
          </div>
        </div> 
        <div className="col-xl-3 col-lg-3 col-md-12">
          <div className="artist-single-carousel">
            <div className="carousel-img">
              <img src="/assets/img/home-01/2.png" alt />
              <a href="#" className="carousel-shap-btn"> Art </a>
            </div>
            <div className="artist-single-text-wrap clearfix">
              <div className="user-artist f-left">
                <img src="/assets/img/24_MyProfile/Profile_Image.png" alt />
                <div className="user-artits-name">
                  <a href="#"> User Artists </a>
                </div>
              </div>
              <div className="user-artist-right-text f-right">
                <h5>12 Days 7hrs <span>Left</span></h5>
              </div>                          
            </div>
            <div className="user-artitst-meta">
              <a href="product-details.html"><h3> The Rusty Robots </h3></a>
              <h4>Highest bid</h4>
              <ul className="clearfix">
                <li className="f-left"><span>1.05 ETH</span></li>
                <li className="f-right"> <a href="#"><i className="fa-solid fa-heart" /> <h5>40</h5> </a> </li>
              </ul>
            </div>
          </div>
        </div> 
        <div className="col-xl-3 col-lg-3 col-md-6">
          <div className="artist-single-carousel">
            <div className="carousel-img">
              <img src="/assets/img/home-01/3.png" alt />
              <a href="#" className="carousel-shap-btn"> Art </a>
            </div>
            <div className="artist-single-text-wrap clearfix">
              <div className="user-artist f-left">
                <img src="/assets/img/24_MyProfile/Profile_Image.png" alt />
                <div className="user-artits-name">
                  <a href="#"> User Artists </a>
                </div>
              </div>
              <div className="user-artist-right-text f-right">
                <h5>12 Days 7hrs <span>Left</span></h5>
              </div>                          
            </div>
            <div className="user-artitst-meta">
              <a href="product-details.html"><h3> The Rusty Robots </h3></a>
              <h4>Highest bid</h4>
              <ul className="clearfix">
                <li className="f-left"><span>1.05 ETH</span></li>
                <li className="f-right"> <a href="#"><i className="fa-solid fa-heart" /> <h5>40</h5> </a> </li>
              </ul>
            </div>
          </div>
        </div> 
        <div className="col-xl-3 col-lg-3">
          <div className="artist-single-carousel">
            <div className="carousel-img">
              <img src="/assets/img/home-01/4.png" alt />
              <a href="#" className="carousel-shap-btn"> Art </a>
            </div>
            <div className="artist-single-text-wrap clearfix">
              <div className="user-artist f-left">
                <img src="/assets/img/24_MyProfile/Profile_Image.png" alt />
                <div className="user-artits-name">
                  <a href="#"> User Artists </a>
                </div>
              </div>
              <div className="user-artist-right-text f-right">
                <h5>12 Days 7hrs <span>Left</span></h5>
              </div>                          
            </div>
            <div className="user-artitst-meta">
              <a href="product-details.html"><h3> The Rusty Robots </h3></a>
              <h4>Highest bid</h4>
              <ul className="clearfix">
                <li className="f-left"><span>1.05 ETH</span></li>
                <li className="f-right"> <a href="#"><i className="fa-solid fa-heart" /> <h5>40</h5> </a> </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-3">
          <div className="artist-single-carousel">
            <div className="carousel-img">
              <img src="/assets/img/home-01/1.png" alt />
              <a href="#" className="carousel-shap-btn"> Art </a>
            </div>
            <div className="artist-single-text-wrap clearfix">
              <div className="user-artist f-left">
                <img src="/assets/img/24_MyProfile/Profile_Image.png" alt />
                <div className="user-artits-name">
                  <a href="#"> User Artists </a>
                </div>
              </div>
              <div className="user-artist-right-text f-right">
                <h5>12 Days 7hrs <span>Left</span></h5>
              </div>                          
            </div>
            <div className="user-artitst-meta">
              <a href="product-details.html"><h3> The Rusty Robots </h3></a>
              <h4>Highest bid</h4>
              <ul className="clearfix">
                <li className="f-left"><span>1.05 ETH</span></li>
                <li className="f-right"> <a href="#"><i className="fa-solid fa-heart" /> <h5>40</h5> </a> </li>
              </ul>
            </div>
          </div>
        </div> 
        <div className="col-xl-3 col-lg-3">
          <div className="artist-single-carousel">
            <div className="carousel-img">
              <img src="/assets/img/home-01/2.png" alt />
              <a href="#" className="carousel-shap-btn"> Art </a>
            </div>
            <div className="artist-single-text-wrap clearfix">
              <div className="user-artist f-left">
                <img src="/assets/img/24_MyProfile/Profile_Image.png" alt />
                <div className="user-artits-name">
                  <a href="#"> User Artists </a>
                </div>
              </div>
              <div className="user-artist-right-text f-right">
                <h5>12 Days 7hrs <span>Left</span></h5>
              </div>                          
            </div>
            <div className="user-artitst-meta">
              <a href="product-details.html"><h3> The Rusty Robots </h3></a>
              <h4>Highest bid</h4>
              <ul className="clearfix">
                <li className="f-left"><span>1.05 ETH</span></li>
                <li className="f-right"> <a href="#"><i className="fa-solid fa-heart" /> <h5>40</h5> </a> </li>
              </ul>
            </div>
          </div>
        </div> 
        <div className="col-xl-3 col-lg-3">
          <div className="artist-single-carousel">
            <div className="carousel-img">
              <img src="/assets/img/home-01/3.png" alt />
              <a href="#" className="carousel-shap-btn"> Art </a>
            </div>
            <div className="artist-single-text-wrap clearfix">
              <div className="user-artist f-left">
                <img src="/assets/img/24_MyProfile/Profile_Image.png" alt />
                <div className="user-artits-name">
                  <a href="#"> User Artists </a>
                </div>
              </div>
              <div className="user-artist-right-text f-right">
                <h5>12 Days 7hrs <span>Left</span></h5>
              </div>                          
            </div>
            <div className="user-artitst-meta">
              <a href="product-details.html"><h3> The Rusty Robots </h3></a>
              <h4>Highest bid</h4>
              <ul className="clearfix">
                <li className="f-left"><span>1.05 ETH</span></li>
                <li className="f-right"> <a href="#"><i className="fa-solid fa-heart" /> <h5>40</h5> </a> </li>
              </ul>
            </div>
          </div>
        </div> 
        <div className="col-xl-3 col-lg-3">
          <div className="artist-single-carousel">
            <div className="carousel-img">
              <img src="/assets/img/home-01/4.png" alt />
              <a href="#" className="carousel-shap-btn"> Art </a>
            </div>
            <div className="artist-single-text-wrap clearfix">
              <div className="user-artist f-left">
                <img src="/assets/img/24_MyProfile/Profile_Image.png" alt />
                <div className="user-artits-name">
                  <a href="#"> User Artists </a>
                </div>
              </div>
              <div className="user-artist-right-text f-right">
                <h5>12 Days 7hrs <span>Left</span></h5>
              </div>                          
            </div>
            <div className="user-artitst-meta">
              <a href="product-details.html"><h3> The Rusty Robots </h3></a>
              <h4>Highest bid</h4>
              <ul className="clearfix">
                <li className="f-left"><span>1.05 ETH</span></li>
                <li className="f-right"> <a href="#"><i className="fa-solid fa-heart" /> <h5>40</h5> </a> </li>
              </ul>
            </div>
          </div>
        </div> 
      </div>
      <div className="row">
        <div className="col-xl-12 col-lg-3">
          <div className="artist-btn text-center">
            <a className="btn" href="#">View More</a>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* carousel-area end */}
  {/* top collection area start */}
  <section className="top-collection-area pb-60">
    <div className="container">
      <div className="row">
        <div className="col-xl-6 col-lg-6 col-md-12"> 
          <div className="top-collection-title">
            <h2> Top collection </h2>
          </div>  
        </div>
        <div className="col-xl-6 col-xl-6 col-md-12">
          <div className="top-collection-form text-end">
            <form action="#">
              <select className="nice_select text-right" name id>
                <option value> Last 1 Day </option>
                <option value> Last 2 Day </option>
                <option value> Last 3 Day </option>
                <option value> Last 4 Day </option>
                <option value> Last 5 Day </option>
              </select>
            </form>
          </div>
        </div>
      </div>
      <div className="row wow fadeIn" data-wow-delay=".3s">
        <div className="col-xl-3 col-lg-4">
          <div className="top-collect-wrapper">
            <ul>
              <li> <span>01</span> </li>
              <li><img src="/assets/img/Home-01/Image.png" alt /></li>
              <li className="collect-lst-list"> 
                <a href="#"><h3>Savannah Nguye</h3></a> 
                <h4>$219.78</h4>
              </li>
            </ul>
          </div>
        </div> <div className="col-xl-3 col-lg-4">
          <div className="top-collect-wrapper">
            <ul>
              <li> <span>02</span> </li>
              <li><img src="/assets/img/Home-01/Image-4.png" alt /></li>
              <li className="collect-lst-list"> 
                <a href="#"><h3> Jacob Jones </h3></a> 
                <h4>$219.78</h4>
              </li>
            </ul>
          </div>
        </div> <div className="col-xl-3 col-lg-4">
          <div className="top-collect-wrapper">
            <ul>
              <li> <span>03</span> </li>
              <li><img src="/assets/img/home-01/Image.png" alt /></li>
              <li className="collect-lst-list"> 
                <a href="#"><h3> Savannah Nguyen </h3></a> 
                <h4>$219.78</h4>
              </li>
            </ul>
          </div>
        </div> <div className="col-xl-3 col-lg-4">
          <div className="top-collect-wrapper">
            <ul>
              <li> <span>04</span> </li>
              <li><img src="/assets/img/home-01/Image-4.png" alt /></li>
              <li className="collect-lst-list"> 
                <a href="#"><h3>Ralph Edwards</h3></a> 
                <h4>$219.78</h4>
              </li>
            </ul>
          </div>
        </div> <div className="col-xl-3 col-lg-4">
          <div className="top-collect-wrapper">
            <ul>
              <li> <span>05</span> </li>
              <li><img src="/assets/img/home-01/Image-1.png" alt /></li>
              <li className="collect-lst-list"> 
                <a href="#"><h3>Wade Warren</h3> </a>
                <h4>$219.78</h4>
              </li>
            </ul>
          </div>
        </div> <div className="col-xl-3 col-lg-4">
          <div className="top-collect-wrapper">
            <ul>
              <li> <span>06</span> </li>
              <li><img src="/assets/img/home-01/Image-5.png" alt /></li>
              <li className="collect-lst-list"> 
                <a href="#"><h3> Eleanor Pena </h3></a> 
                <h4>$219.78</h4>
              </li>
            </ul>
          </div>
        </div> <div className="col-xl-3 col-lg-4">
          <div className="top-collect-wrapper">
            <ul>
              <li> <span>07</span> </li>
              <li><img src="/assets/img/home-01/Image.png" alt /></li>
              <li className="collect-lst-list"> 
                <a href="#"><h3>Brooklyn Simmons </h3></a> 
                <h4>$219.78</h4>
              </li>
            </ul>
          </div>
        </div> <div className="col-xl-3 col-lg-4">
          <div className="top-collect-wrapper">
            <ul>
              <li> <span>08</span> </li>
              <li><img src="/assets/img/home-01/Image-7.png" alt /></li>
              <li className="collect-lst-list"> 
                <a href="#"><h3> Annette Black </h3></a> 
                <h4>$219.78</h4>
              </li>
            </ul>
          </div>
        </div> <div className="col-xl-3 col-lg-4">
          <div className="top-collect-wrapper">
            <ul>
              <li> <span>09</span> </li>
              <li><img src="/assets/img/home-01/Image-2.png" alt /></li>
              <li className="collect-lst-list"> 
                <a href="#"> <h3>Dianne Russell </h3></a> 
                <h4>$219.78</h4>
              </li>
            </ul>
          </div>
        </div> <div className="col-xl-3 col-lg-4">
          <div className="top-collect-wrapper">
            <ul>
              <li> <span>10</span> </li>
              <li><img src="/assets/img/home-01/Image.png" alt /></li>
              <li className="collect-lst-list"> 
                <a href="#"><h3>Darlene Robertson </h3></a> 
                <h4>$219.78</h4>
              </li>
            </ul>
          </div>
        </div> <div className="col-xl-3 col-lg-4">
          <div className="top-collect-wrapper">
            <ul>
              <li> <span>11</span> </li>
              <li><img src="/assets/img/home-01/Image-6.png" alt /></li>
              <li className="collect-lst-list"> 
                <a href="#"><h3>Floyd Miles </h3></a> 
                <h4>$219.78</h4>
              </li>
            </ul>
          </div>
        </div> <div className="col-xl-3 col-lg-4">
          <div className="top-collect-wrapper">
            <ul>
              <li> <span>12</span> </li>
              <li><img src="/assets/img/home-01/Image.png" alt /></li>
              <li className="collect-lst-list"> 
                <a href="#"> <h3>Leslie Alexander </h3></a> 
                <h4>$219.78</h4>
              </li>
            </ul>
          </div>
        </div> <div className="col-xl-3 col-lg-4">
          <div className="top-collect-wrapper">
            <ul>
              <li> <span>13</span> </li>
              <li><img src="/assets/img/home-01/Image-3.png" alt /></li>
              <li className="collect-lst-list"> 
                <a href="#"> <h3>Guy Hawkins </h3></a> 
                <h4>$219.78</h4>
              </li>
            </ul>
          </div>
        </div> <div className="col-xl-3 col-lg-4">
          <div className="top-collect-wrapper">
            <ul>
              <li> <span>14</span> </li>
              <li><img src="/assets/img/home-01/Image.png" alt /></li>
              <li className="collect-lst-list"> 
                <a href="#"><h3>Robert Fox </h3></a> 
                <h4>$219.78</h4>
              </li>
            </ul>
          </div>
        </div> <div className="col-xl-3 col-lg-4">
          <div className="top-collect-wrapper">
            <ul>
              <li> <span>15</span> </li>
              <li><img src="/assets/img/home-01/Image-2.png" alt /></li>
              <li className="collect-lst-list"> 
                <a href="#"> <h3>Courtney Henry </h3> </a>
                <h4>$219.78</h4>
              </li>
            </ul>
          </div>
        </div> <div className="col-xl-3 col-lg-4">
          <div className="top-collect-wrapper">
            <ul>
              <li> <span>16</span> </li>
              <li><img src="/assets/img/home-01/Image-5.png" alt /></li>
              <li className="collect-lst-list"> 
                <a href="#"><h3>Ronald Richards </h3> </a>
                <h4>$219.78</h4>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* top collection area end */}
  {/* process-area start */}
  <section className="process-area pb-115 pt-125">
    <div className="container">
      <div className="row">
        <div className="col-xl-12 col-lg-12">
          <div className="section-title pb-40">
            <h2 className="text-white text-center"> NFT Business Process </h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xl-3 col-lg-3 col-md-6"> 
          <div className="single_business_process wow fadeInUp" data-wow-delay=".3s">
            <img src="/assets/img/Icon.png" alt />
            <h2>Set up your wallet</h2>
            <p>Once you’ve set up your wallet of choice, connect it to MNFT  by clicking the wallet icon in the top right corner.</p>
          </div>
        </div>   
        <div className="col-xl-3 col-lg-3 col-md-6"> 
          <div className="single_business_process wow fadeInUp" data-wow-delay=".4s">
            <img src="/assets/img/Icon2.png" alt />
            <h2> Create collection </h2>
            <p>Click My Collections and set up your collection. Add social links, a description, profile &amp; banner images, &amp; set secondary sales fee.</p>
          </div>
        </div>   <div className="col-xl-3 col-lg-3 col-md-6"> 
          <div className="single_business_process wow fadeInUp " data-wow-delay=".5s">
            <img src="/assets/img/Icon3.png" alt />
            <h2> Add your NFTs </h2>
            <p> Upload your work (image, video, audio, 3D art), add title description, &amp; customize your NFTs with properties, stats, &amp; unlockable content.</p>
          </div>
        </div>   <div className="col-xl-3 col-lg-3 col-md-6"> 
          <div className="single_business_process wow fadeInUp " data-wow-delay=".6s">
            <img src="/assets/img/Icon.png" alt />
            <h2>List them for sale</h2>
            <p> Choose between auctions, fixed-price listings, and declining-price listings. You choose how you want to sell your NFTs, and we help you sell them!</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* process-area end */}
  {/* explore-area start */}
  <section className="explore-area pt-100 pb-100">
    <div className="container">
      <div className="row">
        <div className="col-xl-12 col-lg-12 col-md-12">
          <div className="section-title pb-40">
            <h2> Explore </h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xl-12 col-lg-12 col-md-12">
          <form action="#">
            <ul className="explore-option-wrappper">
              <li className="list-inline-custom">  
                <select className="nice_select" name id>
                  <option value> Photography </option> 
                  <option value> Photography 1 </option> 
                  <option value> Photography 2 </option> 
                  <option value> Photography 2 </option> 
                  <option value> Photography 4 </option> 
                </select> 
              </li>
              <li className="list-inline-custom">  
                <select className="nice_select" name id>
                  <option value> Low Price </option> 
                  <option value> Low Price 1 </option> 
                  <option value> Low Price 2 </option> 
                  <option value> Low Price 2 </option> 
                  <option value> Low Price 4 </option> 
                </select> 
              </li>
              <li className="list-inline-custom">  
                <select className="nice_select" name id>
                  <option value> Price Range </option> 
                  <option value> Price Range 1 </option> 
                  <option value> Price Range 2 </option> 
                  <option value> Price Range 2 </option> 
                  <option value> Price Range 4 </option> 
                </select> 
              </li>
              <li className="list-inline-custom list-inline-margin">  
                <select className="nice_select" name id>
                  <option value> Creators </option> 
                  <option value> Creators 1 </option> 
                  <option value> Creators 2 </option> 
                  <option value> Creators 2 </option> 
                  <option value> Creators 4 </option> 
                </select> 
              </li>
              <li className="list-inline-custom m-0">  
                <select className="nice_select" name id>
                  <option value> Recently added </option> 
                  <option value> Recently added 1 </option> 
                  <option value> Recently added 2 </option> 
                  <option value> Recently added 2 </option> 
                  <option value> Recently added 4 </option> 
                </select> 
              </li>
            </ul>
          </form>
        </div>
      </div>
      <div className="row mb-30 mt-20 artist-carousel">
        <div className="col-xl-3 col-lg-4 mb-30 col-md-6">
          <div className="artist-single-carousel wow fadeInUp" data-wow-delay=".3s">
            <div className="carousel-img">
              <img src="/assets/img/home-01/5.png" alt />
              <a href="#" className="carousel-shap-btn"> Art </a>
            </div>
            <div className="artist-single-text-wrap clearfix">
              <div className="user-artist f-left">
                <img src="/assets/img/24_MyProfile/Profile_Image.png" alt />
                <div className="user-artits-name">
                  <a href="#"> User Artists </a>
                </div>
              </div>
              <div className="user-artist-right-text f-right">
                <h5>12 Days 7hrs <span>Left</span></h5>
              </div>                          
            </div>
            <div className="user-artitst-meta">
              <a href="product-details.html"><h3> The Rusty Robots </h3></a>
              <h4>Highest bid</h4>
              <ul className="clearfix">
                <li className="f-left"><span>1.05 ETH</span></li>
                <li className="f-right"> <a href="#"><i className="fa-solid fa-heart" /> <h5>40</h5> </a> </li>
              </ul>
            </div>
          </div>
        </div>     
        <div className="col-xl-3 col-lg-4 mb-30 col-md-6">
          <div className="artist-single-carousel wow fadeInUp" data-wow-delay=".4s">
            <div className="carousel-img">
              <img src="/assets/img/home-01/6.png" alt />
              <a href="#" className="carousel-shap-btn explore-blue-btn"> Art </a>
            </div>
            <div className="artist-single-text-wrap clearfix">
              <div className="user-artist f-left">
                <img src="/assets/img/24_MyProfile/Profile_Image.png" alt />
                <div className="user-artits-name">
                  <a href="#"> User Artists </a>
                </div>
              </div>
              <div className="user-artist-right-text f-right">
                <h5>12 Days 7hrs <span>Left</span></h5>
              </div>                          
            </div>
            <div className="user-artitst-meta">
              <a href="product-details.html"><h3> The Rusty Robots </h3></a>
              <h4>Highest bid</h4>
              <ul className="clearfix">
                <li className="f-left"><span>1.05 ETH</span></li>
                <li className="f-right"> <a href="#"><i className="fa-solid fa-heart" /> <h5>40</h5> </a> </li>
              </ul>
            </div>
          </div>
        </div>      
        <div className="col-xl-3 col-lg-4 mb-30 col-md-6">
          <div className="artist-single-carousel wow fadeInUp" data-wow-delay=".5s">
            <div className="carousel-img">
              <img src="/assets/img/home-01/7.png" alt />
              <a href="#" className="carousel-shap-btn"> Art </a>
            </div>
            <div className="artist-single-text-wrap clearfix">
              <div className="user-artist f-left">
                <img src="/assets/img/24_MyProfile/Profile_Image.png" alt />
                <div className="user-artits-name">
                  <a href="#"> User Artists </a>
                </div>
              </div>
              <div className="user-artist-right-text f-right">
                <h5>12 Days 7hrs <span>Left</span></h5>
              </div>                          
            </div>
            <div className="user-artitst-meta">
              <a href="#"> <h3> The Rusty Robots </h3></a>
              <h4>Highest bid</h4>
              <ul className="clearfix">
                <li className="f-left"><span>1.05 ETH</span></li>
                <li className="f-right"> <a href="#"><i className="fa-solid fa-heart" /> <h5>40</h5> </a> </li>
              </ul>
            </div>
          </div>
        </div>      
        <div className="col-xl-3 col-lg-4 mb-30 col-md-6">
          <div className="artist-single-carousel wow fadeInUp" data-wow-delay=".6s">
            <div className="carousel-img">
              <img src="/assets/img/home-01/8.png" alt />
              <a href="#" className="carousel-shap-btn explore-blue-btn"> Art </a>
            </div>
            <div className="artist-single-text-wrap clearfix">
              <div className="user-artist f-left">
                <img src="/assets/img/24_MyProfile/Profile_Image.png" alt />
                <div className="user-artits-name">
                  <a href="#"> User Artists </a>
                </div>
              </div>
              <div className="user-artist-right-text f-right">
                <h5>12 Days 7hrs <span>Left</span></h5>
              </div>                          
            </div>
            <div className="user-artitst-meta">
              <a href="product-details.html"><h3> The Rusty Robots </h3></a>
              <h4>Highest bid</h4>
              <ul className="clearfix">
                <li className="f-left"><span>1.05 ETH</span></li>
                <li className="f-right"> <a href="#"><i className="fa-solid fa-heart" /> <h5>40</h5> </a> </li>
              </ul>
            </div>
          </div>
        </div>
      </div>   <div className="row artist-carousel">
        <div className="col-xl-3 col-lg-4 mb-30 col-md-6">
          <div className="artist-single-carousel wow fadeInUp" data-wow-delay=".7s">
            <div className="carousel-img">
              <img src="/assets/img/home-01/6.png" alt />
              <a href="#" className="carousel-shap-btn explore-blue-btn"> Art </a>
            </div>
            <div className="artist-single-text-wrap clearfix">
              <div className="user-artist f-left">
                <img src="/assets/img/24_MyProfile/Profile_Image.png" alt />
                <div className="user-artits-name">
                  <a href="#"> User Artists </a>
                </div>
              </div>
              <div className="user-artist-right-text f-right">
                <h5>12 Days 7hrs <span>Left</span></h5>
              </div>                          
            </div>
            <div className="user-artitst-meta">
              <a href="product-details.html"><h3> The Rusty Robots </h3></a>
              <h4>Highest bid</h4>
              <ul className="clearfix">
                <li className="f-left"><span>1.05 ETH</span></li>
                <li className="f-right"> <a href="#"><i className="fa-solid fa-heart" /> <h5>40</h5> </a> </li>
              </ul>
            </div>
          </div>
        </div>     
        <div className="col-xl-3 col-lg-4 mb-30 col-md-6">
          <div className="artist-single-carousel wow fadeInUp" data-wow-delay=".8s">
            <div className="carousel-img">
              <img src="/assets/img/home-01/8.png" alt />
              <a href="#" className="carousel-shap-btn"> Art </a>
            </div>
            <div className="artist-single-text-wrap clearfix">
              <div className="user-artist f-left">
                <img src="/assets/img/24_MyProfile/Profile_Image.png" alt />
                <div className="user-artits-name">
                  <a href="#"> User Artists </a>
                </div>
              </div>
              <div className="user-artist-right-text f-right">
                <h5>12 Days 7hrs <span>Left</span></h5>
              </div>                          
            </div>
            <div className="user-artitst-meta">
              <a href="product-details.html"><h3> The Rusty Robots </h3></a>
              <h4>Highest bid</h4>
              <ul className="clearfix">
                <li className="f-left"><span>1.05 ETH</span></li>
                <li className="f-right"> <a href="#"><i className="fa-solid fa-heart" /> <h5>40</h5> </a> </li>
              </ul>
            </div>
          </div>
        </div>      
        <div className="col-xl-3 col-lg-4 mb-30 col-md-6">
          <div className="artist-single-carousel wow fadeInUp" data-wow-delay=".9s">
            <div className="carousel-img">
              <img src="/assets/img/home-01/2.png" alt />
              <a href="#" className="carousel-shap-btn explore-blue-btn"> Art </a>
            </div>
            <div className="artist-single-text-wrap clearfix">
              <div className="user-artist f-left">
                <img src="/assets/img/24_MyProfile/Profile_Image.png" alt />
                <div className="user-artits-name">
                  <a href="#"> User Artists </a>
                </div>
              </div>
              <div className="user-artist-right-text f-right">
                <h5>12 Days 7hrs <span>Left</span></h5>
              </div>                          
            </div>
            <div className="user-artitst-meta">
              <a href="product-details.html"><h3> The Rusty Robots </h3></a>
              <h4>Highest bid</h4>
              <ul className="clearfix">
                <li className="f-left"><span>1.05 ETH</span></li>
                <li className="f-right"> <a href="#"><i className="fa-solid fa-heart" /> <h5>40</h5> </a> </li>
              </ul>
            </div>
          </div>
        </div>      
        <div className="col-xl-3 col-lg-4 mb-30 col-md-6">
          <div className="artist-single-carousel wow fadeInUp" data-wow-delay="1s">
            <div className="carousel-img">
              <img src="/assets/img/home-01/9.png" alt />
              <a href="#" className="carousel-shap-btn"> Art </a>
            </div>
            <div className="artist-single-text-wrap clearfix">
              <div className="user-artist f-left">
                <img src="/assets/img/24_MyProfile/Profile_Image.png" alt />
                <div className="user-artits-name">
                  <a href="#"> User Artists </a>
                </div>
              </div>
              <div className="user-artist-right-text f-right">
                <h5>12 Days 7hrs <span>Left</span></h5>
              </div>                          
            </div>
            <div className="user-artitst-meta">
              <a href="product-details.html"><h3> The Rusty Robots </h3></a>
              <h4>Highest bid</h4>
              <ul className="clearfix">
                <li className="f-left"><span>1.05 ETH</span></li>
                <li className="f-right"> <a href="#"><i className="fa-solid fa-heart" /> <h5>40</h5> </a> </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xl-12 col-lg-12">
          <div className="artist-btn text-center">
            <a className="btn" href="#">View More</a>
          </div>
        </div>
      </div>
    </div>
  </section>  
  {/* explore-area end */}
  {/* testimonial area start */}
  <section className="testimonial-area pt-130 pb-120">
    <div className="container">
      <div className="row">
        <div className="col-xl-12 col-lg-12 col-md-12">
          <div className="section-title pb-40">
            <h2 className="text-white text-center"> NFT Business Process </h2>
          </div>
        </div>
      </div>
      <div className="row testemonial-active wow fadeInUp" data-wow-delay=".3s">
        <div className="col-xl-3 col-lg-4 col-md-6">
          <div className="single-testimonial">
            <ul className="clearfix">
              <li className="f-left testimonial-left-quite"> <i className="fa-solid fa-quote-left" /> </li>
              <li className="f-right testmonial-right-star">
                <ul className="testimonail-inner-start">
                  <li>  <i className="fa-solid fa-star" /></li>
                  <li> <i className="fa-solid fa-star" /> </li>
                  <li> <i className="fa-solid fa-star" /> </li>
                  <li> <i className="fa-solid fa-star" /></li>
                  <li> <i className="fa-solid fa-star" /></li>
                </ul>  
              </li>
            </ul>
            <p>Et scaevola delicata vix, mea invidunt indoctum, quodsi eripuit definiebas at pri. Placerat voltaria ex mel. Eos malis Et scaevola delicata vix, mea ei invidunt indoctum. z</p>
            <div className="testimonial-meta">
              <img src="/assets/img/home-01/avatar%203.png" alt />
              <div className="testimonial-meta-content">
                <h3>Darlene Robertson</h3>
                <h4>Product designer</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg- col-md-6">
          <div className="single-testimonial">
            <ul className="clearfix">
              <li className="f-left testimonial-left-quite"> <i className="fa-solid fa-quote-left" /> </li>
              <li className="f-right testmonial-right-star">
                <ul className="testimonail-inner-start">
                  <li>  <i className="fa-solid fa-star" /></li>
                  <li> <i className="fa-solid fa-star" /> </li>
                  <li> <i className="fa-solid fa-star" /> </li>
                  <li> <i className="fa-solid fa-star" /></li>
                  <li> <i className="fa-solid fa-star" /></li>
                </ul> 
              </li>
            </ul>
            <p>Et scaevola delicata vix, mea invidunt indoctum, quodsi eripuit definiebas at pri. Placerat voltaria ex mel. Eos malis Et scaevola delicata vix, mea ei invidunt indoctum. z</p>
            <div className="testimonial-meta">
              <img src="/assets/img/home-01/avatar%204.png" alt />
              <div className="testimonial-meta-content">
                <h3>Darlene Robertson</h3>
                <h4>Product designer</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-md-6">
          <div className="single-testimonial">
            <ul className="clearfix">
              <li className="f-left testimonial-left-quite"> <i className="fa-solid fa-quote-left" /> </li>
              <li className="f-right testmonial-right-star">
                <ul className="testimonail-inner-start">
                  <li>  <i className="fa-solid fa-star" /></li>
                  <li> <i className="fa-solid fa-star" /> </li>
                  <li> <i className="fa-solid fa-star" /> </li>
                  <li> <i className="fa-solid fa-star" /></li>
                  <li> <i className="fa-solid fa-star" /></li>
                </ul>  
              </li>
            </ul>
            <p>Et scaevola delicata vix, mea invidunt indoctum, quodsi eripuit definiebas at pri. Placerat voltaria ex mel. Eos malis Et scaevola delicata vix, mea ei invidunt indoctum. z</p>
            <div className="testimonial-meta">
              <img src="/assets/img/home-01/avatar%203.png" alt />
              <div className="testimonial-meta-content">
                <h3>Darlene Robertson</h3>
                <h4>Product designer</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-md-6">
          <div className="single-testimonial">
            <ul className="clearfix">
              <li className="f-left testimonial-left-quite"> <i className="fa-solid fa-quote-left" /> </li>
              <li className="f-right testmonial-right-star">
                <ul className="testimonail-inner-start">
                  <li>  <i className="fa-solid fa-star" /></li>
                  <li> <i className="fa-solid fa-star" /> </li>
                  <li> <i className="fa-solid fa-star" /> </li>
                  <li> <i className="fa-solid fa-star" /></li>
                  <li> <i className="fa-solid fa-star" /></li>
                </ul> 
              </li>
            </ul>
            <p>Et scaevola delicata vix, mea invidunt indoctum, quodsi eripuit definiebas at pri. Placerat voltaria ex mel. Eos malis Et scaevola delicata vix, mea ei invidunt indoctum. z</p>
            <div className="testimonial-meta">
              <img src="/assets/img/home-01/avatar%205.png" alt />
              <div className="testimonial-meta-content">
                <h3>Darlene Robertson</h3>
                <h4>Product designer</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-md-6">
          <div className="single-testimonial">
            <ul className="clearfix">
              <li className="f-left testimonial-left-quite"> <i className="fa-solid fa-quote-left" /> </li>
              <li className="f-right testmonial-right-star">
                <ul className="testimonail-inner-start">
                  <li>  <i className="fa-solid fa-star" /></li>
                  <li> <i className="fa-solid fa-star" /> </li>
                  <li> <i className="fa-solid fa-star" /> </li>
                  <li> <i className="fa-solid fa-star" /></li>
                  <li> <i className="fa-solid fa-star" /></li>
                </ul> 
              </li>
            </ul>
            <p>Et scaevola delicata vix, mea invidunt indoctum, quodsi eripuit definiebas at pri. Placerat voltaria ex mel. Eos malis Et scaevola delicata vix, mea ei invidunt indoctum. z</p>
            <div className="testimonial-meta">
              <img src="/assets/img/home-01/avatar%203.png" alt />
              <div className="testimonial-meta-content">
                <h3>Darlene Robertson</h3>
                <h4>Product designer</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section> 
  {/* testimonial area end */}
  {/* brand-area start */}
  <section className="brand-area pt-115"> 
    <div className="container">
      <div className="row">
        <div className="col-xl-12">
          <div className="brand-active  text-center">
            <div className="single-brand text-center"> <a href="#"><img src="/assets/img//Client-img-2-H.png" alt /></a> </div>
            <div className="single-brand text-center"> <a href="#"><img src="/assets/img//Client-img-4.png" alt /></a> </div>
            <div className="single-brand text-center"> <a href="#"><img src="/assets/img//Client-img-5-H.png" alt /></a> </div>
            <div className="single-brand text-center"> <a href="#"><img src="/assets/img//Client-img-4.png" alt /></a> </div>
            <div className="single-brand text-center"> <a href="#"><img src="/assets/img//Client-img-2-H.png" alt /></a> </div>
            <div className="single-brand text-center"> <a href="#"><img src="/assets/img//Client-img-4.png" alt /></a> </div>
          </div>
        </div>
      </div>
    </div>
  </section> 
  {/* brand-area end */}
  {/* learn-area start */}
  <section className="learn-area pb-120 pt-110"> 
    <div className="container">
      <div className="row">
        <div className="col-xl-6 col-lg-6 col-md-6">
          <div className="hero-left-content learn-left-content">
            <h2> Learn and Earn Free ETH with NFT </h2>
            <p> A creative nft busi  ness agency that lead &amp; inspire </p>
            <div className="hero-btn">
              <a href="#" className="btn">Explore</a>
              <a href="#" className="btn hero-sec-btn">Create</a>
            </div>
          </div>
        </div>
        <div className="col-xl-6 col-lg-6 col-md-6">
          <div className="row">
            <div className="col-xl-6 col-lg-6 mb-30">
              <div className="hero-right-area learn-right-content wow fadeIn" data-wow-delay=".3s">
                <div className="hero-right-img">
                  <img src="/assets/img//home-01/10.jpg" alt />
                </div>
                <div className="single-hero-meta">
                  <img src="/assets/img//home-01/avatar.png" alt />
                  <div className="hero-meta-text">
                    <a href="#"><h4> Create Item </h4></a>
                    <span>$180,583</span>
                  </div>
                </div>
              </div>
            </div>  
            <div className="col-xl-6 col-lg-6 ">
              <div className="hero-right-area learn-right-content wow fadeIn" data-wow-delay=".3s">
                <div className="hero-right-img">
                  <img src="/assets/img//home-01/11.png" alt />
                </div>
                <div className="single-hero-meta">
                  <img src="/assets/img//home-01/avatar.png" alt />
                  <div className="hero-meta-text">
                    <a href="#"><h4> Explore More </h4></a>
                    <span>$180,583</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section> 
  {/*  learn-are end */}
  {/* footer-area start */}
  <footer className="footer-area pt-120 pb-40">
    <div className="container">
      <div className="row">
        <div className="col-xl-4 col-lg-6 col-md-6 mb-30">
          <div className="footer-widget footer-widget1">
            <h3> Get the latest NFT updates </h3>
            <form action="#">
              <input type="email" placeholder="Your e-mail" />
              <button type="submit"> I’m in </button>
            </form>
          </div>
        </div>
        <div className="col-xl-2 col-lg-6 col-md-12 mb-30">
          <div className="footer-widget footer-widget2">
            <h3>NFT </h3>
            <ul>
              <li><a href="#"> Explore </a></li>
              <li><a href="#"> Help center </a></li>
              <li><a href="#"> Blog </a></li>
              <li><a href="#"> Jobs </a></li>
              <li><a href="#"> Become a partner </a></li>
              <li><a href="#"> Bug bounty </a></li>
            </ul>
          </div>
        </div>
        <div className="col-xl-2 col-lg-6 col-md-12 mb-30">
          <div className="footer-widget footer-widget3">
            <h3> Community </h3>
            <ul>
              <li><a href="#"> ARAI Token </a></li>
              <li><a href="#"> Discussion </a></li>
              <li><a href="#"> Voting </a></li>
              <li><a href="#"> Suggest feature </a></li>
              <li><a href="#">NFT protocol </a></li>
              <li><a href="#">Subscribe </a></li>
            </ul>
          </div>
        </div>
        <div className="col-xl-4 col-lg-6 col-md-12 mb-30">
          <div className="footer-widget footer-widget4">
            <h3> Language </h3>
            <form action="#">
              <select className="nice_select" name id>
                <option selected="English" value="English"> English </option>
                <option value="Bangla"> Bangla </option>
                <option value="Hindi"> Hindi </option>
              </select>
            </form>
          </div>
        </div>
      </div>
      <div className="row mt-105 footer-border">
        <div className="col-xl-6 col-lg-7 col-md-12">
          <div className="footer-bottom-left">
            <ul>
              <li><a href="#"> © NFT, Inc. All rights reserved. </a></li>
              <li><a href="#"> Terms </a></li>
              <li><a href="#"> Privacy policy </a></li>
            </ul>
          </div>
        </div>
        <div className="col-xl-6 col-lg-5 col-md-12">
          <div className="footer-bottom-right">
            <ul>
              <li><a href="#"> <i className="fa-brands fa-facebook-f" /> </a></li>
              <li><a href="#"> <i className="fa-brands fa-instagram" /> </a></li>
              <li><a href="#"> <i className="fa-brands fa-twitter" /> </a></li>
              <li><a href="#"> <i className="fa-brands fa-linkedin-in" /> </a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
</div>

  );
}

export default Homepage;
