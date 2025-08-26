
import StorageUsageCircle from './dashboard/StorageUsageCircle';
import StatCard from './dashboard/StatCard';

const DashboardContent: React.FC = () => {
  return (
    <div className="main-content app-content">
      <div className="main-container container-fluid">
        {/* Breadcrumb */}
        <div className="breadcrumb-header justify-content-between">
          <div className="left-content">
            <span className="main-content-title mg-b-0 mg-b-lg-1">DASHBOARD</span>
          </div>
          <div className="justify-content-center mt-2">
            <ol className="breadcrumb">
              <li className="breadcrumb-item fs-15">
                <a href="#">Dashboard</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Sales
              </li>
            </ol>
          </div>
        </div>
        {/* /Breadcrumb */}

        {/* Row - Welcome Card & Stat Cards */}
        <div className="row">
          <div className="col-xxl-5 col-xl-12 col-lg-12 col-md-12 col-sm-12">
            <div className="row">
              <div className="col-xl-12 col-lg-12 col-md-12 col-xs-12">
                <div className="card">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-xl-9 col-lg-7 col-md-6 col-sm-12 mb-sm-0 mb-4">
                        <div className="text-justified align-items-center">
                          <h3 className="text-dark fw-semibold mb-2 mt-0">
                            Hi, Welcome Back <span className="text-primary">Nick!</span>
                          </h3>
                          <p className="text-dark fs-14 mb-3 lh-3">
                            You have used the 85% of free plan storage. Please upgrade your plan to get unlimited storage.
                          </p>
                          <button className="btn btn-primary shadow">Upgrade Now</button>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-5 col-md-6 col-sm-12 d-flex align-items-center justify-content-center upgrade-chart-circle">
                        <StorageUsageCircle percent={85} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Stat Cards */}
              <div className="col-xl-6 col-lg-6 col-md-6 col-xs-12">
                <StatCard
                  title="Today Orders"
                  value="5,472"
                  iconClass="fe fe-shopping-bag fs-16 text-primary"
                  iconBgClass="bg-primary-transparent"
                  trend="up"
                  trendValue="+427"
                  trendColor="success"
                />
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-xs-12">
                <StatCard
                  title="Today Earnings"
                  value="$7,589"
                  iconClass="fe fe-dollar-sign fs-16 text-info"
                  iconBgClass="bg-info-transparent"
                  trend="down"
                  trendValue="-453"
                  trendColor="danger"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Stat Cards Tambahan */}
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-6 col-xs-12">
            <StatCard
              title="Profit Gain"
              value="$8,943"
              iconClass="fe fe-external-link fs-16 text-secondary"
              iconBgClass="bg-secondary-transparent"
              trend="up"
              trendValue="+788"
              trendColor="success"
            />
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6 col-xs-12">
            <StatCard
              title="Total Earnings"
              value="$57.2M"
              iconClass="fe fe-credit-card fs-16 text-warning"
              iconBgClass="bg-warning-transparent"
              trend="down"
              trendValue="-693"
              trendColor="danger"
            />
          </div>
        </div>

        {/* Browser Usage Card */}
        <div className="row">
          <div className="col-xl-12 col-lg-12 col-md-12 col-xs-12">
            <div className="card">
              <div className="card-header pb-1">
                <h3 className="card-title mb-2">Browser Usage</h3>
              </div>
              <div className="card-body p-0">
                <div className="browser-stats">
                  {/* Chrome */}
                  <div className="d-flex align-items-center item border-bottom my-2">
                    <div className="d-flex">
                      <img src="/assets/images/svgicons/chrome.svg" alt="img" className="ht-30 wd-30 me-2" />
                      <div className="truncate">
                        <h6>Chrome</h6>
                        <span className="text-muted fs-12">Google, Inc.</span>
                      </div>
                    </div>
                    <div className="ms-auto my-auto">
                      <div className="d-flex">
                        <span className="me-4 mt-1 fw-semibold fs-16">35,502</span>
                        <span className="text-success fs-13 my-auto"><i className="fe fe-trending-up text-success mx-2 my-auto"></i>12.75%</span>
                      </div>
                    </div>
                  </div>
                  {/* Edge */}
                  <div className="d-flex align-items-center item border-bottom my-2">
                    <div className="d-flex">
                      <img src="/assets/images/svgicons/edge.svg" alt="img" className="ht-30 wd-30 me-2" />
                      <div className="truncate">
                        <h6>Edge</h6>
                        <span className="text-muted fs-12">Microsoft Corporation, Inc.</span>
                      </div>
                    </div>
                    <div className="ms-auto my-auto">
                      <div className="d-flex">
                        <span className="me-4 mt-1 fw-semibold fs-16">25,364</span>
                        <span className="text-success"><i className="fe fe-trending-down text-danger mx-2 my-auto"></i>24.37%</span>
                      </div>
                    </div>
                  </div>
                  {/* Firefox */}
                  <div className="d-flex align-items-center item border-bottom my-2">
                    <div className="d-flex">
                      <img src="/assets/images/svgicons/firefox.svg" alt="img" className="ht-30 wd-30 me-2" />
                      <div className="truncate">
                        <h6>Firefox</h6>
                        <span className="text-muted fs-12">Mozilla Foundation, Inc.</span>
                      </div>
                    </div>
                    <div className="ms-auto my-auto">
                      <div className="d-flex">
                        <span className="me-4 mt-1 fw-semibold fs-16">14,635</span>
                        <span className="text-success"><i className="fe fe-trending-up text-success mx-2 my-auto"></i>15,63%</span>
                      </div>
                    </div>
                  </div>
                  {/* Safari */}
                  <div className="d-flex align-items-center item border-bottom my-2">
                    <div className="d-flex">
                      <img src="/assets/images/svgicons/safari.svg" alt="img" className="ht-30 wd-30 me-2" />
                      <div className="truncate">
                        <h6>Safari</h6>
                        <span className="text-muted fs-12">Apple Corporation, Inc.</span>
                      </div>
                    </div>
                    <div className="ms-auto my-auto">
                      <div className="d-flex">
                        <span className="me-4 mt-1 fw-semibold fs-16">35,657</span>
                        <span className="text-danger"><i className="fe fe-trending-up text-success mx-2 my-auto"></i>12.54%</span>
                      </div>
                    </div>
                  </div>
                  {/* Opera */}
                  <div className="d-flex align-items-center item my-2 pb-3">
                    <div className="d-flex">
                      <img src="/assets/images/svgicons/opera.svg" alt="img" className="ht-30 wd-30 me-2" />
                      <div className="truncate">
                        <h6>Opera</h6>
                        <span className="text-muted fs-12">Opera, Inc.</span>
                      </div>
                    </div>
                    <div className="ms-auto my-auto">
                      <div className="d-flex">
                        <span className="me-4 mt-1 fw-semibold fs-16">12,563</span>
                        <span className="text-danger"><i className="fe fe-trending-down text-danger mx-2 my-auto"></i>15.12%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Project Budget & Recent Customers, Main Tasks, Sales Activity, Warehouse, Timeline, Weekly Visitors, Product Summary */}
        <div className="row">
          <div className="col-xxl-7 col-xl-12 col-lg-12 col-md-12 col-sm-12">
            <div className="card custom-card overflow-hidden">
              <div className="card-header border-bottom-0">
                <div>
                  <h3 className="card-title mb-2 ">Project Budget</h3>
                  <span className="d-block fs-12 mb-0 text-muted"></span>
                </div>
              </div>
              <div className="card-body">
                <div id="statistics1"></div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12 col-lg-12 col-xl-6">
                <div className="card overflow-hidden">
                  <div className="card-header pb-1">
                    <h3 className="card-title mb-2">Recent Customers</h3>
                  </div>
                  <div className="card-body p-0 customers mt-1">
                    <div className="list-group list-lg-group list-group-flush">
                      {/* Repeat for each customer */}
                      <a href="#" className="border-0">
                        <div className="list-group-item list-group-item-action p-3 border-0">
                          <div className="media mt-0">
                            <img className="avatar-lg rounded-circle me-3 my-auto shadow" src="/assets/images/faces/2.jpg" alt="Image description" />
                            <div className="media-body flex-fill">
                              <div className="d-flex align-items-center">
                                <div className="mt-0">
                                  <h5 className="mb-1 fs-13 font-weight-sembold text-dark">Samantha Melon</h5>
                                  <p className="mb-0 fs-12 text-muted">User ID: #1234</p>
                                </div>
                                <span className="ms-auto wd-45p fs-14">
                                  <span className="float-end badge bg-success-transparent">
                                    <span className="op-7 text-success fw-semibold">paid </span>
                                  </span>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                      {/* ...repeat for other customers... */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-12 col-xl-6">
                <div className="card">
                  <div className="card-header pb-3">
                    <h3 className="card-title mb-2">MAIN TASKS</h3>
                  </div>
                  <div className="card-body p-0 customers mt-1">
                    <div className="">
                      {/* Repeat for each task */}
                      <label className="p-2 d-flex">
                        <span className="form-check mb-0 ms-2">
                          <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked1" />
                        </span>
                        <span className="mx-3 my-auto">accurate information at any given point.</span>
                        <span className="ms-auto"><span className="badge bg-primary-transparent fw-semibold px-2 py-1 fs-11 me-2">Today</span></span>
                      </label>
                      {/* ...repeat for other tasks... */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-lg-12 col-xl-6 col-xxl-3">
            <div className="card">
              <div className="card-header pb-3">
                <h3 className="card-title mb-2">SALES ACTIVITY</h3>
              </div>
              <div className="card-body p-0 customers mt-1">
                <div className="country-card pt-0">
                  {/* Repeat for each country */}
                  <div className="mb-4">
                    <div className="d-flex">
                      <span className="fs-13 fw-semibold">India</span>
                      <div className="ms-auto"><span className="text-danger mx-1"><i className="fe fe-trending-down"></i></span><span className="number-font">$32,879</span> (65%)</div>
                    </div>
                    <div className="progress ht-7 br-5 mt-2">
                      <div className="progress-bar progress-bar-striped progress-bar-animated bg-primary" style={{ width: '60%' }}></div>
                    </div>
                  </div>
                  {/* ...repeat for other countries... */}
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-xxl-3 col-md-12 col-lg-12">
            <div className="card overflow-hidden">
              <div className="card-header pb-1">
                <div className="card-title mb-2">Warehouse Operating Costs</div>
              </div>
              <div className="card-body p-0">
                <div className="list-group projects-list border-0">
                  {/* Repeat for each cost item */}
                  <div className="list-group-item list-group-item-action flex-column align-items-start border-0">
                    <div className="d-flex w-100 justify-content-between">
                      <p className="fs-13 mb-2 fw-semibold text-dark">Order Picking</p>
                      <h4 className="text-dark mb-0 fw-semibold text-dark fs-18">3,876</h4>
                    </div>
                    <div className="d-flex w-100 justify-content-between">
                      <span className="text-muted fs-12"><i className="bx bx-caret-up text-success me-1"></i> <span className="text-success">03%</span> last month</span>
                      <span className="text-muted  fs-11">5 days ago</span>
                    </div>
                  </div>
                  {/* ...repeat for other cost items... */}
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-12 col-xl-6 col-xxl-3">
            <div className="card">
              <div className="card-header bg-transparent pb-0">
                <div>
                  <h3 className="card-title mb-2">Timeline</h3>
                </div>
              </div>
              <div className="card-body mt-0">
                <div className="latest-timelines mt-4">
                  <ul className="timelines mb-0">
                    {/* Repeat for each timeline event */}
                    <li>
                      <div className="featured_icon danger">
                        <i className="fas fa-circle"></i>
                      </div>
                    </li>
                    <li className="mt-0 activity">
                      <div><span className="fs-11 text-muted float-end">23 Sep, 2021</span></div>
                      <a href="#" className="fs-12 text-dark">
                        <p className="mb-1 fw-semibold text-dark fs-13">Anita Letterback</p>
                      </a>
                      <p className="text-muted mt-0 mb-0 fs-12">Lorem ipsum dolor tempor incididunt . </p>
                    </li>
                    {/* ...repeat for other timeline events... */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-xxl-3 col-md-12 col-lg-12">
            <div className="card">
              <div className="card-header pb-0">
                <h3 className="card-title mb-2">Weekly Visitors</h3>
              </div>
              <div className="card-body pb-0">
                <div className="row mb-4">
                  <div className="col-6">
                    <div className="text-muted fs-12 text-center mb-2">Average Male Visitors</div>
                    <div className="d-flex justify-content-center align-items-center flex-wrap">
                      <span className="me-3 fs-26 fw-semibold">2,132</span>
                      <span className="text-success fw-semibold"><i className="fa fa-caret-up me-2"></i>0.23%</span>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="text-muted fs-12 text-center mb-2">Average Female Visitors</div>
                    <div className="d-flex justify-content-center align-items-center flex-wrap">
                      <span className="me-3 fs-26 fw-semibold">1,053</span>
                      <span className="text-danger fw-semibold"><i className="fa fa-caret-down me-2"></i>0.11%</span>
                    </div>
                  </div>
                </div>
                <div id="Viewers"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Summary Table */}
        <div className="row">
          <div className="col-12 col-sm-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Product Summary</h4>
              </div>
              <div className="card-body pt-0 example1-table">
                <div className="d-flex justify-content-between flex-wrap gap-2 mb-3">
                  <div>
                    <input className="form-control form-control-sm" type="text" placeholder="Search Here" aria-label=".form-control-sm example" />
                  </div>
                  <div className="dropdown">
                    <a href="#" className="btn btn-primary btn-sm btn-wave waves-effect waves-light" data-bs-toggle="dropdown" aria-expanded="false">
                      Sort By<i className="ri-arrow-down-s-line align-middle d-inline-block"></i>
                    </a>
                    <ul className="dropdown-menu" role="menu">
                      <li><a className="dropdown-item" href="#">New</a></li>
                      <li><a className="dropdown-item" href="#">Popular</a></li>
                      <li><a className="dropdown-item" href="#">Relevant</a></li>
                    </ul>
                  </div>
                </div>
                <div className="table-responsive">
                  <table className="table  table-bordered text-nowrap mb-0" id="example1">
                    <thead>
                      <tr>
                        <th className="text-center">Purchase Date</th>
                        <th>Client Name</th>
                        <th>Product ID</th>
                        <th>Product</th>
                        <th>Product Cost</th>
                        <th>Payment Mode</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="text-center">#01</td>
                        <td>Sean Black</td>
                        <td>PRO12345</td>
                        <td>Mi LED Smart TV 4A 80</td>
                        <td>$14,500</td>
                        <td>Online Payment</td>
                        <td><span className="badge bg-success">Delivered</span></td>
                      </tr>
                      {/* ...repeat for other products... */}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardContent;
