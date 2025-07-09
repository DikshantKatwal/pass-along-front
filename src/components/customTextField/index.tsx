"use client";

import { EyeSlashIcon, EyeIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";


type errorValues = {
    [key: string]: {
        error: boolean;
        helperText: string;
    };
};
type TextFieldProps = {
    name: string;
    label?: string;
    type?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    required?: boolean;
    disabled?: boolean;
    className?: string;
    autoComplete?: string;
    helperText?: string;
    errors?: errorValues
};

const TextField: React.FC<TextFieldProps> = ({
    label,
    type = "text",
    name,
    value,
    onChange,
    placeholder = " ",
    required = false,
    disabled = false,
    className = "",
    autoComplete = "off",
    errors = null,
    helperText = ''
}) => {
    const [showPassword, setShowPassword] = useState(false);
    const isPassword = type === "password";
    return (
        <div>
            <label className={`relative w-full block ${className} `}>
                <input
                    type={isPassword && showPassword ? "text" : type}
                    name={name}
                    value={value}
                    onChange={onChange}
                    required={required}
                    disabled={disabled}
                    placeholder={" "}

                    autoComplete={autoComplete}
                    className={`theme-text font-semibold  border  peer w-full text-xs sm:text-base  font-sans rounded-lg p-2 pt-5 bg-transparent placeholder-transparent focus:outline-none
					disabled:bg-white/10 disabled:text-white/50 disabled:cursor-not-allowed 
					${errors?.[name] && errors?.[name]?.error ? "border-red-500" : "theme-light-border"}
				`}
                />
                <span
                    className="
				absolute 
				left-2 
				top-1.5
				theme-light-text
				text-[10px] sm:text-xs  transition-all duration-200 
				peer-placeholder-shown:top-5.5 
				peer-placeholder-shown:text-sm
				dark:peer-placeholder-shown:text-white/50 
				peer-placeholder-shown:text-black/90 
				peer-focus:top-0.5 
				peer-focus:text-[10px] 
				sm:peer-focus:text-xs  
				
				dark:peer-focus:text-white/40 
				peer-focus:text-black/70 
				"
                >
                    {label}{required && '*'}
                </span>

                {isPassword && (
                    <span
                        className="
					 
					top-1/2  -translate-y-1/2 
					absolute z-10 right-3 text-white/60 cursor-pointer"
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        {showPassword ? <EyeSlashIcon className="size-5 sm:size-5 text-black dark:text-white" /> : <EyeIcon className="size-5 sm:size-5  text-black dark:text-white" />}
                    </span>
                )}
            </label>
            <span className={`${errors && errors?.[name]?.error ? 'text-red-500' : 'theme-light-text '} text-[10px] sm:text-[11px]`}>{errors?.[name].error ? errors?.[name].helperText : helperText}</span>
        </div>
    );
};

export default TextField;

// <div className="relative w-full">
//     <input
//         type="text"
//         id="email"
//         required
//         placeholder=" "
//         className="input-field peer w-full border border-white/30 rounded-lg p-2 pt-5 bg-transparent text-white placeholder-transparent"
//     />
//     <label
//         htmlFor="email"
//         className="absolute
//         left-2 top-1
//         text-white/40
//         text-xs
//         transition-all duration-200
//         peer-placeholder-shown:top-5.5
//         peer-placeholder-shown:text-sm
//         peer-placeholder-shown:text-white/70
//         peer-focus:top-1
//         peer-focus:text-xs
//         peer-focus:text-white/40
//         "
//     >
//         Email
//     </label>
// </div>
