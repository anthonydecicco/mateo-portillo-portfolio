import Image from "next/image";

export default function Socials() {

    return (
        <section className="w-full h-fit flex items-center justify-center mb-4 ">
            <div className="mx-2 invert" id="instagram">
                <a href="https://www.instagram.com/mp_teo/" target="_blank">
                    <Image
                        src="/socialicons/Instagram_Glyph_Black.svg"
                        width={30}
                        height={30}
                        alt="Instagram icon, linked to Mateo's Instagram page."
                    />
                </a>
            </div>
            <div className="mx-2" id="linkedin">
                <a href="https://www.linkedin.com/in/mateo-portillo/" target="_blank">
                    <Image
                        src="/socialicons/In-White-128@2x.png"
                        width={32}
                        height={32}
                        alt="LinkedIn icon, linked to Mateo's LinkedIn page."
                    />
                </a>
            </div>
        </section>
    )
}