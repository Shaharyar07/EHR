import Image from "next/image";
import morning from "./assets/img/morning-img-01.png";

export default function Home() {
  return (
    <main className='content mt-5'>
      <div class='good-morning-blk mt-5'>
        <div class='row mt-5'>
          <div class='col-md-6 mt-5 item-center justify-content-center'>
            <div class='morning-user'>
              <h2>
                Good Morning, <span>Daniel Bruk</span>
              </h2>
              <p>Have a nice day at work</p>
            </div>
          </div>
          <div class='col-md-6 position-blk'>
            <div class='morning-img'>
              <Image src={morning} alt='' />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
