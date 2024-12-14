import Testimonials from "./sections/testimonials";
import Hero from "./sections/hero";
import { OrderNow } from "./sections/orderNow";

export default function Home() {
  return (
    <main className="bg-slate-50">
      {/* Hero section */}
      <Hero />

      {/* Value proposition section */}
      <Testimonials />

      {/* Order now section */}
      <OrderNow />
    </main>
  );
}
