import React, { useState, useEffect, lazy, Suspense } from 'react'
import { Route, Routes, Navigate, Link, useLocation } from 'react-router-dom'
import './Base.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faVimeo } from '@fortawesome/free-brands-svg-icons';
import { Icon } from '@iconify-icon/react';

// Lazy-loaded components
const Home = lazy(() => import('../Home/Home'));
const About = lazy(() => import('../About/About'));
const Press = lazy(() => import('../Press/Press'));
const Gallery = lazy(() => import('../Gallery/Gallery'));
const Contact = lazy(() => import('../Contact/Contact'));
const DrawingMentor = lazy(() => import('../DrawingMentor/DrawingMentor'));
const Subscribed = lazy(() => import('../Subscribed/Subscribed'));
const Books = lazy(() => import('../Books/Books'));

const Base = () => {
  const [currentPage, setCurrentPage] = useState('');
  const location = useLocation();
  const [navbar, setNavbar] = useState(false);
  const [showWorks, setShowWorks] = useState(false);
  const [home, setHome] = useState(false);
  const [about, setAbout] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [showBooks, setShowBooks] = useState(false); // ✅ NEW

  function toggleNavbar() {
    setNavbar(!navbar)
  }

  function toggleWorks() {
    setShowWorks(!showWorks);
    if (showAbout) toggleAbout();
    if (showBooks) toggleBooks();
  }

  function toggleAbout() {
    setShowAbout(!showAbout);
    if (showWorks) toggleWorks();
    if (showBooks) toggleBooks();
  }

  function toggleBooks() { // ✅ NEW
    setShowBooks(!showBooks);
    if (showWorks) toggleWorks();
    if (showAbout) toggleAbout();
  }

  function itemClicked(event) {
    if (navbar) toggleNavbar();
    if (showWorks) toggleWorks();
    if (showAbout) toggleAbout();
    if (showBooks) toggleBooks();

    const item = event.currentTarget;
    item.classList.add('selectedItem');

    const items = document.querySelectorAll('.item');
    items.forEach(otherItem => {
      if (otherItem !== item) {
        otherItem.classList.remove('selectedItem');
      }
    });

    const worksItems = document.querySelectorAll('.worksItem');
    worksItems.forEach(worksItem => worksItem.classList.remove('selectedWork'));

    const aboutItems = document.querySelectorAll('.aboutItem');
    aboutItems.forEach(aboutItem => aboutItem.classList.remove('selectedAbout'));

    const booksItems = document.querySelectorAll('.booksItem'); // ✅
    booksItems.forEach(booksItem => booksItem.classList.remove('selectedBooks'));
  }

  function worksItemClicked(event) {
    if (navbar) toggleNavbar();
    if (showAbout) toggleAbout();
    if (showBooks) toggleBooks();

    const worksItem = event.currentTarget;
    worksItem.classList.add('selectedWork');

    const worksItems = document.querySelectorAll('.worksItem');
    worksItems.forEach(otherWorksItem => {
      if (otherWorksItem !== worksItem) {
        otherWorksItem.classList.remove('selectedWork');
      }
    });

    const items = document.querySelectorAll('.item');
    items.forEach(item => item.classList.remove('selectedItem'));

    const aboutItems = document.querySelectorAll('.aboutItem');
    aboutItems.forEach(aboutItem => aboutItem.classList.remove('selectedAbout'));

    const booksItems = document.querySelectorAll('.booksItem'); // ✅
    booksItems.forEach(booksItem => booksItem.classList.remove('selectedBooks'));
  }

  function aboutItemClicked(event) {
    if (navbar) toggleNavbar();
    if (showWorks) toggleWorks();
    if (showBooks) toggleBooks();

    const aboutItem = event.currentTarget;
    aboutItem.classList.add('selectedAbout');

    const aboutItems = document.querySelectorAll('.aboutItem');
    aboutItems.forEach(otherAboutItem => {
      if (otherAboutItem !== aboutItem) {
        otherAboutItem.classList.remove('selectedAbout');
      }
    });

    const worksItems = document.querySelectorAll('.worksItem');
    worksItems.forEach(worksItem => worksItem.classList.remove('selectedWork'));

    const items = document.querySelectorAll('.item');
    items.forEach(item => item.classList.remove('selectedItem'));

    const booksItems = document.querySelectorAll('.booksItem'); // ✅
    booksItems.forEach(booksItem => booksItem.classList.remove('selectedBooks'));
  }

  function booksItemClicked(event) { // ✅ NEW
    if (navbar) toggleNavbar();
    if (showWorks) toggleWorks();
    if (showAbout) toggleAbout();

    const booksItem = event.currentTarget;
    booksItem.classList.add('selectedBooks');

    const booksItems = document.querySelectorAll('.booksItem');
    booksItems.forEach(otherBooksItem => {
      if (otherBooksItem !== booksItem) {
        otherBooksItem.classList.remove('selectedBooks');
      }
    });

    const worksItems = document.querySelectorAll('.worksItem');
    worksItems.forEach(worksItem => worksItem.classList.remove('selectedWork'));

    const aboutItems = document.querySelectorAll('.aboutItem');
    aboutItems.forEach(aboutItem => aboutItem.classList.remove('selectedAbout'));

    const items = document.querySelectorAll('.item');
    items.forEach(item => item.classList.remove('selectedItem'));
  }

  useEffect(() => {
    const hamburger = document.querySelector('.hamburger');
    hamburger.addEventListener('click', toggleNavbar);

    const items = document.querySelectorAll('.item');
    const worksItems = document.querySelectorAll('.worksItem');
    const aboutItems = document.querySelectorAll('.aboutItem');
    const booksItems = document.querySelectorAll('.booksItem'); // ✅

    items.forEach(item => item.addEventListener('click', itemClicked));
    worksItems.forEach(worksItem => worksItem.addEventListener('click', worksItemClicked));
    aboutItems.forEach(aboutItem => aboutItem.addEventListener('click', aboutItemClicked));
    booksItems.forEach(booksItem => booksItem.addEventListener('click', booksItemClicked)); // ✅

    const worksSubheading = document.querySelector('.worksSubHeading');
    worksSubheading.addEventListener('click', toggleWorks);

    const aboutSubHeading = document.querySelector('.aboutSubHeading');
    aboutSubHeading.addEventListener('click', toggleAbout);

    const booksSubHeading = document.querySelector('.booksSubHeading'); // ✅
    booksSubHeading.addEventListener('click', toggleBooks);

    return () => {
      hamburger.removeEventListener('click', toggleNavbar);

      items.forEach(item => item.removeEventListener('click', itemClicked));
      worksItems.forEach(worksItem => worksItem.removeEventListener('click', worksItemClicked));
      aboutItems.forEach(aboutItem => aboutItem.removeEventListener('click', aboutItemClicked));
      booksItems.forEach(booksItem => booksItem.removeEventListener('click', booksItemClicked)); // ✅

      worksSubheading.removeEventListener('click', toggleWorks);
      aboutSubHeading.removeEventListener('click', toggleAbout);
      booksSubHeading.removeEventListener('click', toggleBooks); // ✅
    };
  });

  useEffect(() => {
    const pathname = location.pathname;
    setHome(pathname === "/Home");
    setAbout(pathname === "/About");

    const formattedPageName = pathname.replace(/-/g, ' ').toLowerCase();
    setCurrentPage(formattedPageName.substring(1) || '');
  }, [location]);

  return (
    <div>
      <nav className={`navBar ${navbar ? "isActive" : null}`}>
        <div className="itemsIconsWrap">
          <div className="itemsWrap" id="itemsWrap">

            {/* Works */}
            <div className="subHeadingWrap">
              <span className="worksSubHeading" style={{ borderBottom: showWorks ? "1px solid black" : "" }}>
                paintings {navbar ? showWorks ? <i class="fa-solid fa-chevron-up"></i> : <i class="fa-solid fa-chevron-down"></i> : ""}
              </span>
              <div className={`works ${showWorks ? 'worksON' : 'worksOFF'}`}>
                <ul>
                  <li className="worksItem"><Link to="/Unknown-Cities">unknown cities</Link></li>
                  <li className="worksItem"><Link to="/Rewilding">rewilding</Link></li>
                  <li className="worksItem"><Link to="/Dwellers">dwellers</Link></li>
                  <li className="worksItem"><Link to="/The-Shipping-Log">the shipping log</Link></li>
                </ul>
              </div>
            </div>

            <div className="subHeadingWrap">
              <Link to="/Drawing" className="item">drawing</Link>
            </div>

            {/* ✅ Books */}
            <div className="subHeadingWrap">
              <span className='booksSubHeading' style={{ borderBottom: showBooks ? "1px solid black" : "" }}>
                books {navbar ? showBooks ? <i class="fa-solid fa-chevron-up"></i> : <i class="fa-solid fa-chevron-down"></i> : ""}
              </span>
              <div className={`books ${showBooks ? "booksON" : "booksOFF"}`}>
                <ul>
                  <li className="booksItem"><Link to="/Page-By-Page">page by page</Link></li>
                  <li className="booksItem"><Link to="/Ode-To-A-Lighter-World">ode to a lighter world</Link></li>
                </ul>
              </div>
            </div>

            <div className="subHeadingWrap">
              <Link to="/DrawingMentor" className="item">drawing mentor</Link>
            </div>

            <div className="subHeadingWrap">
              <Link to="/Performance" className="item">performance</Link>
            </div>

            <div className="subHeadingWrap">
              <Link to="/Press" className="item">press</Link>
            </div>



            {/* About */}
            <div className="subHeadingWrap">
              <span className='aboutSubHeading' style={{ borderBottom: showAbout ? "1px solid black" : "" }}>
                about {navbar ? showAbout ? <i class="fa-solid fa-chevron-up"></i> : <i class="fa-solid fa-chevron-down"></i> : ""}
              </span>
              <div className={`about ${showAbout ? "aboutON" : "aboutOFF"}`}>
                <ul>
                  <li className="aboutItem"><Link to="/Biography">biography</Link></li>
                  <li className="aboutItem"><Link to="/CV">cv</Link></li>
                  <li className="aboutItem"><Link to="/Statement">statement</Link></li>
                </ul>
              </div>
            </div>
            <div className="subHeadingWrap">
              <Link to="/Contact" className='item'>contact</Link>
            </div>
            
          </div>

          {/* Socials */}
          <div className="iconsWrap">
            <div className="icon"><a target='_blank' rel="noreferrer" href="https://www.instagram.com/dianapage15/"><FontAwesomeIcon icon={faInstagram} size='lg' /></a></div>
            <div className="icon"><a target='_blank' rel="noreferrer" href="https://www.facebook.com/dianapage.studio/"><FontAwesomeIcon icon={faFacebook} size='lg' /></a></div>
            <div className="icon"><a target='_blank' rel="noreferrer" href="https://vimeo.com/361478589"><FontAwesomeIcon icon={faVimeo} size='lg' /></a></div>
            <div className="icon"><a target='_blank' rel="noreferrer" href="https://substack.com/@dianapage"><Icon icon="simple-icons:substack" style={{ color: "black" }} /></a></div>
          </div>
        </div>

        {/* Title */}
        <div className="titleWrap flex flex-col">
          <a href="/">
            <img className="hidden w-[500px] mb-10 mt-10 xl:inline"
              src={home ? "/Untitled-3.png" : "/logopink.png"}
              style={home ? {} : { marginTop: "20px" }}
              alt='diana' />
          </a>
        </div>
      </nav>

      {/* Hamburger */}
      <div className={`hamburgerWrap ${navbar ? "isActive" : null}`}>
        <a href="/"><h1 className={home ? '' : 'hamburgerTitle'}>DIANA PAGE</h1></a>
        <div className="currentWork">{/* <h4>{currentPage}</h4> */}</div>
        <button className={`hamburger ${navbar ? "isActive" : null}`}><div className="bar"></div></button>
      </div>

      {/* Content */}
      <div className={`content  ${about ? "contentMarginTopNone" : ""} ${home ? "overflowHidden" : ""} ${home ? "" : "contentMarginTop"}`}>
        <Suspense>
          <Routes>
            <Route path='/' element={<Navigate to="/Home" replace />} />
            <Route path='/Home' element={<Home />} />
            <Route path='/CV' element={<About page={"CV"} />} />
            <Route path='/Press' element={<Press pageName={currentPage} />} />
            <Route path="/Biography" element={<About page={"Biography"} />} />
            <Route path="/Statement" element={<About page={"Statement"} />} />
            <Route path="/Unknown-Cities" element={<Gallery work="Unknown-Cities" pageName={currentPage} />} />
            <Route path="/Rewilding" element={<Gallery work="Rewilding" pageName={currentPage} />} />
            <Route path="/Dwellers" element={<Gallery work="Dwellers" pageName={currentPage} />} />
            <Route path="/The-Shipping-Log" element={<Gallery work="The-Shipping-Log" pageName={currentPage} />} />
            <Route path="/Drawing" element={<Gallery work="Drawing" pageName={currentPage} />} />
            <Route path="/Performance" element={<Gallery work="Performance" pageName={currentPage} />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/DrawingMentor" element={<DrawingMentor />} />
            <Route path="/Subscribed" element={<Subscribed />} />
            <Route path="/Books" element={<Books pageName={currentPage} />} />
            {/* ✅ Books routes */}
            <Route path="/Page-By-Page" element={<Books pageName="page by page" />} />
            <Route path="/Ode-To-A-Lighter-World" element={<Books pageName="ode to a lighter world" />} />
          </Routes>
        </Suspense>
      </div>
    </div>
  )
}

export default Base
