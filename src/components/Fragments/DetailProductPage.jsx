import { useParams } from 'react-router-dom';
import { useState } from 'react';
import Button from '../Elements/Button';
import dataProduct from '../../utils/dataProduct';
import Icon from '../Elements/Icon';
import Tilty from 'react-tilty';

const DetailProductPage = () => {
    const [showDesc, setShowDesc] = useState(false);
    const [changeColor, setChangeColor] = useState('white');
    const [showSize, setShowSize] = useState('');
    const { id } = useParams();
    const product = dataProduct.find(p => p.id === parseInt(id));

    if (!product) {
        return <div>Product not found</div>;
    }

    const handleShowDesc = () => {
        setShowDesc(!showDesc);
    }

    const handleChangeColor = (color) => {
        setChangeColor(color);
    }

    const handleShowSize = (size) => {
        if(size) return setShowSize(size);
        return setShowSize('');
    }

    return (
        <section className="w-full xl:flex xl:justify-center">
            <div className="p-3 w-full flex flex-col justify-between items-center gap-y-3 xl:w-1/2">
                 <h1 className="mt-16 text-5xl">Detail Product</h1>
                 <div className="w-full bg-lightblack rounded-xl p-3 flex flex-col gap-y-3 md:gap-y-5">
                    <div className={`bg-${changeColor} rounded-xl flex flex-col justify-center items-center`}>
                        <Tilty>
                            <img src={product.img} alt={product.name} className='hover:scale-110 hover:rotate-6' />
                        </Tilty>
                        <span className='text-3xl'>{showSize}</span>
                    </div>
                    <div className="flex justify-between">
                        <div className="flex flex-col gap-y-2 md:gap-y-5">
                            <h2 className="text-white text-3xl md:text-5xl">{product.name}</h2>
                            <span className="text-white text-xl md:text-2xl">Rp.{product.price.toLocaleString('id-ID', {styles: 'currency', currency: 'IDR'})}</span>
                        </div>
                        <div className="flex flex-col gap-y-2 items-center">
                            <div className="flex gap-x-2">
                                <div className="bg-white w-8 md:w-10 h-8 md:h-10 rounded-md" onClick={() => handleChangeColor('white')}></div>
                                <div className="bg-black w-8 md:w-10 h-8 md:h-10 rounded-md" onClick={() => handleChangeColor('black')}></div>
                                <div className="bg-red-900 w-8 md:w-10 h-8 md:h-10 rounded-md" onClick={() => handleChangeColor('red-900')}></div>
                            </div>
                        </div>
                    </div>
                    <div className='flex gap-x-2 text-white'>
                        <span className='border-2 border-solid md:text-lg py-1 md:py-3 px-3 md:px-5 rounded-sm hover:bg-black' onClick={() => handleShowSize('S')}>S</span>
                        <span className='border-2 border-solid md:text-lg py-1 md:py-3 px-3 md:px-5 rounded-sm hover:bg-black' onClick={() => handleShowSize('M')}>M</span>
                        <span className='border-2 border-solid md:text-lg py-1 md:py-3 px-3 md:px-5 rounded-sm hover:bg-black' onClick={() => handleShowSize('L')}>L</span>
                        <span className='border-2 border-solid md:text-lg py-1 md:py-3 px-3 md:px-5 rounded-sm hover:bg-black' onClick={() => handleShowSize('XL')}>XL</span>
                        <span className='border-2 border-solid md:text-lg py-1 md:py-3 px-3 md:px-5 rounded-sm hover:bg-black' onClick={() => handleShowSize('XXL')}>XXL</span>
                    </div>
                    <div className='flex justify-between' onClick={handleShowDesc}>
                        <h3 className='text-white text-xl md:text-2xl'>Description</h3>
                        {showDesc ? (
                            <Icon style="fas fa-arrow-up text-xl md:text-2xl text-white mr-2 cursor-pointer" />
                        ) : (
                            <Icon style="fas fa-arrow-down text-xl md:text-2xl text-white mr-2 cursor-pointer" />
                        )}
                    </div>
                    {showDesc && (
                        <p className='text-white text-base md:text-lg'>{product.desc}</p>
                    )}
                    <Button style='bg-white p-1 md:p-2 md:text-xl rounded-md hover:bg-transparent hover:border-2 border-white hover:text-white'>Beli Sekarang</Button>
                 </div>
            </div>
        </section>
    )
}

export default DetailProductPage;
