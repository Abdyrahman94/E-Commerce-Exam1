import Slider from "./Slider"
import bannerSide from "../assets/Image 5.png"
import bannerSide2 from "../assets/Image 4.png"
import Arrow from '../assets/ArrowRight.svg'


function Banner() {
    return (
        <div>
            <div className="flex items-center gap-6">
                <Slider />
                <div className="w-1/3 flex flex-col gap-6">
                    <div className="relative bg-gray-900 rounded-lg overflow-hidden h-59.25">
                        <div className="absolute inset-0 p-6 flex flex-col justify-between">
                            <div className="relative z-10">
                                <p className="text-yellow-400 text-sm font-semibold uppercase tracking-wide mb-2">
                                    Summer Sales
                                </p>
                                <h2 className="text-white text-2xl lg:text-3xl font-bold leading-tight mb-4">
                                    New Google<br />Pixel 6 Pro
                                </h2>
                                <button className="bg-orange-500 text-white font-semibold px-6 py-3 rounded-xs flex items-center gap-2">
                                    SHOP NOW
                                    <img src={Arrow} alt="" />
                                </button>
                            </div>
                            <div className="absolute right-0 top-0 h-full w-[55%]">
                                <img
                                    src={bannerSide}
                                    alt="Google Pixel 6 Pro"
                                    className="h-full w-full object-cover object-left"
                                />
                            </div>
                            <div className="absolute top-4 right-4 bg-yellow-400 text-gray-900 font-bold px-4 py-2 rounded shadow-lg z-20">
                                29% OFF
                            </div>
                        </div>
                    </div>
                    <div className="relative bg-gray-100 rounded-lg overflow-hidden h-59.25">
                        <div className="absolute inset-0 p-6 flex items-center justify-between">
                            <div className="w-[45%] flex items-center justify-center">
                                <img
                                    src={bannerSide2}
                                    alt="Xiaomi FlipBuds Pro"
                                    className="w-full h-auto object-contain max-h-45"
                                />
                            </div>
                            <div className="w-[55%] flex flex-col justify-center">
                                <h2 className="text-gray-900 text-xl lg:text-2xl font-bold leading-tight mb-2">
                                    Xiaomi<br />FlipBuds Pro
                                </h2>
                                <p className="text-blue-500 text-lg font-bold mb-4">
                                    $299 USD
                                </p>
                                <button className="bg-orange-500 text-white font-semibold px-6 py-3 rounded-xs flex items-center gap-2">
                                    SHOP NOW
                                    <img src={Arrow} alt="" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner