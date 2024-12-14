"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { usePathname } from "next/navigation";

const STEPS = [
  {
    name: "Step 1: Add image",
    description: "Choose an image for your case",
    url: "/upload",
  },
  {
    name: "Step 2: Customize design",
    description: "Make the case yours",
    url: "/design",
  },
  {
    name: "Step 1: Summary",
    description: "Review your design",
    url: "/preview",
  },
];

export default function Steps() {
  const pathname = usePathname();

  return (
    <ol className="rounded-md bg-white lg:flex lg:rounded-none lg:border-x lg:border-gray-200">
      {STEPS.map(({ description, name, url }, index) => {
        const isCurrent = pathname.endsWith(url);
        const isCompleted = STEPS.slice(index + 1).some((step) =>
          pathname.endsWith(step.url)
        );
        const imgPath = `/images/snake-${index + 1}.png`;

        return (
          <li key={name + url} className="relative overflow-hidden lg:flex-1">
            <div>
              <span
                className={cn(
                  "absolute left-0 top-0 h-full w-1 bg-zinc-400 lg:bottom-0 lg:top-auto lg:h-1 lg:w-full",
                  { "bg-zinc-700": isCurrent, "bg-primary": isCompleted }
                )}
                aria-hidden
              />
              <span
                className={cn(
                  "flex items-center px-6 py-4 text-sm font-medium",
                  index !== 0 ? "lg:pl-9" : ""
                )}
              >
                <span className="flex-shrink-0">
                  <Image
                    src={imgPath}
                    className={cn(
                      "size-20 object-contain items-center justify-center",
                      {
                        "border-none": isCompleted,
                        "border-zinc=700": isCurrent,
                      }
                    )}
                    height={80}
                    width={80}
                    sizes="80px"
                    alt=""
                  />
                </span>
                <span className="ml-4 h-full mt-0.5 flex min-w-0 flex-col justify-center">
                  <span
                    className={cn("text-sm font-semibold text-zinc-700", {
                      "text-primary": isCompleted,
                      "text-zinc-700": isCurrent,
                    })}
                  >
                    {name}
                  </span>
                  <span className="text-sm text-zinc-500">{description}</span>
                </span>
              </span>

              {/* Seperator */}
              {index !== 0 && (
                <div className="absolute inset-0 hidden w-3 lg:block">
                  <svg
                    className="h-full w-full text-gray-300"
                    viewBox="0 0 12 82"
                    fill="none"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0.5 0V31L10.5 41L0.5 51V82"
                      stroke="currentcolor"
                      vectorEffect="non-scaling-stroke"
                    />
                  </svg>
                </div>
              )}
            </div>
          </li>
        );
      })}
    </ol>
  );
}
