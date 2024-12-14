import Container from "@/components/container";
import Phone from "@/components/phone";
import { Check, Star } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section>
      <Container className="pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-3 lg:gap-x-0 lg:pb-52 lg:pt-24 xl:pt-32 xl:gap-x-8">
        <div className="col-span-2 px-6 lg:px-0 lg:pt-4">
          <div className="relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start">
            <div className="absoulte w-28 left-0 -top-20 hidden lg:block">
              <Image
                height={146}
                width={112}
                src={"/images/snake-1.png"}
                alt="Cobra"
              />
            </div>
            <h1 className="relative w-fit tracking-tight text-balance mt-16 font-bold !leading-tight text-gray-900 text-5xl md:text-6xl lg:text-7xl">
              Your Image on a{" "}
              <span className="bg-green-600 px-2 text-white">Custom</span> Phone
              Case
            </h1>
            <p className="mt-8 text-lg lg:pr-10 max-w-prose text-balance text-center md:text-wrap lg:text-left">
              Capture your favourite memories with your own,{" "}
              <span className="font-semibold">one-of-one</span> phone case.
              CaseCobra allows ypu to protext your memories, not just your phone
              case.
            </p>
            <ul className="mt-8 space-y-2 text-left font-medium flex flex-col items-center sm:items-start">
              <div className="space-y-2">
                <li className="flex gap-1 5 items-center left">
                  <Check className="size-5 shrink-0 text-green-600" />
                  High quality, durable material
                </li>
                <li className="flex gap-1 5 items-center left">
                  <Check className="size-5 shrink-0 text-green-600" />5 year
                  print guarantee
                </li>
                <li className="flex gap-1 5 items-center left">
                  <Check className="size-5 shrink-0 text-green-600" />
                  Modern iPhone models supported
                </li>
              </div>
            </ul>
            <div className="mt-12 flex flex-col sm:flex-row items-center sm:items-start gap-5">
              <div className="flex -space-x-4">
                <Image
                  src="/images/user-1.png"
                  height={40}
                  width={40}
                  className="inline-block size-10 object-cover rounded-full ring-2 ring-slate-100"
                  alt="User Image"
                />
                <Image
                  src="/images/user-2.png"
                  height={40}
                  width={40}
                  className="inline-block size-10 object-cover rounded-full ring-2 ring-slate-100"
                  alt="User Image"
                />
                <Image
                  src="/images/user-3.png"
                  height={40}
                  width={40}
                  className="inline-block size-10 object-cover rounded-full ring-2 ring-slate-100"
                  alt="User Image"
                />
                <Image
                  src="/images/user-4.jpg"
                  height={40}
                  width={40}
                  className="inline-block size-10 object-cover rounded-full ring-2 ring-slate-100"
                  alt="User Image"
                />
                <Image
                  src="/images/user-5.jpg"
                  height={40}
                  width={40}
                  className="inline-block size-10 object-cover rounded-full ring-2 ring-slate-100"
                  alt="User Image"
                />
              </div>
              <div className="flex flex-col justify-between items-center sm:items-start">
                <div className="flex gap-0.5">
                  <Star className="size-4 text-green-600 fill-green-600" />
                  <Star className="size-4 text-green-600 fill-green-600" />
                  <Star className="size-4 text-green-600 fill-green-600" />
                  <Star className="size-4 text-green-600 fill-green-600" />
                  <Star className="size-4 text-green-600 fill-green-600" />
                </div>
                <p>
                  <span className="font-semibold">1,250</span> happy customers
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-full lg:col-span-1 w-full flex justify-center px-8 sm:px-16 md:px-0 mt-32 lg:mx-0 lg:mt-20 h-fit">
          <div className="relative md:max-w-xl">
            <Image
              src={"/images/your-image.png"}
              alt="Your image"
              className="absolute w-40 lg:w-52 left-56 -top-20 select-none hidden sm:block lg:hidden xl:block"
              height={208}
              width={144}
              sizes="(min-width: 1280px) 208px, 160px"
            />
            <Image
              src={"/images/line.png"}
              alt="Line"
              className="absolute w-20 -left-6 -bottom-6 select-none"
              height={144}
              width={80}
              sizes="80px"
            />
            <Phone className="w-64" imgSrc="/images/testimonials/1.jpg" />
          </div>
        </div>
      </Container>
    </section>
  );
}
