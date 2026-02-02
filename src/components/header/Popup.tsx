import Login from "./Login"
import Register from "./Register"
import User from '../../assets/User.svg'
import { useState } from "react";


function Popup() {
    const [active, setActive] = useState<"register" | "login">('login');
    const [open, setOpen] = useState<boolean>(false)
    return (
        <div className="relative">
            <button onClick={() => setOpen(!open)}>
                <img src={User} alt="" />
            </button>

            <div className={'absolute top-11.5 right-0 z-50 bg-white rounded-xs px-6 py-5  transition-all duration-200 w-90 h-120 shadow ' + (open ? "opacity-100 visible" : "invisible opacity-0")}>
                <div key={active} className="form-fade-transition">
                    {active === 'register' ? (
                        <Register onSwitch={() => setActive('login')} />
                    ) : (
                        <Login onSwitch={() => setActive('register')} />
                    )}
                </div>
            </div>
        </div>
    )
}

export default Popup