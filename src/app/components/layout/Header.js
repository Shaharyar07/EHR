import Image from "next/image";
import logo from "@app/assets/img/logo.png";
import note2 from "@app/assets/img/icons/logout.svg";
import Link from "next/link";
import Profile from "../client/Profile.jsx";
import { signOut } from "next-auth/react";

const Header = () => {
  return (
    <div className='header'>
      <div className='header-left'>
        <Link href='/' className='logo text-decoration-none'>
          <Image src={logo} alt='Logo' height={35} width={35} />
          <span>EHR</span>
        </Link>
      </div>

      <ul className='nav user-menu float-end'>
        <li className='nav-item dropdown d-none d-sm-block '>
          <Link
            id='open_msg_box'
            className='hasnotifications nav-link'
            href='/login'
            onClick={(e) => {
              e.preventDefault();
              signOut();
            }}
          >
            <Image src={note2} height={30} width={30} alt='note2' />
            <span className='pulse' />{" "}
          </Link>
        </li>
        <Profile />
      </ul>
    </div>
  );
};

export default Header;
