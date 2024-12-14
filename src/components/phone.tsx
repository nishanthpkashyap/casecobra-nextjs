import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";
import Image from "next/image";

type Phone = HTMLAttributes<HTMLDivElement> & {
  imgSrc: string;
  dark?: boolean;
};

export default function Phone({
  className,
  imgSrc,
  dark = false,
  ...props
}: Phone) {
  return (
    <div
      className={cn(
        "relative pointer-events-none z-50 overflow-hidden",
        className
      )}
      {...props}
    >
      <Image
        src={`/images/phone-template-${dark ? "dark" : "white"}-edges.png`}
        className="pointer-events-none z-50 select-none"
        alt="phone image"
        width={256}
        height={523}
      />
      <div className="absolute -z-10 inset-0">
        <Image
          src={imgSrc}
          className="object-cover"
          alt="overlaying phone image"
          width={256}
          height={523}
        />
      </div>
    </div>
  );
}
