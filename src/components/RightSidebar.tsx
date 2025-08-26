const RightSidebar = () => (
  <div className="sidebar offcanvas offcanvas-end" tabIndex={-1} id="sidebar-canvas" aria-labelledby="offcanvasRightLabel">
    <div className="offcanvas-header border-bottom bg-light">
      <h6 className="offcanvas-title text-default" id="offcanvasRightLabel22">NOTIFICATIONS</h6>
      <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div className="offcanvas-body p-0">
      <div className="panel-body tabs-menu-body latest-tasks p-0 border-0">
        <div className="tabs-menu p-3">
          <ul className="nav panel-tabs">
            <li className=""><a href="#side1" className="active" data-bs-toggle="tab">Chat</a></li>
            <li className=""><a href="#side2" data-bs-toggle="tab">Notifications</a></li>
            <li className=""><a href="#side3" data-bs-toggle="tab">Friends</a></li>
          </ul>
        </div>
        <div className="tab-content">
          <div className="tab-pane active p-0 border-0" id="side1">
            {/* Chat content here */}
          </div>
          <div className="tab-pane p-0 border-0" id="side2">
            <div className="list-group list-group-flush "></div>
          </div>
          <div className="tab-pane p-0 border-0" id="side3">
            <div className="list-group list-group-flush "></div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default RightSidebar;
