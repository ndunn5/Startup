import React from 'react';
import './about.css'

export default function About() {
  return (
    <main className='container-fluid custom-bg text-center'>
      <div>
        <header className="position-relative">
          <img 
            src="https://media.gettyimages.com/id/1243888784/photo/long-beach-ca-dancers-take-a-moment-with-their-thoughts-at-the-waters-edge-while-joining.jpg?s=612x612&w=0&k=20&c=ce50uEdAsilw0gOzVah4uDSYw-rp8eUE8vzFIavrzro=" 
            className="img-fluid w-100" 
            alt="About Page" 
            style={{ height: "300px", objectFit: "cover" }} 
          />
          <div className="position-absolute top-50 start-50 translate-middle text-center text-white">
            <h1 className="fw-bold" >About Behind The Beat</h1>
          </div>
        </header>

        <section className="container py-5 white-background">
          <div className="row mb-4">
            <div className="col text-center">
              <h2 className="fw-bold" >Mission</h2>
              <p className="lead2">
                The aim is to provide a platform for music lovers to discover, discuss, and enjoy their favorite artists and songs.
              </p>
            </div>
          </div>   
          <div className="row mb-4">
            <div className="col text-center">
              <h2 className="fw-bold" >Vision</h2>
              <p className="lead2">
                To connect music enthusiasts around the world that can share their interpretations of songs, creating a tight-knit community.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col text-center">
              <h2 className="fw-bold" >Team</h2>
              <p className="lead2">
                A music lover dedicated to enhancing the music experience online.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
