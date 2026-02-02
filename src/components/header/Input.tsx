import { useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs"

type InputProps = {
    label: string;
    type: string;
    name: string;
    onChange: (e: any) => void;
    value: string;
}

function Input({ label, type, name, onChange, value }: InputProps) {

    const [visible, setVisible] = useState(false)

    return (
        <div className="relative w-full mb-3">
            <label>
                {label}
            </label>
            <input
                value={value}
                id={name}
                name={name}
                onChange={(e) => { onChange(e) }}
                type={type !== "password" ? type : visible ? "text" : "password"}
                placeholder=" "
                className="w-full border border-gray-400 rounded-xs px-3 py-2.5 outline-none"
            />
            {
                type === "password" &&
                <button
                    className='absolute right-4 top-12 -translate-y-1/2 text-xl text-gray-400'
                    onClick={() => setVisible(!visible)}
                >
                    {
                        visible ? <BsEye /> : <BsEyeSlash />
                    }
                </button>
            }
        </div>
    )
}

export default Input