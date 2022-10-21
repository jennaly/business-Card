import React from "react"
import Email from "../assets/email-icon.png"
import LinkedIn from "../assets/linkedin-icon.png"

export default function Header() {
    return (
        <div className="bg-primary py-6 px-8 mx:auto">
            <h1 className="text-2xl font-semibold text-white text-center">Jenna Uyen Ly</h1>
            <span className="text-amber-400 block text-center mt-0.5">Fullstack Developer</span>
            <a href="https://jennaly.netlify.app/"><span className="text-white block text-center text-sm mt-2">jennaly.netlify.app</span></a>
            <div className="flex justify-around mt-4 gap-2">
                <a href="mailto:jenna@wicot.io" role="button" className="btn gap-2 bg-slate-100 hover:bg-slate-300 text-black normal-case font-normal w-1/2"><img src={Email} />Email</a>
                <a href="https://linkedin.com/in/jennaly" role="button" className="btn gap-2 bg-blue-400 hover:bg-blue-500 text-white normal-case font-normal w-1/2"><img src={LinkedIn} />LinkedIn</a>
            </div>
        </div>
    )
}