/* eslint-disable no-unused-vars */
import { Link, Outlet } from "react-router-dom";


import DashboardNavbar from "./DashboardNavbar/Dashboardnavbar";
import Footer from "../../pages/shared/footer/Footer";



const UserDashboard = () => {
  return (
    <div>
      <div className="drawer lg:drawer-open ">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col  ">
          {/* Page content here */}
          <DashboardNavbar></DashboardNavbar>

          <Outlet></Outlet>
          <Footer></Footer>
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open Menu
          </label>
        </div>
        <div className="drawer-side ">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className=" menu p-4 w-60 min-h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <li className="mt-3">
              <Link to="/">
                <ion-icon name="home"></ion-icon>
                Home
              </Link>
            </li>
            <li className="mt-3">
              <Link to="/">
                <ion-icon name="settings-outline"></ion-icon>
                Settings
              </Link>
            </li>
            <li className="mt-3">
              <Link to="/">
                <ion-icon name="help-outline"></ion-icon>
                Help Center
              </Link>
            </li>

            <li className="mt-3">
              <Link to="">History</Link>
            </li>
            <li className="mt-3">
              <Link to="">Medications</Link>
            </li>
            <li className="mt-3">
              <Link to="">Allergies</Link>
            </li>
            <li className="mt-3">
              <Link to="">Results</Link>
            </li>
            <li className="mt-3">
              <Link to="">Vaccines</Link>
            </li>
            <li className="mt-3">
              <Link to="">Massages</Link>
            </li>
            <li className="mt-3">
              <Link to="">Calls</Link>
            </li>
            <li className="mt-3">
              <Link to="">Files</Link>
            </li>
            <li className="mt-3">
              <Link to="">Billing</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
