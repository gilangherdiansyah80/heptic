import Tilty from 'react-tilty'
import '../../app.css';
import { Fragment } from 'react';
import Button from '../Elements/Button';
import { Link } from 'react-router-dom';

const HomePage = () => {
    
    const styleImage = {
        background: `linear-gradient(to top, #686D76 50%, rgba(0, 0, 0, 0) 100%)`,
    }

    return (
      <Fragment>
        {/* Awal Section Hero */}
        <section className='bg-no-repeat bg-top bg-contain bg-gray xl:flex xl:justify-center' style={styleImage}>
          <div className='p-3 flex flex-col gap-y-10 md:justify-around md:gap-x-5 md:h-screen md:items-center xl:w-1/2'>
          <div className='mt-20 flex flex-col gap-y-5 md:w-1/2 md:self-start xl:w-full' data-aos="fade-right"
data-aos-offset="300"
data-aos-easing="ease-in-sine" data-aos-duration="2000">
        <p className='font-bold text-lg md:text-3xl' style={{color: '#373A40'}}>HEPTIC</p>
        <h1 className='text-slate-800 font-bold text-5xl md:text-6xl'>Fashion for Every Occasion</h1>
        <p className='text-sm md:text-base' style={{color: '#373A40'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis beatae necessitatibus voluptatibus saepe corporis ipsam quam explicabo hic accusamus ut dignissimos, ab enim tempore non at totam cupiditate ullam quasi assumenda perspiciatis quae dicta! Dignissimos, fugit officiis. Possimus illum assumenda, distinctio ducimus consequuntur sequi exercitationem? Fugiat culpa aspernatur atque ipsam!</p>
        <div className='flex gap-x-3'>
          <Button style='border-2 px-3 py-1 rounded-xl md:px-5 md:py-2' stylePlus={{color: '#373A40'}}>Contact Us</Button>
          <Link to='/menu'>
            <Button style='border-2 px-3 py-1 rounded-xl text-white md:px-5 md:py-2' stylePlus={{backgroundColor: '#373A40'}}>Menu</Button>
          </Link>
        </div>
      </div>
      <div className='mb-20 md:mt-20 md:w-1/2 md:self-end xl:w-full xl:mt-10' data-aos="fade-left" data-aos-duration="1000">
        <img src="/images/baju1.jpg" alt="" className='rounded-xl xl:w-full xl:h-96' />
      </div>
          </div>
        </section>
    {/* Akhir Section Hero */}

    {/* Awal Section New Article */}
    <section className='flex flex-col items-center p-3 gap-y-3 w-full' style={{backgroundColor: '#EEEEEE'}}>
      <h2 data-aos="fade-up" data-aos-duration="2000" className='font-inter text-lg md:text-3xl' style={{color: '#686D76'}}>HEPTIC</h2>
      <h3 data-aos="fade-up" data-aos-duration="2000" className='text-3xl font-inter font-bold text-slate-800 md:text-7xl'>New Article</h3>
      <div className='md:w-1/2'>
        <Tilty>
          <div data-aos="flip-right" data-aos-duration="2000" className='article-box flex justify-center items-center w-full rounded-xl mb-10' style={{backgroundColor: '#373A40'}}>
            <img src="/images/baju2.png" alt="" className='duration-1000 w-full xl:w-1/2 rounded-xl' />
            <h1 className='opacity-0 duration-2000 absolute font-inter font-bold text-slate-800 text-5xl md:text-8xl'>Article 1</h1>
            <Button style='opacity-0 duration-2000 border-black border-2 px-5 py-1 rounded-xl text-black absolute bottom-0 hover:bg-gradient-to-r from-gray to-darkwhite md:px-7 md:py-3 md:text-lg'>Buy Now</Button>
          </div>
        </Tilty>
      </div>
    </section>
    {/* Akhir Section New Article */}

    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#18181b" fillOpacity="1" d="M0,256L8.9,250.7C17.8,245,36,235,53,240C71.1,245,89,267,107,245.3C124.4,224,142,160,160,133.3C177.8,107,196,117,213,149.3C231.1,181,249,235,267,250.7C284.4,267,302,245,320,208C337.8,171,356,117,373,96C391.1,75,409,85,427,122.7C444.4,160,462,224,480,218.7C497.8,213,516,139,533,96C551.1,53,569,43,587,74.7C604.4,107,622,181,640,186.7C657.8,192,676,128,693,112C711.1,96,729,128,747,122.7C764.4,117,782,75,800,69.3C817.8,64,836,96,853,138.7C871.1,181,889,235,907,234.7C924.4,235,942,181,960,165.3C977.8,149,996,171,1013,202.7C1031.1,235,1049,277,1067,288C1084.4,299,1102,277,1120,229.3C1137.8,181,1156,107,1173,80C1191.1,53,1209,75,1227,117.3C1244.4,160,1262,224,1280,256C1297.8,288,1316,288,1333,282.7C1351.1,277,1369,267,1387,240C1404.4,213,1422,171,1431,149.3L1440,128L1440,320L1431.1,320C1422.2,320,1404,320,1387,320C1368.9,320,1351,320,1333,320C1315.6,320,1298,320,1280,320C1262.2,320,1244,320,1227,320C1208.9,320,1191,320,1173,320C1155.6,320,1138,320,1120,320C1102.2,320,1084,320,1067,320C1048.9,320,1031,320,1013,320C995.6,320,978,320,960,320C942.2,320,924,320,907,320C888.9,320,871,320,853,320C835.6,320,818,320,800,320C782.2,320,764,320,747,320C728.9,320,711,320,693,320C675.6,320,658,320,640,320C622.2,320,604,320,587,320C568.9,320,551,320,533,320C515.6,320,498,320,480,320C462.2,320,444,320,427,320C408.9,320,391,320,373,320C355.6,320,338,320,320,320C302.2,320,284,320,267,320C248.9,320,231,320,213,320C195.6,320,178,320,160,320C142.2,320,124,320,107,320C88.9,320,71,320,53,320C35.6,320,18,320,9,320L0,320Z"></path></svg>
      </Fragment>
    )
}

export default HomePage;