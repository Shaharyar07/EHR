"use client";
import Image from "next/image";
import morning from "./assets/img/morning-img-01.png";

export default function Home() {
  return (
    <main className='content mt-5'>
      <div className='good-morning-blk mt-5'>
        <div className='row mt-5'>
          <div className='col-md-6 mt-5 item-center justify-content-center'>
            <div className='morning-user'>
              <h2>{/* Good Morning, <span>{data?.token?.name}</span> */}</h2>
              <p>Have a nice day at work</p>
            </div>
          </div>
          <div className='col-md-6 position-blk'>
            <div className='morning-img'>
              <Image src={morning} alt='' />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
