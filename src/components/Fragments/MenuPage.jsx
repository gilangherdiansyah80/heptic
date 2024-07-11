import '../../app.css';
import Button from '../Elements/Button';
import dataProduct from '../../utils/dataProduct';
import { Link } from 'react-router-dom';
import { Fragment } from 'react';

const MenuPage = () => {
    return (
    <Fragment>
    <section className="md:mt-20 w-full bg-no-repeat md:bg-auto bg-center bg-contain bg-gray" style={{backgroundImage: 'url("/images/HEPTICLOGOOUT.png")', backgroundSize: '400px'}}>
            <div className="wrapper p-3 bg-black w-full h-80 md:h-96 bg-opacity-55 flex flex-col justify-between items-center">
                 <h1 className='animation-text text-white text-6xl md:text-7xl -translate-x-96 -translate-y-16 md:translate-y-8 opacity-0 duration-2000'>Menu</h1>
                 <p className='animation-des text-white md:text-xl text-center translate-x-96 md:-translate-y-14 opacity-0 duration-1000'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, nesciunt.</p>   
            </div>
        </section>


        <div className='p-3 xl:flex xl:justify-center'>
        <section className='p-3 w-full flex flex-col gap-y-10 md:justify-around md:gap-x-5 md:h-screen md:items-center xl:w-1/2 xl:mb-28'>
            <div className='w-full flex flex-col justify-center items-center gap-y-3'>
                <h1 data-aos="flip-left" data-aos-duration="2000" className='font-inter text-5xl text-lightblack'>Product List</h1>
                <div className='w-full flex flex-col gap-y-3 md:grid md:grid-cols-2 md:gap-3'>
                {dataProduct.map((product) => (
                    <div key={product.id} className='bg-lightblack rounded-xl flex flex-col items-center gap-y-3 py-3 w-full'>
                        <h2 data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="2000" className='text-white text-4xl font-inter font-bold'>{product.name}</h2>
                        <img data-aos="fade-right" data-aos-duration="2000" src={product.img} alt={product.name} />
                        <div  data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="2000" className='flex gap-x-3 items-center w-full justify-around'>
                            <span className='text-white text-2xl md:text-3xl'>Rp.{product.price.toLocaleString('id-ID', {styles: 'currency', currency: 'IDR'})}</span>
                            <Link to={`/detail-product/${product.id}`}>
                                <Button style='border-black border-2 md:text-lg px-3 py-1 md:px-5 md:py-2 rounded-md text-white hover:text-black hover:bg-transparent hover:bg-gradient-to-r from-gray to-darkwhite'>Lihat Detail</Button>
                            </Link>
                        </div>
                    </div>
                ))}
                </div>
            </div>
        </section>
        </div>
    </Fragment>
    )
}

export default MenuPage;
