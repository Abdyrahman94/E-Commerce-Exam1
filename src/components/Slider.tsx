import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination } from "swiper/modules"
import banner2 from '../assets/Image.png'
import 'swiper/css'
import 'swiper/css/pagination'
import Arrow from '../assets/ArrowRight.svg'

function Slider() {
    return (
        <div className="relative w-200">
            <Swiper
                loop={true}
                speed={500}
                modules={[Pagination, Autoplay]}
                slidesPerView={1}
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000 }}
                className="
                    [&_.swiper-pagination]:bottom!-6
                    [&_.swiper-pagination-bullet]:w-2! 
                    [&_.swiper-pagination-bullet]:h-2! 
                    [&_.swiper-pagination-bullet]:bg-gray-400!
                    [&_.swiper-pagination-bullet]:opacity-60!
                    [&_.swiper-pagination-bullet]:transition-all!
                    [&_.swiper-pagination-bullet]:duration-300!
                    [&_.swiper-pagination-bullet-active]:bg-gray-800! 
                    [&_.swiper-pagination-bullet-active]:opacity-100! 
                    [&_.swiper-pagination-bullet:hover]:bg-gray-700! 
                    [&_.swiper-pagination-bullet:hover]:opacity-90!"
            >
                <SwiperSlide className="relative bg-linear-to-br from-gray-50 to-gray-100 overflow-hidden">
                    <div className="relative w-full h-125">
                        <div className="absolute inset-0 flex items-center">
                            <div className="container mx-auto px-12 flex justify-between items-center">
                                <div className="relative z-10 max-w-lg">
                                    <p className="text-sm font-medium text-blue-600 uppercase tracking-wider mb-3 flex items-center gap-2">
                                        <span className="w-8 h-0.5 bg-blue-600"></span>
                                        The best place to play
                                    </p>
                                    <h1 className="text-5xl font-bold text-gray-900 mb-4 leading-tight">
                                        Xbox Consoles
                                    </h1>
                                    <p className="text-base text-gray-600 mb-6 max-w-sm">
                                        Save up to 50% on select Xbox games. Get 3 months of PC Game Pass for $2 USD.
                                    </p>
                                    <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-md transition-all duration-300 flex items-center gap-2 group shadow-lg">
                                        SHOP NOW
                                        <img src={Arrow} alt="" className="group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full flex items-center justify-end pr-12">
                                    <img
                                        src={banner2}
                                        alt="Xbox Console"
                                        className="w-full h-auto object-contain max-h-112.5 drop-shadow-2xl"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="absolute top-12 right-12 bg-blue-500 text-white rounded-full w-20 h-20 flex items-center justify-center font-bold text-xl shadow-xl z-20">
                            $299
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="relative bg-linear-to-br from-gray-50 to-gray-100 overflow-hidden">
                    <div className="relative w-full h-125">
                        <div className="absolute inset-0 flex items-center">
                            <div className="container mx-auto px-12 flex justify-between items-center">
                                <div className="relative z-10 max-w-lg">
                                    <p className="text-sm font-medium text-blue-600 uppercase tracking-wider mb-3 flex items-center gap-2">
                                        <span className="w-8 h-0.5 bg-blue-600"></span>
                                        The best place to play
                                    </p>
                                    <h1 className="text-5xl font-bold text-gray-900 mb-4 leading-tight">
                                        Xbox Consoles
                                    </h1>
                                    <p className="text-base text-gray-600 mb-6 max-w-sm">
                                        Save up to 50% on select Xbox games. Get 3 months of PC Game Pass for $2 USD.
                                    </p>
                                    <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-md transition-all duration-300 flex items-center gap-2 group shadow-lg">
                                        SHOP NOW
                                        <img src={Arrow} alt="" className="group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full flex items-center justify-end pr-12">
                                    <img
                                        src={banner2}
                                        alt="Xbox Console"
                                        className="w-full h-auto object-contain max-h-112.5 drop-shadow-2xl"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="absolute top-12 right-12 bg-blue-500 text-white rounded-full w-20 h-20 flex items-center justify-center font-bold text-xl shadow-xl z-20">
                            $299
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="relative bg-linear-to-br from-gray-50 to-gray-100 overflow-hidden">
                    <div className="relative w-full h-125">
                        <div className="absolute inset-0 flex items-center">
                            <div className="container mx-auto px-12 flex justify-between items-center">
                                <div className="relative z-10 max-w-lg">
                                    <p className="text-sm font-medium text-blue-600 uppercase tracking-wider mb-3 flex items-center gap-2">
                                        <span className="w-8 h-0.5 bg-blue-600"></span>
                                        The best place to play
                                    </p>
                                    <h1 className="text-5xl font-bold text-gray-900 mb-4 leading-tight">
                                        Xbox Consoles
                                    </h1>
                                    <p className="text-base text-gray-600 mb-6 max-w-sm">
                                        Save up to 50% on select Xbox games. Get 3 months of PC Game Pass for $2 USD.
                                    </p>
                                    <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-md transition-all duration-300 flex items-center gap-2 group shadow-lg">
                                        SHOP NOW
                                        <img src={Arrow} alt="" className="group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full flex items-center justify-end pr-12">
                                    <img
                                        src={banner2}
                                        alt="Xbox Console"
                                        className="w-full h-auto object-contain max-h-112.5 drop-shadow-2xl"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="absolute top-12 right-12 bg-blue-500 text-white rounded-full w-20 h-20 flex items-center justify-center font-bold text-xl shadow-xl z-20">
                            $299
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Slider