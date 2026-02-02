import { FaFacebook, FaInstagram, FaPinterestP, FaReddit, FaYoutube } from "react-icons/fa"
import { IoLogoTwitter } from "react-icons/io5"
import Language from "./Language"
import Currency from "./Currency"


function Top() {

    return (
        <div className="bg-[#1B6392]">
            <div className="container mx-auto px-10 py-3">
                <div className="flex items-center justify-between">
                    <div className="text-white">
                        Welcome to Clicon online eCommerce store
                    </div>
                    <div className="flex items-center">
                        <span className="text-white mr-4">Follow us:</span>
                        <div className="flex items-center gap-2">
                            <a>
                                <IoLogoTwitter size={18} className="text-white" />
                            </a>
                            <a>
                                <FaFacebook size={18} className="text-white" />
                            </a>
                            <a>
                                <FaPinterestP size={18} className="text-white" />
                            </a>
                            <a>
                                <FaReddit size={18} className="text-white" />
                            </a>
                            <a>
                                <FaYoutube size={18} className="text-white" />
                            </a>
                            <a>
                                <FaInstagram size={18} className="text-white" />
                            </a>
                        </div>
                        <svg className="mx-5" width="1" height="28" viewBox="0 0 1 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line opacity="0.16" x1="0.5" y1="2.18557e-08" x2="0.499999" y2="28" stroke="white" />
                        </svg>
                        <div className="mr-4">
                            <Language/>
                        </div>
                        <div>
                            <Currency/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Top