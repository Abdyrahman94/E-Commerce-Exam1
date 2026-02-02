import Button from "./Button"
import Top from '../../assets/CaretDown.svg'
import Map from '../../assets/MapPinLine.svg'
import Info from '../../assets/Info.svg'
import Headphone from '../../assets/Headphones.svg'
import ArrowCounter  from '../../assets/ArrowsCounterClockwise.svg'
import Phone from '../../assets/PhoneCall.svg'

function Bottom() {
    return (
        <div className="border-b border-gray-300">
            <div className="container mx-auto px-10 py-2">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <Button title="All Category" className="hover:bg-gray-200 py-2 px-2 transition-all rounded-xs">
                            <img className="mr-2" src={Top} alt="" />
                        </Button>
                        <Button title="Track Order" className="hover:bg-gray-200 py-2 text-gray-500 px-2 transition-all rounded-xs">
                            <img className="mr-2" src={Map} alt="" />
                        </Button>
                        <Button title="Compare" className="hover:bg-gray-200 py-2 text-gray-500 px-2 transition-all rounded-xs">
                            <img className="mr-2" src={ArrowCounter} alt="" />
                        </Button>
                        <Button title="Customer Support" className="hover:bg-gray-200 py-2 text-gray-500 px-2 transition-all rounded-xs">
                            <img className="mr-2" src={Headphone} alt="" />
                        </Button>
                        <Button title="Need Help" className="hover:bg-gray-200 py-2 text-gray-500 px-2 transition-all rounded-xs">
                            <img className="mr-2" src={Info} alt="" />
                        </Button>
                    </div>
                    <div className="">
                        <a className="flex items-center" href="Tel:+1-202-555-0104">
                            <img className="w-6.5" src={Phone} alt="" />
                            +1-202-555-0104
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bottom