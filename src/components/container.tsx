import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type Container = {
  className?: string;
  children: ReactNode;
};

export default function Container({ className, children }: Container) {
  return (
    <div
      className={cn(
        "h-full mx-auto w-full max-w-screen-xl px-2.5 md:px-20",
        className
      )}
    >
      {children}
    </div>
  );
}
