import Image from "next/image";
import logo from "@app/assets/img/logo.png";
import bar from "@app/assets/img/icons/bar-icon.svg";
import search from "@app/assets/img/icons/search-normal.svg";
import note from "@app/assets/img/icons/note-icon-02.svg";
import user from "@app/assets/img/user.jpg";
import note2 from "@app/assets/img/icons/note-icon-01.svg";
import Link from "next/link";
import Profile from "../client/Profile.jsx";


const Header = () => {
  
  return (
    <div className='header'>
      <div className='header-left'>
        <Link href='/' className='logo text-decoration-none'>
          <Image src={logo} alt='Logo' height={35} width={35} />
          <span>EHR</span>
        </Link>
      </div>
      {/* <div id='toggle_btn'>
        <Image src={bar} alt='bar' />
      </div> */}
      {/* <Link
        href='#'
        id='mobile_btn'
        className='mobile_btn float-start'
        onClick={toggleSidebar}
      >
        <Image src={bar} alt='bar' />
      </Link> */}
      <div className='top-nav-search mob-view'>
        <form>
          <input
            type='text'
            className='form-control'
            placeholder='Search here'
          />
          <a className='btn'>
            <Image src={search} alt='search' />
          </a>
        </form>
      </div>
      <ul className='nav user-menu float-end'>
        <li className='nav-item dropdown d-none d-sm-block'>
          <a
            href='#'
            className='dropdown-toggle nav-link'
            data-bs-toggle='dropdown'
          >
            <Image src={note} alt='note' />
            <span className='pulse' />{" "}
          </a>
          <div className='dropdown-menu notifications'>
            <div className='topnav-dropdown-header'>
              <span>Notifications</span>
            </div>
            <div className='drop-scroll'>
              <ul className='notification-list'>
                <li className='notification-message'>
                  <a href='activities.html'>
                    <div className='media'>
                      <span className='avatar'>
                        <Image src={user} alt='user' className='img-fluid' />
                      </span>
                      <div className='media-body'>
                        <p className='noti-details'>
                          <span className='noti-title'>John Doe</span> added new
                          task{" "}
                          <span className='noti-title'>
                            Patient appointment booking
                          </span>
                        </p>
                        <p className='noti-time'>
                          <span className='notification-time'>4 mins ago</span>
                        </p>
                      </div>
                    </div>
                  </a>
                </li>
                <li className='notification-message'>
                  <a href='activities.html'>
                    <div className='media'>
                      <span className='avatar'>V</span>
                      <div className='media-body'>
                        <p className='noti-details'>
                          <span className='noti-title'>Tarah Shropshire</span>
                          changed the task name{" "}
                          <span className='noti-title'>
                            Appointment booking with payment gateway
                          </span>
                        </p>
                        <p className='noti-time'>
                          <span className='notification-time'>6 mins ago</span>
                        </p>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <div className='topnav-dropdown-footer'>
              <a href='activities.html'>View all Notifications</a>
            </div>
          </div>
        </li>
        <li className='nav-item dropdown d-none d-sm-block'>
          <Link
            href='#'
            id='open_msg_box'
            className='hasnotifications nav-link'
          >
            <Image src={note2} alt='note2' />
            <span className='pulse' />{" "}
          </Link>
        </li>
        <Profile />
      </ul>
    </div>
  );
};

export default Header;
