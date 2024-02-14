"use client"

import Link from "next/link"
import Hamburger from "./hamburger"
import DropDown from "./dropdown";
import { useState, useRef, useEffect } from "react";
import { pagesArray } from "../utilities/pages-array"

export default function NavBar() {
    const [showDropDown, setShowDropdown] = useState(false);
    const dropDownRef = useRef(null);

    const toggleDropdown = () => {
        setShowDropdown(!showDropDown);
    }

    useEffect(() => {
        const handler = (event) => {

            const isOutsideDropdown = dropDownRef.current && !dropDownRef.current.contains(event.target);
            const isHamburgerButton = event.target instanceof HTMLButtonElement &&
                (
                    event.target.id === "hamb-1" ||
                    event.target.id === "hamb-2" ||
                    event.target.id === "hamb-3"
                );
            const isLink = event.target instanceof HTMLAnchorElement;

            if (isOutsideDropdown && !isHamburgerButton || isLink) {
                setShowDropdown(false);
            }
        }
        document.addEventListener("click", handler);

        return () => {
            document.removeEventListener("click", handler);
        }
    }, [showDropDown])

    return (
        <>
            <DropDown
                className={`
                            ${showDropDown
                        ? "opacity-100 transform translate-y-0 mt-20 z-30"
                        : "opacity-0 transform -translate-y-full h-40 z-30"
                    } flex flex-col left-0 h-fit py-8 w-full bg-background rounded-md shadow-lg fixed text-center`}
                ref={dropDownRef}
            ></DropDown>

            <nav className="w-full h-[5.5rem] top-0 sticky bg-background z-30 flex justify-between px-10 py-5 items-end">
                <Link href="/" className="text-4xl hover:no-underline">MP</Link>
                <div className="md:flex hidden">
                    <ul className="flex justify-around">
                        {pagesArray.map(page => (
                            <li key={page.title} className="mx-4">
                                <Link href={page.link}>{page.title}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <Hamburger onClick={toggleDropdown} showDropDown={showDropDown}></Hamburger>
            </nav>
        </>
    )
}