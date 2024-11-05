import React, { useState } from 'react'; 
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './home.css';
import { Link } from 'react-router-dom';
import { TSwift, BillieEilish, Drake, KendrickLamar } from './artists';

const Navbar = ({ resetArtist }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Behind the Beat</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={resetArtist}>
                Home
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};


export default function Home() {
  <Navbar resetArtist={() => setActiveArtist(null)} />

  const [activeArtist, setActiveArtist] = useState(null);

  const handleArtistClick = (artist) => {
    setActiveArtist(artist);
  };

  const renderArtistDetails = () => {
    switch (activeArtist) {
      case 'TSwift':
        return TSwift(); 
      case 'BillieEilish':
        return BillieEilish(); 
      case 'drake':
        return drake(); 
      case 'KendrickLamar':
        return KendrickLamar(); 
      default:
        return null; 
    }
  };

  return (
    <>
      {!activeArtist && ( 
        <h1 className="title">Try some of your favorites</h1>
      )}

      {activeArtist ? ( 
        <div className="artist-details mt-3">
          {renderArtistDetails()} {}
        </div>
      ) : ( 
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-bs-ride="carousel"
          data-bs-pause="false"
          data-bs-interval="3000"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="3"
              aria-label="Slide 4"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <a href="/TaylorSwift" onClick={() => handleArtistClick('TSwift')}>
                <img
                  src="https://taylorpictures.net/albums/concerts/2024/theerastour/munichgermanyn1/normal_018.jpg"
                  className="d-block w-100"
                  alt="Taylor Swift"
                />
                <div className="carousel-caption">
                  <h5>Taylor Swift</h5>
                </div>
              </a>
            </div>
            <div className="carousel-item">
              <a href="/BillieEilish" onClick={() => handleArtistClick('BillieEilish')}>
                <img
                  src="https://media.gettyimages.com/id/2074591806/photo/hollywood-california-billie-eilish-attends-the-96th-annual-academy-awards-on-march-10-2024-in.jpg?s=612x612&w=0&k=20&c=o1nqk7KjPEFVUFe73NAhWGUWmZXjcS9wqPoLqov0leM="
                  className="d-block w-100"
                  alt="Billie Eilish"
                />
                <div className="carousel-caption">
                  <h5>Billie Eilish</h5>
                </div>
              </a>
            </div>
            <div className="carousel-item">
              <a href="/Drake" onClick={() => handleArtistClick('drake')}>
                <img
                  src="https://media.gettyimages.com/id/1350328655/photo/long-beach-california-drake-speaks-onstage-during-drakes-till-death-do-us-part-rap-battle-on.jpg?s=612x612&w=0&k=20&c=RE45pkVPl_H2v-N-XBiav160y64fTvN75RwiLnQr75E="
                  className="d-block w-100"
                  alt="Drake"
                />
                <div className="carousel-caption">
                  <h5>Drake</h5>
                </div>
              </a>
            </div>
            <div className="carousel-item">
              <a href="/KendrickLamar" onClick={() => handleArtistClick('KendrickLamar')}>
                <img
                  src="https://media.gettyimages.com/id/611919442/photo/austin-tx-recording-artist-kendrick-lamar-performs-on-the-samsung-stage-during-day-two-at.jpg?s=612x612&w=0&k=20&c=6OK6C5MK9BVdgtc7G1icBemkXFQA4PsOQTkkjdgecmo="
                  className="d-block w-100"
                  alt="Kendrick Lamar"
                />
                <div className="carousel-caption">
                  <h5>Kendrick Lamar</h5>
                </div>
              </a>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      )}
    </>
  );
}
