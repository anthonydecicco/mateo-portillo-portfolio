import Image from "next/image";

export default function Socials() {

    return (
        <section className="w-full h-4 md:h-6 flex items-center justify-center mb-6">
            <div className="mx-2 invert h-full" id="instagram">
                <a href="https://www.instagram.com/mp_teo/" target="_blank">
                    <Image
                        src="/socialicons/Instagram_Glyph_Black.svg"
                        className="w-auto h-full"
                        width={0}
                        height={0}
                        alt="Instagram icon, linked to Mateo's Instagram page."
                    />
                </a>
            </div>
            <div className="mx-2 h-full" id="linkedin">
                <a href="https://www.linkedin.com/in/mateo-portillo/" target="_blank">
                    <Image
                        src="/socialicons/In-White-128@2x.png"
                        className="w-auto h-full "
                        width={0}
                        height={0}
                        alt="LinkedIn icon, linked to Mateo's LinkedIn page."
                    />
                </a>
            </div>
        </section>
    )
}