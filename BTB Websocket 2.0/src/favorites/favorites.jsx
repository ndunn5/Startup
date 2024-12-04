import React from 'react';
import './favorites.css';
import { Link } from 'react-router-dom'; 

export default function Favorites() {
  return (
    <div className="container my-5">
      <div className="text-center">
        <h1 className="display-4 mb-4">Your Favorites</h1>
        <div className="list-group">
          <Link to="/taylorSwift" className="list-group-item list-group-item-action">
            Taylor Swift
          </Link>
          <Link to="/billieEilish" className="list-group-item list-group-item-action">
            Billie Eilish
          </Link>
          <Link to="/drake" className="list-group-item list-group-item-action">
            Drake
          </Link>
          <Link to="/kendrickLamar" className="list-group-item list-group-item-action">
            Kendrick Lamar
          </Link>
        </div>
      </div>
    </div>
  );
}
