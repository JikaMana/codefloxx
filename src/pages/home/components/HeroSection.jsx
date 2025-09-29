import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const HeroSection = () => {
  return (
    <div className="bg-brand-main flex min-h-screen flex-col lg:h-screen lg:flex-row">
      <div className="order-1 flex flex-1 items-center justify-center p-8 text-white lg:w-1/2 lg:p-16">
        <div className="container max-w-xl text-center lg:text-left">
          <h1 className="mt-[120px] text-5xl leading-tight font-extrabold tracking-tighter md:text-6xl lg:text-7xl">
            Digital solutions built with precision and passion
          </h1>

          <p className="mt-6 text-xl">
            We craft scalable software that transforms your business vision into
            reality. Our team of expert developers delivers innovative digital
            products tailored to your unique needs.
          </p>

          <div className="mx-auto mt-10 flex max-w-40 flex-col items-center gap-4 sm:flex-row sm:justify-center lg:mx-0 lg:justify-start">
            <Button
              title="Quote"
              size="xl"
              onClick={() => console.log("Primary CTA clicked")}
              className="bg-brand-shade-dark w-max rounded-full border-2 border-transparent px-5 py-2.5 text-lg font-medium shadow-none hover:border-white hover:bg-transparent"
            >
              Quote
            </Button>
            <Button
              title="Contact"
              size="xl"
              variant="outline"
              onClick={() => console.log("Secondary CTA clicked")}
              className="w-max rounded-full bg-transparent px-5 py-2.5 text-lg font-medium shadow-none hover:bg-white hover:text-black"
            >
              Contact
            </Button>
          </div>
        </div>
      </div>

      <div className="relative order-2 hidden min-h-[50vh] flex-1 items-stretch lg:flex lg:w-1/2">
        <img
          className="h-full w-full object-cover"
          src="https://res.cloudinary.com/deid1vy94/image/upload/v1759105727/photo-1728044849291-69f90d443aea_xxvut3.avif"
          alt="Illustration of a team working on a digital project"
        />
      </div>
    </div>
  );
};

export default HeroSection;
