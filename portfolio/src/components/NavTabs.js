import React from 'react';

function NavTabs({ currentPage, handlePageChange }) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand"
                    href="#"
                    onClick={() => handlePageChange('About')}
                >
                    Gage Cotton
                </a>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a
                                className={`nav-link ${currentPage === 'About' ? 'active' : ''}`}
                                onClick={() => handlePageChange('About')}
                                href="#About"
                            >
                                About
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className={`nav-link ${currentPage === 'Portfolio' ? 'active' : ''}`}
                                onClick={() => handlePageChange('Portfolio')}
                                href="#Portfolio"
                            >
                                Portfolio
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className={`nav-link ${currentPage === 'Contact' ? 'active' : ''}`}
                                onClick={() => handlePageChange('Contact')}
                                href="#Contact"
                            >
                                Contact
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className={`nav-link ${currentPage === 'Contact' ? 'active' : ''}`}
                                onClick={() => handlePageChange('Resume')}
                                href="#Resume"
                            >
                                Resume
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavTabs;
