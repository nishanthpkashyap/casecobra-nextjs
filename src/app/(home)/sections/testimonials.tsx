import Container from "@/components/container";
import { Icons } from "@/components/icons";
import { Reviews } from "@/components/review";
import { Check, Star } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    stars: 5,
    description1:
      "The case feels durable and I even got a compliment on the design. Had the case for two and a half months now and",
    description2:
      "on the case I had before, the image started fading into yellow-ish color after a couple weeks. Love it.",
    emphasis: "the image is super clear,",
    verified: true,
    userIcon: "/images/user-1.png",
    user: "Jonathan",
  },
  {
    stars: 5,
    description1:
      "I usually keep my phone together with my keys in my pocket and that led to some pretty heavy scratchmarks on all of my last phone cases. This one, besides a barely noticeable scratch on the corner,",
    description2: "I dig it.",
    emphasis: "looks brand new after about half a year.",
    verified: true,
    userIcon: "/images/user-2.png",
    user: "Alicia",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-slate-100 py-24">
      <Container className="flex flex-col items-center gap-16 sm:gap-32">
        <div className="flex flex-col lg:flex-row items-center gap-4 sm:gap-6">
          <h2 className="order-1 mt-2 tracking-tight text-center text-balance !leading-tight font-bold text-5xl md:text-6xl text-gray-900">
            Whay our{" "}
            <span className="relative px-2">
              customers{" "}
              <Icons.underline className="hidden sm:block pointer-events-none absolute inset-x-0 -bottom-6 text-green-600"></Icons.underline>
            </span>{" "}
            say
          </h2>
          <Image
            src="/images/snake-2.png"
            className="w-24 order-0 lg:order-2"
            alt=""
            width={96}
            height={85}
          />
        </div>
        <div className="mx-auto grid max-w-2xl grid-cols-1 px-4 lg:mx-0 lg:max-w-none lg:grid-cols-2 gap-y-16">
          {testimonials.map(
            ({
              description1,
              description2,
              emphasis,
              stars,
              userIcon,
              verified,
              user,
            }) => {
              return (
                <div
                  key={userIcon}
                  className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20"
                >
                  <div className="flex gap-0.5 mb-2">
                    {Array.from({ length: 5 }).map((_, key) => {
                      return (
                        <Star
                          key={key}
                          className={`size-5 ${
                            stars <= 5
                              ? "text-green-600 fill-green-600"
                              : "text-slate-400 fill-slate-400"
                          }`}
                        />
                      );
                    })}
                  </div>
                  <div className="text-lg leading-8">
                    <p>
                      "{description1}{" "}
                      <span className="p-0.5 bg-slate-800 text-white">
                        {emphasis}
                      </span>{" "}
                      {description2}"
                    </p>
                  </div>
                  <div className="flex gap-4 mt-2">
                    <Image
                      src={userIcon}
                      alt="User"
                      height={48}
                      width={48}
                      className="size-12 rouned-full object-cover"
                    />
                    <div className="flex flex-col">
                      <p className="font-semibold">{user}</p>
                      {verified && (
                        <div className="flex gap-1.5 items-center text-zinc-600">
                          <Check className="size-4 stroke-3 text-green-600" />
                          <p className="text-sm">Verified Purchase</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </Container>
      <div className="pt-16">
        <Reviews />
      </div>
    </section>
  );
}
