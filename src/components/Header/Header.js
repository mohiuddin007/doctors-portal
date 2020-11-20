import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="/">Doctors Portal</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav ml-auto">
      <Link to="/" className="nav-link" >Home </Link>
      <Link to="/about" className="nav-link">About</Link>
      <Link to="/dental" className="nav-link" >Dental Services </Link>
      <Link to="/reviews" className="nav-link">Reviews</Link>
      <Link to="/blog" className="nav-link">Blog</Link>
      <Link to="/dashboard" className="nav-link">Dashboard</Link>
      <Link to="/contact" className="nav-link">Contact Us</Link>
    </div>
  </div>
</nav>
    );
};

export default Header;