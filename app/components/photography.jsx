"use client"

import { useEffect, useState } from "react"
import { portfolioImages } from "../utilities/portfolio-images"
import Image from "next/image";
import Link from "next/link";
import { handleNumberOfColumns } from "../utilities/helper-functions"
import { handleIndex } from "../utilities/helper-functions";
import { handlePriority } from "../utilities/helper-functions";

export default function Photography() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    //Setting the initial state of windowWidth to the width of a user's window.

    useEffect(() => {
        const handleWindowResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        }
    }, []);
    //Track the re-sizing of the window

    return (
            <div id="photography-container" className="flex flex-wrap p-4 mb-10">
                {handleNumberOfColumns(windowWidth).map(columnIndex => (
                    <div className="column" key={columnIndex} id={`column-${columnIndex}`}>
                        {portfolioImages
                            .filter((_, imageIndex) => (imageIndex % handleIndex(windowWidth)) + 1 === columnIndex)
                            //using "_" to ignore the first parameter
                            .map((image, imageIndex) => {
                                return (
                                    <Link key={image.id} href={`/photography/${image.id}`} className="group transition ease-in-out duration-300 w-full ">
                                        <Image
                                            src={image.src}
                                            alt={image.alt}
                                            width={0}
                                            height={0}
                                            sizes="100vw"
                                            className="w-full h-auto align-middle mt-2 transition ease-in-out duration-300 group-hover:-translate-y-[.2rem]"
                                            priority={handlePriority(imageIndex)}
                                            quality={30}
                                        />
                                    </Link>
                                )
                            })}
                    </div>
                ))}
        </div>
    )
}

