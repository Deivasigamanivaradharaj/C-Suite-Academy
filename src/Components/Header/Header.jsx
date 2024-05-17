import React from 'react'
import { Link } from 'react-router-dom';
import NavSlider from './NavSlider';

function Header() {
  return (
    <header>
          <nav class="navbar navbar-expand-lg navbar-light pt-4">
            <a class="navbar-brand ml-5 text-light" href="#"><button type="button" className="btn btn-light ">logo</button></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav ml-auto">
                <li className="nav-item active ml-4">
                  <Link className="nav-link text-light">Products</Link>
                  <NavSlider/>
                </li>
                <li className="nav-item active ml-4">
                <Link className="nav-link text-light ">Features</Link>
                </li>
                <li className="nav-item active ml-4">
                <Link className="nav-link text-light">Pricing</Link>
                </li>
                <li className="nav-item active ml-4">
                <Link className="nav-link text-light">Customers</Link>
                </li>
                <li className="nav-item active ml-4">
                <Link className="nav-link text-light">Why C-Suite</Link>
                </li>
                <li className="nav-item active ml-4">
                <Link className="nav-link text-light">Resources</Link>
                </li>
              </ul>

              <ul class="navbar-nav ml-auto mr-3 ">
                <li className="nav-item active">
                  <button type="button" className="btn button-logoin text-light mb-2 mb-md-2 mb-lg-0  ">Log In</button>
                </li>
                <li className="nav-item active ml-md-3 ">
                  <button type="button" className="btn btn-light ">Get Started</button>
                </li>
              </ul>  
            </div>
          </nav>
          <hr className='tag-size'/>
        </header>
  )
}

export default Header