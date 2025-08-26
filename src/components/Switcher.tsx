const Switcher = () => (
  <div className="offcanvas offcanvas-end" tabIndex={-1} id="switcher-canvas" aria-labelledby="offcanvasRightLabel">
    <div className="offcanvas-header border-bottom">
      <h5 className="offcanvas-title text-default" id="offcanvasRightLabel">Switcher</h5>
      <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div className="offcanvas-body">
      <nav className="border-bottom border-block-end-dashed">
        <div className="nav nav-tabs nav-justified" id="switcher-main-tab" role="tablist">
          <button className="nav-link active" id="switcher-home-tab" data-bs-toggle="tab" data-bs-target="#switcher-home" type="button" role="tab" aria-controls="switcher-home" aria-selected="true">Theme Styles</button>
          <button className="nav-link" id="switcher-profile-tab" data-bs-toggle="tab" data-bs-target="#switcher-profile" type="button" role="tab" aria-controls="switcher-profile" aria-selected="false">Theme Colors</button>
        </div>
      </nav>
      <div className="tab-content" id="nav-tabContent">
        <div className="tab-pane fade show active border-0" id="switcher-home" role="tabpanel" aria-labelledby="switcher-home-tab" tabIndex={0}>
          <div className="">
            <p className="switcher-style-head">Theme Color Mode:</p>
            <div className="row switcher-style gx-0">
              <div className="col-4"></div>
              <div className="col-4"></div>
            </div>
          </div>
          <div className="">
            <p className="switcher-style-head">Directions:</p>
            <div className="row switcher-style gx-0">
              <div className="col-4"></div>
              <div className="col-4"></div>
            </div>
          </div>
          <div className="">
            <p className="switcher-style-head">Navigation Styles:</p>
            <div className="row switcher-style gx-0">
              <div className="col-4"></div>
              <div className="col-4"></div>
            </div>
          </div>
          <div className="navigation-menu-styles">
            <p className="switcher-style-head">Vertical &amp; Horizontal Menu Styles:</p>
            <div className="row switcher-style gx-0 gy-2">
              <div className="col-4"></div>
            </div>
          </div>
          <div className="sidemenu-layout-styles">
            <p className="switcher-style-head">Sidemenu Layout Styles:</p>
            <div className="row switcher-style gx-0 gy-2"></div>
          </div>
          <div className="">
            <p className="switcher-style-head">Page Styles:</p>
            <div className="row switcher-style gx-0"></div>
          </div>
          <div className="">
            <p className="switcher-style-head">Layout Width Styles:</p>
            <div className="row switcher-style gx-0"></div>
          </div>
          <div className="">
            <p className="switcher-style-head">Menu Positions:</p>
            <div className="row switcher-style gx-0"></div>
          </div>
          <div className="">
            <p className="switcher-style-head">Header Positions:</p>
            <div className="row switcher-style gx-0"></div>
          </div>
          <div className="">
            <p className="switcher-style-head">Loader:</p>
            <div className="row switcher-style gx-0"></div>
          </div>
        </div>
        <div className="tab-pane fade border-0" id="switcher-profile" role="tabpanel" aria-labelledby="switcher-profile-tab" tabIndex={0}>
          <div>
            <div className="theme-colors"></div>
            <div className="theme-colors"></div>
            <div className="theme-colors"></div>
            <div className="theme-colors"></div>
            <div className="menu-image mb-3"></div>
          </div>
        </div>
        <div className="d-grid canvas-footer">
          <a href="javascript:void(0);" id="reset-all" className="btn btn-danger btn-block m-1">Reset</a>
        </div>
      </div>
    </div>
  </div>
);

export default Switcher;
