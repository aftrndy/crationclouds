const Header = () => {
  return (
    <header className="app-header">
      <div className="main-header-container container-fluid">
        <div className="header-content-left align-items-center">
          <div className="header-element">
            <div className="horizontal-logo">
              <a href="/" className="header-logo">
                <img src="/assets/images/brand-logos/desktop-logo.png" alt="logo" className="desktop-logo" />
                <img src="/assets/images/brand-logos/toggle-logo.png" alt="logo" className="toggle-logo" />
                <img src="/assets/images/brand-logos/desktop-dark.png" alt="logo" className="desktop-dark" />
                <img src="/assets/images/brand-logos/toggle-dark.png" alt="logo" className="toggle-dark" />
                <img src="/assets/images/brand-logos/desktop-white.png" alt="logo" className="desktop-white" />
                <img src="/assets/images/brand-logos/toggle-white.png" alt="logo" className="toggle-white" />
              </a>
            </div>
          </div>
          <div className="header-element">
            <a aria-label="Hide Sidebar" className="sidemenu-toggle header-link animated-arrow hor-toggle horizontal-navtoggle" data-bs-toggle="sidebar" href="#"><span></span></a>
          </div>
          <div className="main-header-center ms-3 d-sm-none d-md-none d-lg-block form-group">
            <input className="form-control" placeholder="Search..." type="search" />
            <button className="btn"><i className="fas fa-search"></i></button>
          </div>
        </div>
        <div className="header-content-right">
          <div className="header-element header-search d-block d-sm-none">
            <a href="#" className="header-link dropdown-toggle" data-bs-auto-close="outside" data-bs-toggle="dropdown">
              <svg xmlns="http://www.w3.org/2000/svg" className="header-link-icon" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
            </a>
            <ul className="main-header-dropdown dropdown-menu dropdown-menu-end">
              <li>
                <span className="dropdown-item d-flex align-items-center" >
                  <span className="input-group">
                    <input type="text" className="form-control" placeholder="Search..." aria-label="Search input" aria-describedby="button-addon2" />
                    <button className="btn btn-primary" type="button" id="button-addon2">Search</button>
                  </span>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
