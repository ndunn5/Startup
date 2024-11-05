import React from 'react';
import './artists.css';

export const tSwift = () => {
    return (
      <>
        <header className="position-relative">
          {/* Background image */}
          <img
            src="https://media.gettyimages.com/id/1243395808/photo/nashville-tennessee-nsai-songwriter-artist-of-the-decade-honoree-taylor-swift-performs.jpg?s=612x612&w=0&k=20&c=3pp6H1DHGSOr3hCZZRRsiqaslRrC6_1l6ytlp8E6w6I="
            className="img-fluid w-100"
            alt="Header Image"
          />
  
          {/* Title overlay */}
          <div className="position-absolute top-50 start-50 translate-middle text-center text-white">
            <h1 className="display-4 fw-bold">Taylor Swift</h1>
            <p className="lead">Pick a song you want to share your thoughts on or hear others!</p>
          </div>
        </header>
  
        <main>
          {/* Main content can go here */}
        </main>
  
        <nav>
          <div className="list-group">
            <a href="cruelSummer.html" className="list-group-item list-group-item-action">Cruel Summer</a>
            <a href="shakeItOff.html" className="list-group-item list-group-item-action">Shake it Off</a>
            <a href="blankSpace.html" className="list-group-item list-group-item-action">Blank Space</a>
          </div>
        </nav>
  
        {/* Bootstrap JS - include this in your main index.html file or use it in your build setup */}
        {/* Note: Script tags should generally be included in the index.html file of a React app */}
      </>
    );
  };
export const billieEilish = () => {
    return (
        <>
          <header className="position-relative">
            {/* Background image */}
            <img
              src="https://media.gettyimages.com/id/2066804427/photo/billie-eilish-performs-onstage-at-the-96th-annual-oscars-held-at-dolby-theatre-on-march-10.jpg?s=612x612&w=0&k=20&c=5faDFjz6nE1fUjZqbDABm3ImoThVy-T-kF7R_3LleO4="
              className="img-fluid w-100"
              alt="Billie Eilish"
            />
    
            {/* Title overlay */}
            <div className="position-absolute top-50 start-50 translate-middle text-center text-white">
              <h1 className="display-4 fw-bold">Billie Eilish</h1>
              <p className="lead">Pick a song you want to share your thoughts on or hear others!</p>
            </div>
          </header>
    
          <main className="container my-4">
            <div className="list-group">
              <a href="lovely.html" className="list-group-item list-group-item-action">Lovely</a>
              <a href="BLUE.html" className="list-group-item list-group-item-action">BLUE</a>
              <a href="LUNCH.html" className="list-group-item list-group-item-action">LUNCH</a>
            </div>
          </main>
        </>
      );
    };

    export const drake = () => {
        return (
          <>
            <header className="position-relative">
              {/* Background image */}
              <img
                src="https://media.gettyimages.com/id/610058312/photo/las-vegas-nv-recording-artist-drake-performs-onstage-at-the-2016-iheartradio-music-festival-at.jpg?s=612x612&w=0&k=20&c=odEFeT8381FxUYXOcOd8PvY4g1aQDG78mw6a-Vz7pLs="
                className="img-fluid w-100"
                alt="Drake"
              />
      
              {/* Title overlay */}
              <div className="position-absolute top-50 start-50 translate-middle text-center text-white">
                <h1 className="display-4 fw-bold">Drake</h1>
                <p className="lead">Pick a song you want to share your thoughts on or hear others!</p>
              </div>
            </header>
      
            <main className="container my-4">
              <div className="list-group">
                <a href="uMyEverything.html" className="list-group-item list-group-item-action">U My Everything</a>
                <a href="oneDance.html" className="list-group-item list-group-item-action">One Dance</a>
                <a href="godsPlan.html" className="list-group-item list-group-item-action">God's Plan</a>
              </div>
            </main>
          </>
        );
      };

      export const kendrickLamar = () => {
        return (
          <>
            <header className="position-relative">
              {/* Background image */}
              <img
                src="https://media.gettyimages.com/id/1405302709/photo/glastonbury-england-kendrick-lamar-performs-on-the-pyramid-stage-during-day-five-of.jpg?s=612x612&w=0&k=20&c=OXi-JHE6wBhzWT3EnFskTaNUlF6ui2KafNXkolP5ld4="
                className="img-fluid w-100"
                alt="Kendrick Lamar"
              />
      
              {/* Title overlay */}
              <div className="position-absolute top-50 start-50 translate-middle text-center text-white">
                <h1 className="display-4 fw-bold">Kendrick Lamar</h1>
                <p className="lead">Pick a song you want to share your thoughts on or hear others!</p>
              </div>
            </header>
      
            <main className="container my-4">
              <div className="list-group">
                <a href="notLikeUs.html" className="list-group-item list-group-item-action">Not Like Us</a>
                <a href="moneyTrees.html" className="list-group-item list-group-item-action">Money Trees</a>
                <a href="likeThat.html" className="list-group-item list-group-item-action">Like That</a>
              </div>
            </main>
          </>
        );
      };