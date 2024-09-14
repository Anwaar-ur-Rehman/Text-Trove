import React from 'react'
import propTypes from 'prop-types'
// import { Link } from 'react-router-dom' // Comment out Link for now

export default function Navbar(props) {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          {/* Replace Link with a */}
          <a className="navbar-brand" href="/">{props.title}</a> {/* Using href instead of to */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                {/* Replace Link with a */}
                <a className="nav-link active" aria-current="page" href="#">Home</a> {/* Using href instead of to */}
              </li>
              <li className="nav-item">
                {/* Comment out the About section */}
                {/* <a className="nav-link" href="/about">About</a> */}
              </li>
              <li className="nav-item">
                {/* <a className="nav-link" href="/contact">Contact</a> */}
              </li>
            </ul>
            {/* <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form> */}
          </div>
          <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
          </div>
        </div>
      </nav>
    </div>
  )
}

Navbar.propTypes = {
  title: propTypes.string
}

Navbar.defaultProps = {
  title: 'set title here',
}
