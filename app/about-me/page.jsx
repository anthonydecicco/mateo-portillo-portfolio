import Image from "next/image"

export const metadata = {
    title: 'MP | About Me',
    description: "Learn more about Mateo",
  }

export default function Page() {
    return (
        <section className="px-10 pt-6 pb-10 justify-center flex">
            <div className="max-w-[1000px] flex flex-col">
                <div className="w-[10rem] h-[10rem] md:w-[15rem] md:h-[15rem] mb-10 ">
                    <Image
                        src="/images/headshot.jpg"
                        alt="A picture of me"
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="w-full h-auto rounded-full"
                        priority
                    />
                </div>
                <div className="text-xl md:text-2xl">
                    <p className="mb-10">Hey there, I&apos;m Mateo Portillo.</p>
                    <p className="mb-10">I&apos;m originally from the outskirts of Detroit in South Lyon, Michigan, but I now call the vibrant streets of Chicago my home.</p>
                    <p className="mb-10">At Michigan State University, I dove headfirst into the world of marketing, earning both bachelor&apos;s and master&apos;s degrees, fueling my passion for blending creativity and analytics.</p>
                    <p className="mb-10">Now, I work at Accenture as an Interactive Analyst, where I merge data science with marketing to bring ideas to life.</p>
                    <p className="mb-10">On the weekends you can catch me at a concert or spending time with my closest friends. I also love to snowboard and will get out to the mountains any chance I get.</p>
                    <p className="mb-10">Thanks for checking out my portfolio, photography is a passion of mine and I&apos;m so happy to share my moments with you.</p>
                    <p>-MP</p>
                </div>
            </div>
        </section>
    )
}