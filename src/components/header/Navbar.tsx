import Logo from '../../assets/Logo.svg'
import Search from './Search'
import Heart from '../../assets/Heart.svg'
import { Link } from 'react-router-dom'
import Cart from './Cart'
import Popup from './Popup'

function Navbar() {
    return (
        <div className='bg-[#1B6392] border-t-2 border-blue-500'>
            <div className="container mx-auto px-10 py-4">
                <div className="flex items-center justify-between">
                    <div>
                        <img src={Logo} alt="" />
                    </div>
                    <div>
                        <Search />
                    </div>
                    <div>
                        <div className='flex items-center gap-4'>
                            <Cart/>
                            <Link to={'#'}>
                                <img src={Heart} alt="" />
                            </Link>
                            <Popup/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar