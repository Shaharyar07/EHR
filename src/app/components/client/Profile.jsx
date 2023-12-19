"use client";
import React from "react";
import Link from "next/link";
import ProfileImage from "@app/assets/img/user-06.jpg";
import Image from "next/image";
import { useSession } from "next-auth/react";
const Profile = () => {
  const { data: session } = useSession();
  return (
    <li className='nav-item  user-profile-list'>
      <Link
        href='/profile'
        className='dropdown-toggle nav-link user-link'
        data-bs-toggle='dropdown'
      >
        <div className='user-names'>
          <h5>{session?.user?.name}</h5>
          <span>{session?.user?.role}</span>
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
