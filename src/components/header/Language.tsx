import tkm from "../../assets/flag/tkm.png"
import rus from "../../assets/flag/rus.png"
import eng from "../../assets/flag/eng.png"
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io"
import { useState } from "react"


function Language() {
    const [isOpen,setIsOpen] = useState<boolean>(false)

    
    return (
        <div className="relative">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white flex items-center">
                Eng
                {
                    isOpen ? <span className="ml-2"><IoIosArrowUp/></span> : <span className="ml-2"><IoIosArrowDown/></span>
                }
            </button>

            <div className={"absolute top-8 right-0 z-30 bg-white py-1 w-45 px-1.5 rounded border border-gray-100 transition-all duration-200 " + (isOpen ? "opacity-100 visible" : "opacity-0 invisible")}>
                <div className="flex flex-col gap-1">
                    <button className="flex items-center gap-3 px-3 py-1.5 hover:bg-gray-300 w-full rounded ">
                        <img src={tkm} alt="TKM" className="w-6 h-4 rounded" />
                        <span>Turkmen</span>
                    </button>
                    <button className="flex items-center gap-3 px-3 py-1.5 hover:bg-gray-300 w-full rounded ">
                        <img src={rus} alt="RUS" className=" h-4 rounded" />
                        <span>Russian</span>
                    </button>
                    <button className="flex items-center gap-3 px-3 py-1.5 hover:bg-gray-300 w-full rounded ">
                        <img src={eng} alt="ENG" className="w-6 h-4 rounded" />
                        <span>English</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Language