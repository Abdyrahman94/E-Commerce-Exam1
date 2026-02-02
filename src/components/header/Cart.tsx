import { useState } from 'react'
import Card from '../../assets/ShoppingCartSimple.svg'
import image1 from '../../assets/Image (4).png'
import image2 from '../../assets/Image (5).png'

function Cart() {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    return (
        <div className='relative'>
            <button onClick={() => setIsOpen(!isOpen)}>
                <img src={Card} alt="" />
            </button>

            <div className={"absolute top-12.5 right-0 z-30 bg-white py-5 w-100 px-7 rounded border border-gray-100 transition-all duration-200 " + (isOpen ? "opacity-100 visible" : "opacity-0 invisible")}>
                <div className='mb-4 font-semibold text-xl text-gray-800'>
                    Shopping Cart <span className='text-gray-400'>(02)</span>
                </div>
                <div className='border-y border-gray-400 py-5'>
                    <div className='flex items-center relative'>
                        <img className='w-30 border border-gray-400' src={image1} alt="" />
                        <div>
                            <span className='block ml-2'>Canon EOS 1500D DSLR</span>
                            <span className='block ml-2'>Canon EOS 1500D DSLR</span>
                            <span className='text-blue-300 ml-2'><span className='text-gray-400 mr-3'>1 x</span>$1500</span>
                        </div>
                        <button className="absolute top-9 right-0 text-gray-400 hover:text-black text-xl">✕</button>
                    </div>
                    <div className='flex items-center mt-4 relative'>
                        <img className='w-30 border border-gray-400' src={image2} alt="" />
                        <div>
                            <span className='block ml-2'>Canon EOS 1500D DSLR</span>
                            <span className='block ml-2'>Canon EOS 1500D DSLR</span>
                            <span className='text-blue-300 ml-2'><span className='text-gray-400 mr-3'>1 x</span>$1500</span>
                        </div>
                        <button className="absolute top-9 right-0 text-gray-400 hover:text-black text-xl">✕</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Cart