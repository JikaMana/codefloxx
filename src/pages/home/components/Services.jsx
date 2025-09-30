import { SectionHeader, SectionHeaderCta } from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { serviceTabsData } from "@/constants/serviceTabs_data";
import { RxChevronRight } from "react-icons/rx";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function Services() {
  return (
    <section className="flex-center bg-brand-secondary px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="flex flex-col items-center">
          <div className="mb-12 text-center md:mb-18 lg:mb-20">
            <SectionHeader
              tagline="Services"
              title="Our digital solutions"
              description="Comprehensive software development services."
              showCta={false}
            />
          </div>

          <Tabs
            defaultValue="web-development"
            className="w-full overflow-hidden rounded-2xl border-3 border-black"
          >
            <TabsList className="flex w-full items-stretch bg-transparent p-0">
              {serviceTabsData.map((tab) => (
                <TabsTrigger
                  key={tab.value}
                  value={tab.value}
                  className="group relative flex flex-1 cursor-pointer items-center justify-center border-1 border-t-0 border-b-2 border-black bg-transparent px-5 py-12 text-lg font-semibold text-black shadow-none transition-all duration-200 focus-visible:ring-0 focus-visible:ring-offset-0 data-[state=active]:border-0 data-[state=active]:bg-transparent data-[state=active]:text-black data-[state=active]:shadow-none"
                >
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {serviceTabsData.map((tab) => (
              <TabsContent
                key={tab.value}
                value={tab.value}
                className="mt-0 pt-10 md:pt-12"
              >
                <div className="grid grid-cols-1 items-center gap-x-12 gap-y-8 p-6 shadow-lg md:grid-cols-2 md:p-10 lg:p-12 lg:py-16">
                  <div className="flex flex-col items-start">
                    <div className="container max-w-xl text-center lg:text-left">
                      <p className="mb-6 text-lg font-medium">
                        {tab.category || "About Us"}
                      </p>
                      <h1 className="text-4xl leading-tight font-bold tracking-tighter md:text-5xl lg:text-6xl">
                        {tab.headline || "Our mission and vision"}
                      </h1>
                      <p className="mt-6 text-xl lg:text-2xl lg:tracking-wide">
                        We are a passionate team of developers and designers
                        committed to delivering innovative digital solutions
                        that transform businesses.
                      </p>

                      <div className="mt-6 flex gap-x-4 md:mt-8">
                        <Button
                          title="Contact"
                          size="lg"
                          className="hover:bg-brand-main h-auto w-max cursor-pointer rounded-full bg-transparent px-5 py-2.5 text-lg font-medium text-black shadow-none outline-2 outline-gray-600 hover:text-white"
                        >
                          Learn more
                        </Button>

                        <Button
                          title="Explore"
                          size="lg"
                          variant="outline"
                          className="hover:bg-brand-main flex h-auto w-max cursor-pointer items-center gap-1.5 rounded-full bg-transparent px-5 py-2.5 text-lg font-medium shadow-none hover:text-white"
                        >
                          <span>Explore</span>
                          <RxChevronRight className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Right Image Area */}
                  <div className="flex justify-center md:justify-end">
                    <img
                      src={tab.imageSrc}
                      alt={tab.imageAlt}
                      className="aspect-auto h-[400px] w-full rounded-2xl object-cover shadow-md md:h-[600px] md:w-[500px]"
                    />
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
}
