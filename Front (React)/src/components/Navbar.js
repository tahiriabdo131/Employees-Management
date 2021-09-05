import React from 'react'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-md bg-dark navbar-dark">
           {
                /**
                <a className="navbar-brand" href="#">Navbar</a>
                * 
                */
           }
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                    </li>
                    <li className="nav-item float-left">
                        <a className="nav-link" href="#">Link</a>
                    </li>
                </ul>
            </div>
            <div style={{padding: "20px"}}>
                <a className="float-left" href="#" style={{color: "white", fontWeight: "bold", textDecoration: "none"}}>LOGO</a>
            </div>
        </nav>
    )
}

export default Navbar
