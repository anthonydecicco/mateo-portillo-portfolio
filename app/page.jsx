import Image from 'next/image'
import Link from 'next/link'
import { threeImageSectionArr } from "./utilities/three-image-section-arr"

export const metadata = {
  title: 'MP | Home',
  description: "Welcome to Mateo's landing page.",
}

export default function Home() {

  return (
    <div id="homepage" className="h-full w-full flex flex-col">

      <div className="w-full">
        <Image
          src="/images/detroit-train.jpg"
          width={0}
          height={0}
          sizes="100vw"
          priority
          className="w-full hero-height opacity-40 object-cover"
          alt="Train passing by the General Motors building"
        />
      </div>

      <section className="absolute flex hero-height w-full justify-center z-10 text-center items-center text-4xl md:text-6xl px-12">
        <p>Hello, my name is Mateo. I take photographs.</p>
      </section>

      <section className="relative grid md:grid-cols-3 w-full h-fit">
        {threeImageSectionArr.map(image => (
          <div key={image.id} className="w-full relative flex group">
            <Link href={image.page} className="group-hover:bg-black transition ease-in-out duration-300 w-full ">
              <p className="transition ease-in-out duration-300 absolute left-[50%] top-[50%] text-2xl z-20 text-center translate-x-[-50%] translate-y-[-50%] group-hover:underline">{image.title}</p>
              <Image
                src={image.src}
                width={0}
                height={0}
                sizes="100vw"
                className="w-full hero-height object-cover align-middle opacity-60 group-hover:opacity-40 transition ease-in-out duration-300"
                alt={image.alt}
              />
            </Link>
          </div>
        ))}
      </section>

      <section className="flex hero-height-footer relative w-full mb-2 md:mb-0">
        <p className="flex h-full w-full text-center items-center text-2xl md:text-6xl px-12 2xl:px-[20rem]">&quot;Photography, as we all know, is not real at all. It is an illusion of reality with which we create our own private world.&quot; - Arnold Newman</p>
      </section>
    </div>
  )
}
