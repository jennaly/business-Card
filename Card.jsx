import React from "react"
import ProfilePicture from "./components/ProfilePicture"
import Header from "./components/Header"
import Information from "./components/Information"
import Socials from "./components/Socials"

export default function Card() {
    return (
        <div className="container">
            <ProfilePicture />
            <Header />
            <Information />
            <Socials />
        </div>
    )
}