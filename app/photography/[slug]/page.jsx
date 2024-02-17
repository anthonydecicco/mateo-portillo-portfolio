import Link from "next/link";
import { portfolioImages } from "../../utilities/portfolio-images";
import Image from "next/image";
import { handleNextPage, handlePreviousPage, handleNextButton, handlePreviousButton } from "../../utilities/helper-functions";

export function generateStaticParams() {
    const images = portfolioImages;
    return images.map((image) => ({
        slug: String(image.id),
    }))
}

export async function generateMetadata({params}) {
    const images = portfolioImages;
    const image = images.find(image => String(image.id) === params.slug);

    if (!images) {
        return {
            title: "Image unknown",
            description: "Unable to locate images.",
        }
    } else {
        return {
            title: `MP | Image #${image.id}`,
            description: image.alt,
        }
    }
  }

export default function Page({params}) {
    const images = portfolioImages;
    const image = images.find(image => String(image.id) === params.slug);

    return (
        <div className="w-full h-full flex flex-col top-0">
            <div className="hero-height-footer w-[full] flex flex-col justify-items-center shrink-0">
                <Image
                    src={image.src}
                    alt={image.alt}
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-[90%] h-[85%] ml-auto mr-auto object-contain"
                    priority
                    quality={(75)}
                />
            <div className="w-full justify-between flex font-medium mt-2">
                    <Link className={`${handlePreviousButton(image.id) ? '' : 'hidden'} ml-24 w-20 border rounded-lg transition ease-in-out duration-300 hover:no-underline text-center hover:text-background hover:bg-font`} href={`/photography/${handlePreviousPage(image.id)}`}>Previous</Link>
                    <div className="flex-grow"></div>
                <Link className={`${handleNextButton(images, image.id) ? '' : 'hidden'} mr-24 w-20 border rounded-lg transition ease-in-out duration-300 hover:no-underline text-center hover:text-background hover:bg-font`} href={`/photography/${handleNextPage(images, image.id)}`}>Next</Link>
            </div>
            </div>
        </div>
    )
}