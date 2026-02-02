import { FaArrowRight } from "react-icons/fa"
import { IoCloseOutline } from "react-icons/io5"


function Widget() {
    return (
        <div className="bg-gray-950 py-3">
            <div className="container mx-auto relative px-10">
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <div className="relative">
                            <div className="absolute inset-0 bg-yellow-300 transform -rotate-3"></div>
                            <span className="relative z-10  h-10 w-20 flex items-center justify-center font-semibold text-xl px-2">
                                Black
                            </span>
                        </div>
                        <div className="text-white font-semibold ml-4 text-lg">
                            Friday
                        </div>
                    </div>
                    <div className="flex items-center">
                        <div className="text-white text-[11px]">
                            Up to
                        </div>
                        <div className="text-yellow-400 font-semibold mx-2 text-4xl">
                            59%
                        </div>
                        <span className="text-white text-lg font-semibold">
                            OFF
                        </span>
                    </div>
                    <div className="relative">
                        <button className="bg-yellow-400 text-gray-950 font-semibold rounded-xs w-40 h-12 p-2 pr-6">
                            SHOP NOW
                        </button>
                        <FaArrowRight className="absolute top-4 right-5 text-gray-950 text-md" />
                    </div>
                </div>
            </div>
            <button className="bg-gray-800 rounded-xs p-1 absolute top-6 right-3"><IoCloseOutline className="text-white" /></button>
        </div>
    )
}

export default Widget