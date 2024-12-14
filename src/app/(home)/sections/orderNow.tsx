import Container from "@/components/container";
import Link from "next/link";
import Phone from "@/components/phone";
import { ArrowRight, Check } from "lucide-react";
import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";

export function OrderNow() {
  return (
    <section>
      <Container className="py-24">
        <div className="mb-12 px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="order-1 mt-2 tracking-tight text-center text-balance !leading-tight font-bold text-5xl md:text-6xl text-gray-900">
              Upload your photo and get{" "}
              <span className="relative px-2 bg-green-600 text-white">
                your own case
              </span>{" "}
              now
            </h2>
          </div>
        </div>
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="relative flex flex-col items-center md:grid md:grid-cols-2 gap-40">
            <Image
              src="/images/arrow.png"
              className="absolute top-100 left-1/2 rotate-90 md:top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 md:rotate-0"
              width={136}
              height={31}
              alt="arrow"
            />
            <div className="relative h-80 md:h-full md:justify-self-end max-w-sm rounded-xl bg-gray-900/5 ring-inset ring-gray-900/10 lg:rounded-2xl">
              <Image
                src="/images/horse.jpg"
                className="rounded-md object-cover bg-white shadow-2xl ring-1 ring-gray-900/10 size-full"
                width={384}
                height={576}
                alt="Girl hugging a horse"
                sizes="(min-width: 1200px) 384px, (min-width: 820px) calc(43.89vw - 134px), 211px"
              />
            </div>
            <Phone className="w-60" imgSrc="/images/horse_phone.jpg" />
          </div>
        </div>
        <ul className="mx-auto mt-12 max-w-prose sm:text-lg space-y-2 w-fit">
          <li className="w-fit">
            <Check className="size-5 text-green-600 inline mr-1.5" />
            High-quality silicon material
          </li>
          <li className="w-fit">
            <Check className="size-5 text-green-600 inline mr-1.5" />
            Scratch and fingerprint resistant coating
          </li>
          <li className="w-fit">
            <Check className="size-5 text-green-600 inline mr-1.5" />
            Wireless charging compatible
          </li>
          <li className="w-fit">
            <Check className="size-5 text-green-600 inline mr-1.5" />5 year
            print warranty
          </li>
          <div className="flex justify-center">
            <Link className={buttonVariants({
              size: "lg",
              className: "mx-auto mt-8"
            })} href={"/configure/upload"}>
              Create your case now <ArrowRight className="size-4 ml-1.5" />
            </Link>
          </div>
        </ul>
      </Container>
    </section>
  );
}
