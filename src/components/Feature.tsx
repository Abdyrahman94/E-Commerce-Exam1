import image from '../assets/Package.svg'
import image2 from '../assets/Trophy.svg'
import image3 from '../assets/CreditCard.svg'
import image4 from '../assets/Headphones.png'


function Feature() {
  return (
    <div className="flex items-center justify-between mb-5 gap-5 border border-gray-300 px-4 py-5 rounded-xs">
        <div className="flex items-center gap-4">
            <img src={image} alt="" />
            <div className='leading-tight'>
                <span className='font-semibold block'>FASTED DELIVERY</span>
                <span className='text-gray-300 text-sm'>Delivery in 24/H</span>
            </div>
        </div>
        <span className='text-gray-300'>|</span>
        <div className="flex items-center gap-4">
            <img src={image2} alt="" />
            <div className='leading-tight'>
                <span className='font-semibold block'>FASTED DELIVERY</span>
                <span className='text-gray-300 text-sm'>Delivery in 24/H</span>
            </div>
        </div>
        <span className='text-gray-300'>|</span>
        <div className="flex items-center gap-4">
            <img src={image3} alt="" />
            <div className='leading-tight'>
                <span className='font-semibold block'>FASTED DELIVERY</span>
                <span className='text-gray-300 text-sm'>Delivery in 24/H</span>
            </div>
        </div>
        <span className='text-gray-300'>|</span>
        <div className="flex items-center gap-4">
            <img src={image4} alt="" />
            <div className='leading-tight'>
                <span className='font-semibold block'>FASTED DELIVERY</span>
                <span className='text-gray-300 text-sm'>Delivery in 24/H</span>
            </div>
        </div>
    </div>
  )
}

export default Feature