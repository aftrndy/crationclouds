const Sidebar = () => {
  return (
    <aside className="app-sidebar sticky" id="sidebar">
      <div className="main-sidebar-header">
        <a href="/" className="header-logo">
          <img src="/assets/images/brand-logos/desktop-logo.png" alt="logo" className="desktop-logo" />
          <img src="/assets/images/brand-logos/toggle-logo.png" alt="logo" className="toggle-logo" />
          <img src="/assets/images/brand-logos/desktop-dark.png" alt="logo" className="desktop-dark" />
          <img src="/assets/images/brand-logos/toggle-dark.png" alt="logo" className="toggle-dark" />
          <img src="/assets/images/brand-logos/desktop-white.png" alt="logo" className="desktop-white" />
          <img src="/assets/images/brand-logos/toggle-white.png" alt="logo" className="toggle-white" />
        </a>
      </div>
      <div className="main-sidebar" id="sidebar-scroll">
        <nav className="main-menu-container nav nav-pills flex-column sub-open">
          <div className="slide-left" id="slide-left">
            <svg xmlns="http://www.w3.org/2000/svg" fill="#7b8191" width="24" height="24" viewBox="0 0 24 24"> <path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"></path> </svg>
          </div>
          <ul className="main-menu">
            <li className="slide__category"><span className="category-name">Main</span></li>
            <li className="slide has-sub">
              <a href="#" className="side-menu__item">
                <svg xmlns="http://www.w3.org/2000/svg"  className="side-menu__icon" width="24" height="24" viewBox="0 0 24 24"><path d="M3 13h1v7c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-7h1a1 1 0 0 0 .707-1.707l-9-9a.999.999 0 0 0-1.414 0l-9 9A1 1 0 0 0 3 13zm7 7v-5h4v5h-4zm2-15.586 6 6V15l.001 5H16v-5c0-1.103-.897-2-2-2h-4c-1.103 0-2 .897-2 2v5H6v-9.586l6-6z"/></svg>
                <span className="side-menu__label">Dashboards</span>
                <i className="fe fe-chevron-right side-menu__angle"></i>
              </a>
              <ul className="slide-menu child1">
                <li className="slide side-menu__label1">
                  <a href="#">Dashboards</a>
                </li>
                <li className="slide">
                  <a href="/" className="side-menu__item">Dashboard-1</a>
                </li>
                <li className="slide">
                  <a href="/index1" className="side-menu__item">Dashboard-2</a>
                </li>
                <li className="slide">
                  <a href="/index2" className="side-menu__item">Dashboard-3</a>
                </li>
              </ul>
            </li>
            <li className="slide__category"><span className="category-name">WEB APPS</span></li>
            {/* ...lanjutkan menu sesuai kebutuhan... */}
          </ul>
        </nav>
      </div>
    </aside>
  );
};
export default Sidebar;
