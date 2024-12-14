import Container from "@/components/container";
import Steps from "@/components/steps";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <Container className="flex-1 flex flex-col">
      <Steps />
      {children}
    </Container>
  );
}
