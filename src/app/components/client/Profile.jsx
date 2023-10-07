import React from "react";
import Link from "next/link";
import ProfileImage from "@app/assets/img/user-06.jpg"
import Image from "next/image";
// import user from "@app/assets/img/user.jpg";
// import { useRouter } from "next/navigation";
// import { toast } from "react-hot-toast";
// import { useDispatch } from "react-redux";
// import { setPatient } from "@app/redux/features/PatientSlice";
const Profile = () => {
   return (
    <li className='nav-item  user-profile-list'>
      <Link
        href='/profile'
        className='dropdown-toggle nav-link user-link'
        data-bs-toggle='dropdown'
      >
        <div className='user-names'>
          <h5>Name</h5>
          <span>Admin</span>
        </div>

        <Image
          src={ProfileImage}
          alt='Admin'
          width={40}
          height={40}
          className='img-fluid rounded'
        />
      </Link>
    </li>


  );
};

export default Profile;
