import './app.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import Home from './home/home';
import About from './about/about';
import Login from './login/login';
import { TSwift, BillieEilish, Drake, KendrickLamar } from './home/artists';
import { BlankSpace, CruelSummer, ShakeItOff, Lovely, Blue, Lunch, UMyEverything, OneDance, GodsPlan, NotLikeUs, MoneyTrees, LikeThat } from './home/songs';

export default function App() {
  const [song, setSong] = useState(null);

  useEffect(() => {
    fetch('http://localhost:4000/api/random-song')
      .then((response) => response.json())
      .then((data) => setSong(data))
      .catch((error) => console.error('Error fetching song:', error));
  }, []);

  return (
    <BrowserRouter>
      <div>
        <nav className='navbar navbar-expand-sm navbar-dark custom-navbar'>
          <div className='container-fluid'>
            <NavLink className='navbar-brand' to='/'>Behind the Beat</NavLink>

            <button
              className='navbar-toggler'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#collapsibleNavbar'
            >
              <span className='navbar-toggler-icon'></span>
            </button>

            <div className='collapse navbar-collapse' id='collapsibleNavbar'>
              <ul className='navbar-nav me-auto'>
                <li className='nav-item'>
                  <NavLink className='nav-link' to='/about'>About</NavLink>
                </li>
                <li className='nav-item'>
                  <NavLink className='nav-link' to='/home'>Home</NavLink>
                </li>
              </ul>
            </div>

            <div className='d-flex justify-content-between w-100'>
              <form className='d-flex flex-grow-1 me-2'>
                <input
                  className='form-control me-2'
                  type='text'
                  placeholder={song ? `search "${song.title}" by ${song.artist}` : 'Loading...'}
                />
                <button className='btn btn-primary' type='button'>Search</button>
              </form>
              <NavLink to='/login' className='btn btn-primary' type='button'>Login</NavLink>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/home" element={<Home />} />
          <Route path="/TaylorSwift" element={<TSwift />} />
          <Route path="/BillieEilish" element={<BillieEilish />} />
          <Route path="/Drake" element={<Drake />} />
          <Route path="/KendrickLamar" element={<KendrickLamar />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/blankSpace" element={<BlankSpace />} />
          <Route path="/cruelSummer" element={<CruelSummer />} />
          <Route path="/shakeItOff" element={<ShakeItOff />} />
          <Route path="/lovely" element={<Lovely />} />
          <Route path="/blue" element={<Blue />} />
          <Route path="/lunch" element={<Lunch />} />
          <Route path="/uMyEverything" element={<UMyEverything />} />
          <Route path="/oneDance" element={<OneDance />} />
          <Route path="/godsPlan" element={<GodsPlan />} />
          <Route path="/notLikeUs" element={<NotLikeUs />} />
          <Route path="/moneyTrees" element={<MoneyTrees />} />
          <Route path="/likeThat" element={<LikeThat />} />
        </Routes>

        <footer className='custom-footer text-white text-center text-lg-start mt-4'>
          <div className='container p-4'>
            <div className='row'>
              <div className='col-lg-6 col-md-12 mb-4 mb-md-0'>
                <h5 className='text-uppercase'>About</h5>
                <p>
                  <NavLink to='/about' className='text-white'>Learn more about Behind The Beat</NavLink>
                </p>
              </div>

              <div className='col-lg-6 col-md-12 mb-4 mb-md-0'>
                <h5 className='text-uppercase'>My Github</h5>
                <p>
                  <NavLink to='https://github.com/ndunn5/Startup' className='text-white'>Check out our GitHub repository</NavLink>
                </p>
              </div>
            </div>
          </div>

          <div className='custom-footer-bottom text-center p-3'>
            <p className='mb-0'>2024 Behind The Beat - All rights reserved</p>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

function NotFound() {
  return <main className='container-fluid bg-secondary text-center'>404: Return to sender. Address unknown.</main>;
}
