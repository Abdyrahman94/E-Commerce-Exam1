import { useState } from "react"
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io"


function Currency() {
    const [isOpen,setIsOpen] = useState<boolean>(false)

    return (
        <div className="relative">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white flex items-center">
                USD
                {
                    isOpen ? <span className="ml-2"><IoIosArrowUp /></span> : <span className="ml-2"><IoIosArrowDown /></span>
                }
            </button>
             <div className={"absolute top-8 left-0 z-30 bg-white py-1 w-33 rounded border border-gray-100 transition-all duration-200 " + (isOpen ? "opacity-100 visible" : "opacity-0 invisible")}>
                <div className="flex flex-col gap-1">
                    <button className="flex items-center gap-3 px-3 py-1.5 hover:bg-gray-300 w-full rounded ">
                        Dollar (USD)
                    </button>
                    <button className="flex items-center gap-3 px-3 py-1.5 hover:bg-gray-300 w-full rounded ">
                        Euro (EUR)
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Currency